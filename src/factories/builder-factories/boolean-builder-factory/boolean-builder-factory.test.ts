import { BooleanBuilderType } from "@enums/boolean-builder-type.enum";
import { BooleanBuilderFactory } from "./boolean-builder-factory";

describe(`A BooleanBuilderFactory instance`, () => {
    let booleanBuilderFactory: BooleanBuilderFactory;

    beforeEach(() => {
        booleanBuilderFactory = new BooleanBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(booleanBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBuilder is invoked`, () => {
        for (const booleanBuilderType in BooleanBuilderType) {
            const targetBuilder: BooleanBuilderType = BooleanBuilderType[booleanBuilderType as keyof typeof BooleanBuilderType];

            test(`an properly configured builder of type ${targetBuilder} should be provided`, () => {
                const builder = booleanBuilderFactory.getBuilder(targetBuilder);

                expect(builder).toBeTruthy();
            });
        }

        test('an properly configured default/fallback builder should be provided', () => {
            const builder = booleanBuilderFactory.getBuilder();

            expect(builder).toBeTruthy();
        });
    });
});