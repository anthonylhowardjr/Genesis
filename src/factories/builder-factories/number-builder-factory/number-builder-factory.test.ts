import { NumberBuilderType } from "@enums/number-builder-type.enum";
import { NumberBuilderFactory } from "./number-builder-factory";

describe(`A NumberBuilderFactory instance`, () => {
    let numberBuilderFactory: NumberBuilderFactory;

    beforeEach(() => {
        numberBuilderFactory = new NumberBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(numberBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBuilder is invoked`, () => {
        for (const numberBuilderType in NumberBuilderType) {
            const targetBuilder: NumberBuilderType = NumberBuilderType[numberBuilderType as keyof typeof NumberBuilderType];

            test(`an properly configured builder of type ${targetBuilder} should be provided`, () => {
                const builder = numberBuilderFactory.getBuilder(targetBuilder);

                expect(builder).toBeTruthy();
            });
        }

        test('an properly configured default/fallback builder should be provided', () => {
            const builder = numberBuilderFactory.getBuilder();

            expect(builder).toBeTruthy();
        });
    });
});