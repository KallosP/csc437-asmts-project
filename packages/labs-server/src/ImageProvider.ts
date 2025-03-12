import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

interface Image {
    src: string;
    name: string;
    author: {
        _id: ObjectId;
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
    
        if (!imagesCollectionName) {
            throw new Error("Missing collection name from environment variables");
        }
    
        const imagesCollection = db.collection(imagesCollectionName);
    
        const query = author ? { author } : {};
        const images = await imagesCollection.find<Image>(query).toArray();
    
        return images;
    }


    async createImage(image: {src: string; name: string; author: string; likes: number }): Promise<void> {
        if(image === undefined) {
            throw new Error("Image is undefined");
        }
        const db = this.mongoClient.db();
        const imagesCollectionName = process.env.IMAGES_COLLECTION_NAME;

        if (!imagesCollectionName) {
            throw new Error("Missing collection name from environment variables");
        }

        const imagesCollection = db.collection(imagesCollectionName);

        await imagesCollection.insertOne(image);
    }
}
