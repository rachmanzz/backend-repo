import { db } from "@/config/firebaseConfig";
import BaseEntity from "@/entities/entityBase";


const reflector = <T extends object>(m: T) => {
    const propertyNames = Object.getOwnPropertyNames(m);
    const reflectObject: Record<string, any> = {}
    for (const key of propertyNames ) {
        reflectObject[key] = m[key as keyof T]
    }

    return reflectObject
}

export default class RepositoryBase<M extends BaseEntity>{
    private entity!: ReturnType<typeof BaseEntity['entity']>;
    private collection!: string

    protected registerModel(entityClass: { entity: () => ReturnType<typeof BaseEntity['entity']> }) {
        this.entity = entityClass.entity();
    }

    __EntityInitializedError () {
        if (this.entity) {
            const name = this.entity.getEntityName()
            if (/Model$/.test(name)) {
                this.collection = name.replace(/Model$/, "").toLowerCase()
                return null
            }
            return new Error("model name is not valid")
        }
        return new Error("model is not registered")
    }

    static init<M extends BaseEntity, T extends RepositoryBase<M>>(this: new () => T): [T|null, Error | null] {
        const repo = new this()
        const initError = repo.__EntityInitializedError()
        if (initError !== null) {
            return [null, initError]
        }
        return [repo, null]
    }

    public create(data: M) {
        const model = this.entity.seed(data)
        const reflectorData =  reflector(model)
        return db.collection(this.collection).add(reflectorData)
    }

    public setDoc(doc: string, data: M) {
        const model = this.entity.seed(data)
        return db.collection(this.collection).doc(doc).set(model)
    }

    public async getAll () {
        const all = await db.collection(this.collection).get()

        const data: M[] = []
        all.forEach(doc => {
            // this is just my experiment, this my not good seeding like this on production
            // use zod or similar library to verify object entity will be good
            const modalData = this.entity.seed(doc.data()) as M
            data.push(modalData)
        })
        return data
    }
    
}