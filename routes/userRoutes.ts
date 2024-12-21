import { Router } from "express";
//import {db} from "@config/firebaseConfig"
import UserCollection from "@/repository/userCollection";
import { Response } from "express";

const route = Router();

route.get('/create-one', async (_, res) => {
    const [repo] = UserCollection.init()
    if (repo) {
        repo.create({id: "2", name: "Ivani Anastacia Sattu"})
        res.send("OK")
        return
    }
    res.send("FAIL")

})


export default route;