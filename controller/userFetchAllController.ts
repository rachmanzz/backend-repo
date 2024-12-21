import { UserModel } from "@/entities/user"
import { expressHandler } from "./handlerBaseType"
import UserCollection from "@/repository/userCollection"

export const handlerFetchAllUser: expressHandler<any, {status: string, data: {id: string, data: UserModel}[]}> = async (req, res) => {
    try {
        const [repo, error] = UserCollection.init()
        if (error) throw error
        const data = await repo!.getAll()
        return res.json({status: "OK", data})
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
        else { console.log("unknown error") }
        return res.sendStatus(500)
    }
}