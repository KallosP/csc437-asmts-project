import express, { Request, Response } from "express";
import { MongoClient } from "mongodb";
import { CredentialsProvider } from "../CredentialsProvider";

import jwt from "jsonwebtoken";


function generateAuthToken(username: string): Promise<string> {
    const signatureKey = process.env.JWT_SECRET
    if (!signatureKey) {
        throw new Error("Missing JWT_SECRET from env file");
    }

    return new Promise<string>((resolve, reject) => {
        jwt.sign(
            { username: username },
            signatureKey,
            { expiresIn: "1d" },
            (error, token) => {
                if (error) reject(error);
                else resolve(token as string);
            }
        );
    });
}

export function registerAuthRoutes(app: express.Application, mongoClient: MongoClient) {
    const credentialsProvider = new CredentialsProvider(mongoClient);
    app.post("/auth/register", (req: Request, res: Response) => {
        const username = req.body.username
        const password = req.body.password

        if(username === undefined || password === undefined) {
            res.status(400).send({
                error: "Bad request",
                message: "Missing username or password"
            });
            return;

        }
        credentialsProvider.registerUser(username, password).then((result) => {
            if (!result) {
                res.status(400).send({
                    error: "Bad request",
                    message: "Username already taken"
                });
            }
            else{
                res.status(201).send() 
            }
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    })

    app.post("/auth/login", (req: Request, res: Response) => {
        const {username, password} = req.body

        if(username === undefined || password === undefined) {
            res.status(400).send({
                error: "Bad request",
                message: "Missing username or password"
            });
            return;
        }

        credentialsProvider.verifyPassword(username, password).then((result) => {
            if (result) {
                generateAuthToken(username).then((token) => {
                    res.send({token: token})        
                })
            }
            else {
                res.status(401).send({
                    error: "Bad request",
                    message: "Incorrect username or password"
                });
            }
        })
    })
}