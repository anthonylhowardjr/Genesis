import { ArrayBuilderType } from '@enums/array-builder-type.enum';
import { BooleanBuilderType } from "@enums/boolean-builder-type.enum";
import { DataTypeBuilder } from "@enums/data-type-builder.enum";
import { EnumBuilderType } from "@enums/enum-builder-type.enum";
import { NumberBuilderType } from "@enums/number-builder-type.enum";
import { ObjectBuilderType } from '@enums/object-builder-type.enum';
import { StringBuilderType } from "@enums/string-builder-type.enum";
import { DataTypeGeneratorService } from "./services/data-type-generator-service";

export class Genesis {
  constructor() {
    this._dataTypeGeneratorService = new DataTypeGeneratorService(); // Replace with DI   
  }

  // Dates
  public create<T extends Date = Date>(constructor: new (value: number | string) => T): T;
  public create<T extends Date = Date>(constructor: new (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number) => T): T;

  // Regex
  public create<T extends RegExp = RegExp>(constructor: new (pattern: RegExp | string) => T): T;
  public create<T extends RegExp = RegExp>(constructor: new (pattern: string, flags?: string) => T): T;

  // Function 
  public create<T extends Function>(constructor: new (...args: string[]) => T): T;

  // Array Like
  public create<T>(constructor: new (length: number) => T): T;
  public create<T>(constructor: new (arrayOrArrayBuffer: ArrayLike | ArrayBufferLike) => T): T;
  public create<T>(constructor: new (arrayOrArrayBuffer: any | ArrayBufferLike) => T): T;

  // DataView
  public create<T extends DataView = DataView>(constructor: new (buffer: ArrayBufferLike, byteOffset: number, length?: number) => T): T;

  public create<T = any>(constructor: ArrayConstructor, builderType?: BuilderType<T>): Array<T>;
  public create<T>(constructor: new (elements: Iterable<number>) => T): T;

  // Types with builder options
  public create(constructor: Boolean | boolean): boolean;

  public create<T extends String = String>(constructor: StringConstructor, builder: StringBuilder): T;
  public create<T extends Boolean = Boolean>(constructor: BooleanConstructor, builderType?: BooleanBuilder): T;
  public create<T extends Number = Number>(constructor: NumberConstructor, builderType?: NumberBuilder): T;
  public create<T extends Object = Object>(constructor: new () => T, builderType?: ObjectBuilder): T;
  public create<T extends Object = Object>(constructor: ObjectConstructor, builderType?: BuilderType<T>): T;
  public create<T extends Object = any>(constructor: new () => T, builderType?: BuilderType<T>): T;
  public create<T extends Object>(constructor: any, builderType?: BuilderType<T>): T {
    const constructedObject = new constructor();

    constructedObject.constructor === String;

    this._dataTypeGeneratorService.build(constructedObject);

    throw Error("Not Implemented");
  }

  private readonly _dataTypeGeneratorService: DataTypeGeneratorService;
}

export type BuilderType<T> =
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
