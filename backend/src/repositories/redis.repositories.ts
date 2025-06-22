import { redisClient } from "../config/redis";

export class redisRepositories {
    static async get(key: string) {
        console.log(key)
        return await redisClient.get(key)
    }
    
    static async set(key: string, value: string){
        return await redisClient.set(key, value)
    }
}