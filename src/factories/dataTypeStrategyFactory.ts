import { IDataTypeStrategyFactory, IDataTypeFactory } from "./IDataTypeStrategyFactory";
import { IDataTypeStrategy } from "../dataTypeStrategies/IDataTypeStrategy";
import { NumberStrategy } from "../dataTypeStrategies/numberStrategy";
import { SupportedValueType } from "../globals/supportedValueTypes.enum";
import { BooleanStrategy } from "../dataTypeStrategies/booleanStrategy";
import { EnumStrategy } from "../dataTypeStrategies/enumStrategy";
import { ArrayStrategy } from "../dataTypeStrategies/arrayStrategy";
import { ObjectStrategy } from "../dataTypeStrategies/objectStrategy";
import { StringStrategy } from "../dataTypeStrategies/string/guidStringBuilder";

export class DataTypeStrategyFactory implements IDataTypeFactory {
    private readonly _dataTypeStrategies: Map<SupportedValueType, IDataTypeStrategy>;
    private readonly _dataTypeStrategies: Map<SupportedValueType, IDataTypeStrategy>;
    private readonly _dataTypeStrategies: Map<SupportedValueType, IDataTypeStrategy>;
    private readonly _dataTypeStrategies: Map<SupportedValueType, IDataTypeStrategy>;
    private readonly _dataTypeStrategies: Map<SupportedValueType, IDataTypeStrategy>;

    constructor() {
        this._dataTypeStrategies = this.configureDataTypeStrategies();
    }
    generateArray<T>(): T[] {
        throw new Error("Method not implemented.");
    }
    generateString(): string {
        throw new Error("Method not implemented.");
    }
    generateBoolean(): boolean {
        throw new Error("Method not implemented.");
    }
    generateNumber(): number {
        throw new Error("Method not implemented.");
    }
    generateObject<T>(): T {
        throw new Error("Method not implemented.");
    }

    private configureDataTypeStrategies<T>(): Map<Type, IDataTypeStrategy> {
        var e = new Map([
            [SupportedValueType.Array, ArrayStrategy],
            [SupportedValueType.Boolean, BooleanStrategy],
            [SupportedValueType.Number, NumberStrategy],
            [SupportedValueType.Object, ObjectStrategy],
            [SupportedValueType.String, StringStrategy],
        ]);
    }

}