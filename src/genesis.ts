import { Guid } from 'guid-typescript';

export class Genesis {
  /**
     * Creates a new object of Type T.
     <Type>*/
  public create<T extends string>(value?: T): T;
  public create<T extends number>(value?: T): T;
  public create<T extends number>(value?: T): T;
  public create<TType extends string | number | bigint | boolean>(value: TType): string | number | bigint | boolean | TType | null{
    // return value ? this.generateValue(value) : this.generateValue<TType>();

    return null;
  }

  private generateValue<TType extends string | number | bigint | boolean>(value?: TType): void {
    // var valueType = null as TType;

    // switch (typeof(valueType)) {
    //   case 'string':
    //     return Guid.create().toString();
    //   case 'number':
    //   case 'bigint':
    //     return this.generateRandomNumber(0, 10000);
    //   case 'boolean':
    //     return !!Math.random();
    // //   case 'object':
    // //     return {} as TType;
    //   default:
    //     throw `Value type of ${type} is not supported.`;
    // }
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

class Person {
    protected name: string | number | bigint | void | Function | Enumerator;
    protected constructor(theName: string) { this.name = theName; }
}

enum Values{
    One,
    Two,
    three
}
