// so I do simillar like nest.js

import BaseEntity from "./entityBase";

export class UserModel extends BaseEntity{
    name!: string
    email!: string
    phone!: string
    age?: number
}
