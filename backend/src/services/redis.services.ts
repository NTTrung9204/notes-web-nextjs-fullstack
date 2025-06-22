import { redisRepositories } from "../repositories/redis.repositories"

export class redisServices {

    static async initRedis() {
        const visitorCounter: string | null = await redisRepositories.get('visitorCounter')

        console.log("Get counter 1:", visitorCounter)

        if (!visitorCounter) {
            const defaultCounterValue = "0"
            await redisRepositories.set("visitorCounter", defaultCounterValue)
            console.log("Visiter counter set to:", defaultCounterValue)
            return defaultCounterValue
        }
        else {
            console.log("Visiter counter is really exist:", visitorCounter)
        }
        return visitorCounter
    }

    static async getCounter() {
        const visitorCounter = await redisRepositories.get("visitorCounter")

        console.log("Get counter 2:", visitorCounter)

        if (!visitorCounter) return await this.initRedis()

        return visitorCounter
    }

    static async incrementCounter() {
        const newValue = String(Number(await this.getCounter()) + 1)
        console.log("newValue", newValue)
        await redisRepositories.set("visitorCounter", newValue)

        return newValue
    }

}