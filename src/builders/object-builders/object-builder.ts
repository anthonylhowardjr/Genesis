import { IObjectBuilder } from "./object-builder.interface";

export class ObjectBuilder implements IObjectBuilder {
    public build<T extends object>(objectType: new () => T): T {
        if (!objectType) {
            throw Error("Could not build object because type is not supported.");
        }

        return new objectType();
    }
}