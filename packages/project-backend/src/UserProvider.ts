import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

export class UserProvider{
    constructor(private readonly mongoClient: MongoClient) {}

}
