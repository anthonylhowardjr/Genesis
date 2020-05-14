import { IDataTypeStrategy } from "../DataTypeStrategies/IDataTypeStrategy";

export interface IDataTypeFactory {
    generateArray<T>(): Array<T>;
    generateString(): string;
    generateBoolean(): boolean;
    generateNumber(): number;
    generateObject<T>(): T;
}