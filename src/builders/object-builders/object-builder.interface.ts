export interface IObjectBuilder {
    build<T extends object | Object>(objectType: new () => T): T;
}
