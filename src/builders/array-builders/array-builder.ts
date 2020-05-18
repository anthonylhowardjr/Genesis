import { sealed } from "@decorators/sealed.decorator";
import { IArrayBuilder } from "./array-builder.interface";

@sealed
export class ArrayBuilder implements IArrayBuilder {

    public build<T>(): Array<T> {
        return new Array<T>();
    }
}