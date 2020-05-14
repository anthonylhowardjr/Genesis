import { IDataTypeStrategy } from "./IDataTypeBuilderStrategy";

export class ObjectStrategy implements IDataTypeStrategy {
    // constructor(private readonly _objectType: new () => T) { }

    public create(): T {
        return new this._objectType();
    }
}