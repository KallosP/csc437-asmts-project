import { Collection, MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

interface ICredentialsDocument {
    username: string;
    password: string;
}

export class CredentialsProvider {
    private readonly collection: Collection<ICredentialsDocument>;

    constructor(mongoClient: MongoClient) {
        const COLLECTION_NAME = process.env.CREDS_COLLECTION_NAME;
        if (!COLLECTION_NAME) {
            throw new Error("Missing CREDS_COLLECTION_NAME from env file");
        }
        this.collection = mongoClient.db().collection<ICredentialsDocument>(COLLECTION_NAME);
    }

    async registerUser(username: string, plaintextPassword: string) {
        const fetchedUser = await this.collection.findOne({ username });
        if (fetchedUser){
            console.log("User already exits")
            return false;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(plaintextPassword, salt);

        this.collection.insertOne({
            username: username,
            // Can easily separate salt and hash later because each is a constant length.
            password: hashedPassword
        });

        // Might also create other user metadata records here, but not in this lab.
        return true
    }

    async verifyPassword(username: string, plaintextPassword: string) {
        const fetchedUser = await this.collection.findOne({username: username})

        if (!fetchedUser) {
            return false;
        }

        const hashedPassword = fetchedUser.password

        const matches = await bcrypt.compare(plaintextPassword, hashedPassword)
        return matches
    }
}
