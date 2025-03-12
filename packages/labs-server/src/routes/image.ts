import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";
import { ImageProvider } from "../ImageProvider";
import { imageMiddlewareFactory, handleImageFileErrors } from "../imageUploadMiddleware";

export function registerImageRoutes(app: express.Application, mongoClient: MongoClient) {
	app.get("/api/images", (req: Request, res: Response) => {

        let userId: string | undefined = undefined;
        if (typeof req.query.createdBy === "string") {
            userId = req.query.createdBy;
        }

		const imageProvider = new ImageProvider(mongoClient);
		imageProvider.getAllImages(userId).then((images) => {
			res.send(images);
		});
	});

    app.patch("/api/images/:id", (req: Request, res: Response) => {
        const name = req.body.name;

        if (!name) {
            res.status(400).send({
                error: "Bad request",
                message: "Missing name property",
            });
        }

        const imageProvider = new ImageProvider(mongoClient);
        imageProvider.updateImageName(req.params.id, req.body.name).then(
            (result) => {
                console.log(result);
                if (result === 0) {
                    res.status(404).send({
                        error: "Not found",
                        message: "Image does not exist"
                    });
                } else {
                    res.status(204).send();
                }
            }
        )
    });

    app.post(
        "/api/images",
        imageMiddlewareFactory.single("image"),
        handleImageFileErrors,
        async (req: Request, res: Response): Promise<void> => {
            try {
                // Validate required fields
                if (!req.file) {
                    res.status(400).send({
                        error: "Bad Request",
                        message: "Image file is required.",
                    });
                    return
                }

                if(!req.body.name) {
                    res.status(400).send({
                        error: "Bad Request",
                        message: "Image name is required.",
                    });
                    return
                }
    
                // Extract file details
                const filename = req.file.filename;
                const imageUrl = `/uploads/${filename}`;
                const imageName = req.body.name;
    
                // Extract username from token
                const user = res.locals.token; // This should contain the decoded token
                if (!user || !user.username) {
                    res.status(401).send({
                        error: "Unauthorized",
                        message: "User authentication required.",
                    });
                }
    
                const author = user.username;
    
                // Construct image document
                const newImage = {
                    src: imageUrl,
                    name: imageName,
                    author,
                    likes: 0,
                };
    
                const imageProvider = new ImageProvider(mongoClient);
                // Save to database
                const createdImage = await imageProvider.createImage(newImage);
    
                // Respond with success
                res.status(201).send(createdImage);
            } catch (error) {
                console.error("Error uploading image:", error);
                res.status(500).send({
                    error: "Internal Server Error",
                    message: "An error occurred while processing the image upload.",
                });
            }
        }
    )

}