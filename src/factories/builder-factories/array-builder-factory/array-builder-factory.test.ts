import { ArrayBuilderType } from "@genesis/enums/array-builder-type.enum";
import { ArrayBuilderFactory } from "./array-builder-factory";

describe(`An ArrayBuilderFactory instance`, () => {
    let arrayBuilderFactory: ArrayBuilderFactory;

    beforeEach(() => {
        arrayBuilderFactory = new ArrayBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(arrayBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBuilder is invoked`, () => {

        test(`an properly configured builder of type default should be provided`, () => {
            const builder = arrayBuilderFactory.getBuilder(ArrayBuilderType.Default);

            expect(builder).toBeTruthy();
        });

        test('an properly configured default/fallback builder should be provided', () => {
            const builder = arrayBuilderFactory.getBuilder();

            expect(builder).toBeTruthy();
        });
    });
});