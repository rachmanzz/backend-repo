import {Request, Response, NextFunction} from "express";

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    if (authHeader) {
        try {
            const [_, token] = authHeader.split(/\s/);
            if (!token) throw new Error("undefined token")
            if (token !== process.env.TOKENAPI) throw new Error("invalid token")
            next()
            return
        } catch (error) {
            res.sendStatus(401);
            return
        }
    }
    res.sendStatus(401);
}