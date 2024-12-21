import { UserModel } from "@/entities/user"
import { expressHandler } from "./handlerBaseType"
import UserCollection from "@/repository/userCollection"

export const handlerDeleteUser: expressHandler<any, any> = async (req, res) => {
    try {
        const [repo, error] = UserCollection.init()
        if (error) throw error
        await repo!.delete(req.params.doc_id)
        return res.json({status: "OK"})
    } catch (error) {
        if (error instanceof Error) console.log(error.message)
        else { console.log("unknown error") }
        return res.sendStatus(500)
    }
}