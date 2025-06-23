import { redisRepositories } from "../repositories/redis.repositories"
import { counterService } from "./counter.services"

export class redisServices {
    static defaultCounterValue: string = "0"

    static async initRedis() {
        const visitorCounter: string | null = await redisRepositories.get('visitorCounter')
        if (!visitorCounter) {
            await redisRepositories.set("visitorCounter", this.defaultCounterValue)
            return this.defaultCounterValue
        }
        else {
            console.log("Visiter counter is really exist:", visitorCounter)
        }
        return visitorCounter
    }

    static async getCounter() {
        const visitorCounter = await redisRepositories.get("visitorCounter")
        if (!visitorCounter) return await this.initRedis()
        return visitorCounter
    }

    static async incrementCounter() {
        const newValue = String(Number(await this.getCounter()) + 1)
        await counterService.setVisiter(Number(newValue))
        await redisRepositories.set("visitorCounter", newValue)
        return newValue
    }

    static async items() {
        return await redisRepositories.items()
    }

    static async getByKey(key: string) {
        return await redisRepositories.get(key)
    }

    static async setNewValue(key: string, value: string) {
        return await redisRepositories.set(key, value)
    }

    static async deleteKey(key: string) {
        return await redisRepositories.delete(key)
    }
}