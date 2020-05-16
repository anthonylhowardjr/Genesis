import { StringBuilderType } from "@genesis/enums/string-builder-type.enum";
import { StringBuilderFactory } from "./string-builder-factory";

describe(`A StringBuilderFactory instance`, () => {
    let stringBuilderFactory: StringBuilderFactory;

    beforeEach(() => {
        stringBuilderFactory = new StringBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(stringBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBuilder is invoked`, () => {
        for (const stringBuilderType in StringBuilderType) {
            const targetBuilder: StringBuilderType = StringBuilderType[stringBuilderType as keyof typeof StringBuilderType];

            test(`an properly configured builder of type ${targetBuilder} should be provided`, () => {
                const builder = stringBuilderFactory.getBuilder(targetBuilder);

                expect(builder).toBeTruthy();
            });
        }

        test('an properly configured default/fallback builder should be provided', () => {
            const builder = stringBuilderFactory.getBuilder();

            expect(builder).toBeTruthy();
        });
    });
});