import { IDataTypeStrategy } from "./IDataTypeBuilderStrategy";

export class EnumStrategy implements IDataTypeStrategy {
    public create(): T {
        throw new Error("Method not implemented.");
    }
}