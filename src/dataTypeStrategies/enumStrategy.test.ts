import { EnumStrategy } from './enumStrategy';

describe(`An EnumStrategy instance`, () => {
    let enumStrategy: EnumStrategy<Values>;

    beforeEach(() => {
        enumStrategy = new EnumStrategy<Values>();
    });

    describe(`when create is initialized`, () => {
        test('should be truthy', () => {
            expect(enumStrategy).toBeTruthy();
        });
    });

    describe(`when create is invoked`, () => {
        test('a random boolean value should be returned', () => {
            const enumType = enumStrategy.create();

            

            expect(typeof(enumType)).toEqual("enum");
        });
    });
});

enum Values{
    One,
    Two,
    three
}