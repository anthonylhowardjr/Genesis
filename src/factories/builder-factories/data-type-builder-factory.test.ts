import { DataTypeBuilderFactory } from "./data-type-builder-factory";

describe(`An EnumBuilderFactory instance`, () => {
    let dataTypeBuilderFactory: DataTypeBuilderFactory;

    beforeEach(() => {
        dataTypeBuilderFactory = new DataTypeBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(dataTypeBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBooleanBuilder is invoked`, () => {
        test('an properly configured builder should be provided', () => {
            let builder = dataTypeBuilderFactory.getBooleanBuilder();
            
            const builder2 = dataTypeBuilderFactory.getNumberBuilder();
            const builder2 = dataTypeBuilderFactory.getStringBuilder();

            expect(builder).toBeTruthy();
        });
    });
});

class Test {
    firstName: string = '';
    lastName: string = '';
    age: number = 0;
    someThing: Something = new Something()
}

class Something {
    classes: Array<string> = [];
    ages = [];
    isOld = false
}