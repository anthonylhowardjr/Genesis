export enum DataTypeBuilder {
    String = "String",
    Number = "Number",
    Array = "Array",
    Object = "Object",
    Enum = "Enum",
    Boolean = "Boolean"
}

export type DataType = Record<DataTypeBuilder, string>;
