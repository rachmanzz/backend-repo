import { UserModel } from "@/entities/user"
import { expressHandler } from "./handlerBaseType"
import UserCollection from "@/repository/userCollection"

export const handlerUpdateUser: expressHandler<Partial<UserModel>, any> = async (req, res) => {
    try {
        const [repo, error] = UserCollection.init()
        if (error) throw error
        const data = await repo!.update(req.params.doc_id, req.body)
        return res.json(data)
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
        else { console.log("unknown error") }
        return res.sendStatus(500)
    }
}