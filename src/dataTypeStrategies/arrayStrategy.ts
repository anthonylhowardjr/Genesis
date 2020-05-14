import { IDataTypeStrategy } from "./IDataTypeStrategy";

export class ArrayStrategy implements IDataTypeStrategy {

    public create(): Array<T> {
        return new Array<T>();
    }
}