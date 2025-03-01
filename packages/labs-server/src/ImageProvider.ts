import { MongoClient } from "mongodb";

interface Image {
    src: string;
    name: string;
    author: {
        username: string;
        email: string;
    };
    likes: number;
}

export default class ImageProvider {
    constructor(private readonly mongoClient: MongoClient) {}

    async getAllImages(): Promise<Image[]> {
        const db = this.mongoClient.db();
        const imagesCollectionName = process.env.IMAGES_COLLECTION_NAME;
        const usersCollectionName = process.env.USERS_COLLECTION_NAME;

        if (!imagesCollectionName || !usersCollectionName) {
            throw new Error("Missing collection names from environment variables");
        }

        const imagesCollection = db.collection(imagesCollectionName);

        const images = await imagesCollection
            .aggregate<Image>([ // Explicitly type the aggregation output
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
                },
            ])
            .toArray();

        return images;
    }
}
