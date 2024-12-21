// actually I no idea the entity goes to
// so I do simillar like nest.js to

import BaseEntity from "./entityBase";

export class UserModel extends BaseEntity{
    id!: string
    name!: string
    age?: number
}