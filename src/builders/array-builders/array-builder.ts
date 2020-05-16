import { IArrayBuilder } from "./array-builder.interface";

export class ArrayBuilder implements IArrayBuilder {

    public build<T>(): Array<T> {
        return new Array<T>();
    }
}