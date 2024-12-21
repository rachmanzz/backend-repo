class BaseEntity {
    static entity<T extends BaseEntity>(this: new () => T) {
        return {
            seed: (data: T): T => {
                const instance = new this();
                Object.assign(instance, data);
                return instance;
            },
            getEntityName: () => {
                return this.name;
            },
        };
    }
}

export default BaseEntity;