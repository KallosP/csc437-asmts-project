import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

class ImageFormatError extends Error {}

const storageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = process.env.IMAGE_UPLOAD_DIR || "uploads";
        console.log("uploadPath", uploadPath);
        cb(null, path.resolve(uploadPath));
    },
    filename: function (req, file, cb) {
        const extensionMap: { [key: string]: string } = {
            "image/png": ".png",
            "image/jpeg": ".jpg",
            "image/jpg": ".jpg"
        };

        const extension = extensionMap[file.mimetype];
        if (!extension) {
            return cb(new ImageFormatError("Unsupported image type"), "");
        }

        const fileName = Date.now() + "-" + Math.round(Math.random() * 1E9) + "." + extension;

        return cb(null, fileName);
    }
});

export const imageMiddlewareFactory = multer({
    storage: storageEngine,
    limits: {
        files: 1,
        fileSize: 5 * 1024 * 1024 // 5 MB
    },
});

export function handleImageFileErrors(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof multer.MulterError || err instanceof ImageFormatError) {
        res.status(400).send({
            error: "Bad Request",
            message: err.message
        });
        return;
    }
    next(err); // Some other error, let the next middleware handle it
}
