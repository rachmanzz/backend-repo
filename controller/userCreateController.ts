import { UserModel } from "@/entities/user"
import { expressHandler } from "./handlerBaseType"
import UserCollection from "@/repository/userCollection"

export const handlerCreateUser: expressHandler<UserModel, any> = async (req, res) => {
    try {
        const [repo, error] = UserCollection.init()
        if (error) throw error
        // mostly we use third party library to validate the data like zod
        // I Assume the data always correct
        const data = req.body
        await repo!.create(data)
        return res.json({ status: "OK", data })
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
        else { console.log("unknown error") }
        return res.sendStatus(500)
    }
}