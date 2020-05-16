import { Genesis } from "./genesis";

describe(`A Genesis instance`, () => {
  let genesis: Genesis;

  beforeEach(() => {
    genesis = new Genesis();
  });

  // describe(`upon instantiation`, () => {
  //   test('should not be null', () => {
  //     expect(genesis).not.toBeNull();
  //     expect(genesis).toBeTruthy();
  //   });
  // });

  describe(`when invoking the create method`, () => {
    // test('should properly create object', () => {
    //   genesis.create<SimpleClassTwo>();
    // });

    test('should properly create object', () => {
      expect(2 + 22).toEqual(2);
    });

    fit('should properly create object', () => {
      var test = genesis.create<Object>(Object);
      var array = genesis.create<Array<string>>(Array);
      // var array = genesis.create<Array<string>>();
      var obj = genesis.create(new SimpleClass());
      var obej = genesis.create(new ComplexClassOne());
      var ww = genesis.create(SimpleClass);
      var wew = genesis.create(Genesis);
      var numbser = genesis.create(() => { });

      expect(numbser).toEqual(2);
    });

    test('should properly create object', () => {
      genesis.createString();
    });

    test('should properly create object', () => {
      genesis.createNumber();
    });

    test('should properly create object', () => {
      genesis.createBoolean();
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
  propertyOne: string = "";
  propertyTwo: string = "";
  propertyThree: number = 2;
  propertyFour: boolean = true;
}

class SimpleClassTwo {
  propertyOne: string = "";
  propertyTwo: string = "";
  propertyThree: number = 0;
  propertyFour: boolean = true;
}

class ComplexClassOne {
  propertyOne: string = "";
  propertyTwo: string = "";
  propertyThree: SimpleClass = new SimpleClass();
  propertyFour: SimpleClassTwo = new SimpleClassTwo();
}

// class ComplexClassTwo implements SimpleClassTwo {
//   propertyOne: string;
//   propertyTwo: string;
//   propertyThree: number;
//   propertyFour: boolean;
//   propertyFive: SimpleClassTwo;
//   propertySix: SimpleClass;
//   propertySeven: SimpleInterface;
//   propertyEight: ComplexClassOne[];
//   propertyNine: string;
// }

enum Values {
  One,
  Two,
  three
}
