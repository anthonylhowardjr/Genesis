import { StringStrategy } from "../dataTypeStrategies/string/guidStringBuilder";
import { IDataTypeStrategy } from "../dataTypeStrategies/IDataTypeStrategy";

export class StringFactory {
    private readonly _stringBuilderStrategies: Map<string, IDataTypeStrategy>;

    private configureDataTypeStrategies<T>(): Map<Type, IDataTypeStrategy> {
        var e = new Map([
            ['Something', StringStrategy],
        ]);
    }
}