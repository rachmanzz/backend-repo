import { UserModel } from "@/entities/user"
import { expressHandler } from "./handlerBaseType"
import UserCollection from "@/repository/userCollection"

export const handlerFetchUser: expressHandler<any, any> = async (req, res) => {
    try {
        const [repo, error] = UserCollection.init()
        if (error) throw error
        const data = await repo!.getOne(req.params.doc_id)
        return res.json(data)
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
        else { console.log("unknown error") }
        return res.sendStatus(500)
    }
}