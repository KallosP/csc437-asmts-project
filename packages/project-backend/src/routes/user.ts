import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";
import { UserProvider } from "../UserProvider";

export function registerUserRoutes(app: express.Application, mongoClient: MongoClient) {
    // Create User
    app.post("/api/user", (req: Request, res: Response) => {

    });

    // Get User
	app.get("/api/user", (req: Request, res: Response) => {

	});
}