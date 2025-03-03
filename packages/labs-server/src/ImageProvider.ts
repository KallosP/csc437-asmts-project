import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

interface Image {
    src: string;
    name: string;
    author: {
        username: string;
        email: string;
    };
    likes: number;
}

export class ImageProvider {
    constructor(private readonly mongoClient: MongoClient) {}

    async updateImageName(imageId: string | any, newName: string): Promise<number> {
        const db = this.mongoClient.db();
        const result = await db.collection("images").updateOne(
            { "_id": imageId }, // The filter applied
            { $set: { name: newName } } // The update to make
        );

        return result.modifiedCount; // Returns 1 if updated, 0 if no match
    }

    async getAllImages(author?: string): Promise<Image[]> {
        const db = this.mongoClient.db();
        const imagesCollectionName = process.env.IMAGES_COLLECTION_NAME;
        const usersCollectionName = process.env.USERS_COLLECTION_NAME;

        if (!imagesCollectionName || !usersCollectionName) {
            throw new Error("Missing collection names from environment variables");
        }

        const imagesCollection = db.collection(imagesCollectionName);

        // Build the aggregation pipeline
        const pipeline: any[] = [];

        // Conditionally add the $match stage if author is provided
        if (author) {
            pipeline.push({
                $match: { author }
            });
        }

        // Add the $lookup stage
        pipeline.push(
            {
                $lookup: {
                    from: usersCollectionName,
                    localField: "author",
                    foreignField: "_id",
                    as: "authorInfo",
                },
            },
            {
                $unwind: "$authorInfo",
            },
            {
                $project: {
                    _id: 0,
                    src: 1,
                    name: 1,
                    author: {
                        username: "$authorInfo.username",
                        email: "$authorInfo.email",
                    },
                    likes: 1,
                },
            }
        );
    
        const images = await imagesCollection.aggregate<Image>(pipeline).toArray();

        return images;
    }
}
