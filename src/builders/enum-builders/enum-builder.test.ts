import { EnumBuilder } from './enum-builder';

describe(`An EnumStrategy instance`, () => {
    let enumStrategy: EnumBuilder;

    beforeEach(() => {
        enumStrategy = new EnumBuilder();
    });

    describe("when create is initialized", () => {
        test('should be truthy', () => {
            expect(enumStrategy).toBeTruthy();
        });
    });

    describe(`when create is invoked`, () => {
        test('a random boolean value should be returned', () => {
            const enumType = enumStrategy.build();

            

            expect(typeof(enumType)).toEqual("enum");
        });
    });
});

enum Values{
    One,
    Two,
    three
}