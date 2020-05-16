import { Guid } from 'guid-typescript';

export class Genesis {
  // private _dataTypeGeneratorFactory: IDataTypeGeneratorFactory;

  constructor() {
    // this._dataTypeGeneratorFactory = new DataTypeGeneratorFactory();    
  }

  /**
     * Creates a new object of Type T.
     <Type>*/
  public create<T>(value: Array<T>): Array<T>;
  public create<T extends object>(value: T): T;
  public create<T extends object>(value: (new () => T)): T;
  public create<T extends object>(value: (new () => T) | T | number): T | Number {
    // return value ? this.generateValue(value) : this.generateValue<TType>();
    // let test = this._dataTypeGeneratorFactory.generate({});

    console.log(typeof value)

    if (typeof value === 'function') {
      let e = value as (new () => T);

      var ee = new e();

      console.log(ee)

      return ee;
    }

    console.log(value)

    return value;
  }

  public createString(): string;
  public createString(value?: string): string {
    return '';
  }

  public createNumber(): number;
  public createNumber(value?: number): number {

    return 2;
  }

  public createBoolean(): boolean;
  public createBoolean(value?: boolean): boolean {

    return false;
  }

  public createArray<T>(): Array<T>;
  public createArray<T>(value: Array<T>): Array<T>;
  public createArray<T>(value?: Array<T>): Array<T> {

    return [];
  }
}

type T0 = Exclude<Function, object>;
