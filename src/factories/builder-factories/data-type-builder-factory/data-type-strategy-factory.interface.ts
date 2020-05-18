import { IBooleanBuilder } from "@boolean-builders/boolean-builder.interface";
import { INumberBuilder } from "@number-builders/number-builder.interface";
import { IStringBuilder } from "@string-builders/string-builder.interface";
import { IObjectBuilder } from "@object-builders/object-builder.interface";
import { IArrayBuilder } from "@array-builders/array-builder.interface";

export interface IDataTypeGeneratorFactory {
    getBooleanBuilder(): IBooleanBuilder;
    getNumberBuilder(): INumberBuilder;
    getStringBuilder(): IStringBuilder;
    getObjectBuilder(): IObjectBuilder;
    getArrayBuilder(): IArrayBuilder;
}