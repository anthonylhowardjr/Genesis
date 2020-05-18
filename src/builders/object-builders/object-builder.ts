import { IObjectBuilder } from "./object-builder.interface";
import { sealed } from "@decorators/sealed.decorator";

@sealed
export class ObjectBuilder implements IObjectBuilder {
    public build<T extends object>(objectType: new () => T): T {
        if (!objectType) {
            throw Error("Could not build object because type is not supported.");
        }

        return new objectType();
    }
}