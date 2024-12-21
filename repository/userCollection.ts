import { UserModel } from "@/entities/user";
import RepositoryBase from "./repositoryBase";

export default class UserCollection extends RepositoryBase<UserModel>{
    constructor () {
        super();
        this.registerModel(UserModel)
    }
}