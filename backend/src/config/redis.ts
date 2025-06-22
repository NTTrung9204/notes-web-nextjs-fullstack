import { createClient } from "redis";
import { redisServices } from "../services/redis.services";


export const redisClient = createClient({
    url: "redis://localhost:6379"
})

export async function connectRedis() {
    if (!redisClient.isReady){
        try {
            await redisClient.connect()
            console.log('Connected to Redis!');
            await redisServices.initRedis()
        } catch (error) {
            console.error('Could not connect to Redis:', error);
        }
    }
}