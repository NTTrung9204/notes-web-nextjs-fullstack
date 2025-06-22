import { Request, Response } from "express";
import { redisServices } from "../services/redis.services";

export class notesController {
    static async get(req: Request, res: Response) {
        const visitorCounter = await redisServices.getCounter()

        res.status(200).send({
            visitorCounter
        })
    }


}