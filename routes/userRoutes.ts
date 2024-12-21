import { Router } from "express";
import { handlerFetchUser } from "@/controller/userFetchController";
import { handlerCreateUser } from "@/controller/userCreateController";
import { handlerFetchAllUser } from "@/controller/userFetchAllController";
import { handlerUpdateUser } from "@/controller/userUpdateController";
import { handlerDeleteUser } from "@/controller/userDeleteController";

const route = Router();

route.post("/create-user", handlerCreateUser)
route.get("/all-user", handlerFetchAllUser)
route.get("/fetch-user-data/:doc_id", handlerFetchUser)
route.put("/update-user-data/:doc_id", handlerUpdateUser)
route.delete("/delete-user-data/:doc_id", handlerDeleteUser)


export default route;