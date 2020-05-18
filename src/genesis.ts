import { ArrayBuilderType } from '@enums/array-builder-type.enum';
import { BooleanBuilderType } from "@enums/boolean-builder-type.enum";
import { DataTypeBuilder } from "@enums/data-type-builder.enum";
import { EnumBuilderType } from "@enums/enum-builder-type.enum";
import { NumberBuilderType } from "@enums/number-builder-type.enum";
import { ObjectBuilderType } from '@enums/object-builder-type.enum';
import { StringBuilderType } from "@enums/string-builder-type.enum";
import { IDataTypeGeneratorFactory } from "@builder-factories/data-type-builder-factory/data-type-strategy-factory.interface";
import { DataTypeGeneratorService } from "./services/data-type-generator-service";

export class Genesis {
  constructor() {
    this._dataTypeGeneratorService = new DataTypeGeneratorService();    
  }

  public create<T extends String>(constructor: StringConstructor, builder: StringBuilder): T;
  public create<T extends Boolean>(constructor: BooleanConstructor, builderType?: BooleanBuilder): T;
  public create<T extends Number>(constructor: NumberConstructor, builderType?: NumberBuilder): T;
  public create<T>(constructor: new (elements: Iterable<number>) => T): T;
  public create<T = any>(constructor: ArrayConstructor, builderType?: BuilderType<T>): Array<T>;
  public create<T extends Object>(constructor: ObjectConstructor, builderType?: BuilderType<T>): T;
  public create<T extends Object>(constructor: new () => T, builderType?: ObjectBuilder): T;
  public create<T extends Object = any>(constructor: new () => T, builderType?: BuilderType<T>): T {
    const constructedObject = new constructor();

    constructedObject.constructor === String;

    throw Error("Not Implemented");
  }

  private readonly _dataTypeGeneratorService: DataTypeGeneratorService;
}

type BuilderType<T> =
  T extends Array<T>
  ? ArrayBuilder
  : T extends String
  ? StringBuilder
  : T extends Number
  ? NumberBuilder
  : T extends Boolean
  ? BooleanBuilder
  : T extends Object
  ? ObjectBuilder
  : DataTypeBuilder.Object;


export type StringBuilder = StringBuilderType.Guid | StringBuilderType.RandomNumber;
export type EnumBuilder = EnumBuilderType.Default;
export type NumberBuilder = NumberBuilderType.NonNegative;
export type ObjectBuilder = ObjectBuilderType.Default;
export type ArrayBuilder = ArrayBuilderType.Default;
export type BooleanBuilder = BooleanBuilderType;
