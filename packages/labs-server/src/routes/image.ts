import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";
import { ImageProvider } from "../ImageProvider";

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
        // FIXME: should this be author?
        const author = req.body.name;

        if (!author) {
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

}