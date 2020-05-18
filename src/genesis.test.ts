import { Genesis } from "./genesis";
import { StringBuilderType } from "@enums/string-builder-type.enum";

describe(`A Genesis instance`, () => {
  let genesis: Genesis;

  const types = new Set([
    Number,
    Date,
    Object,
    Boolean,
    String,
    Array,
    Uint8Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Int8Array,
    Int32Array,
    Uint16Array,
    Int16Array,
    Uint8ClampedArray,
  ]);

  beforeEach(() => {
    genesis = new Genesis();
  });

  describe(`when invoking the create method`, () => {

    for (const objectType of types) {
      it(`should properly create a default instance of ${objectType.prototype.constructor.name}`, () => {
        const created = genesis.create(objectType);

        expect(created).toBeTruthy();
        expect(created instanceof objectType).toEqual(true);
      });
    }

    describe(`when invoking the create method`, () => {

      describe(`with String`, () => {
        it(`should properly create a ${StringBuilderType.RandomNumber} when added as argument`, () => {
          const created = genesis.create(String, StringBuilderType.RandomNumber);

          expect(created instanceof String).toEqual(true);
        });
      });
    });
  });
});

interface SimpleInterface {
  propertyOne: string;
  propertyTwo: string;
  propertyThree: number;
  propertyFour: boolean;
}

class SimpleClass {
  constructor() { }

  propertyOne: string = "";
  propertyTwo: string = "";
  propertyThree: number = 2;
  propertyFour: boolean = true;
}

class SimpleClassTwo {
  constructor(name: string) { }

  propertyOne: string = "";
  propertyTwo: string = "";
  propertyThree: number = 0;
  propertyFour: boolean = true;
}

class ComplexClassOne {
  private e: string;

  constructor() {
    this.e = ComplexClassOne.name;
  }

  propertyOne: string = "";
  propertyTwo: string = "";
  propertyThree: SimpleClass = new SimpleClass();
  propertyFour: SimpleClassTwo = new SimpleClassTwo(this.e);
}

// enum Values {
//   One,
//   Two,
//   three
// }
