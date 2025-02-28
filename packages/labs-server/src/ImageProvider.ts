import { MongoClient } from "mongodb";

interface Image {
    src: string;
    name: string;
    author: string;
    likes: number;
}

export default class ImageProvider {
    constructor(private readonly mongoClient: MongoClient) {}

    async getAllImages(): Promise<Image[]> { // TODO #2
        const collectionName = process.env.IMAGES_COLLECTION_NAME;
        if (!collectionName) {
            throw new Error("Missing IMAGES_COLLECTION_NAME from environment variables");
        }

        const collection = this.mongoClient.db().collection<Image>(collectionName); // TODO #1
        return collection.find().toArray(); // Without any options, will by default get all documents in the collection as an array.
    }
}