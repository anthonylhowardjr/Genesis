import { EnumBuilderFactory } from "./enum-builder-factory";
import { EnumBuilderType } from "@enums/enum-builder-type.enum";

describe(`An EnumBuilderFactory instance`, () => {
    let enumBuilderFactory: EnumBuilderFactory;

    beforeEach(() => {
        enumBuilderFactory = new EnumBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(enumBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBuilder is invoked`, () => {
        for (const enumBuilderType in EnumBuilderType) {
            const targetBuilder: EnumBuilderType = EnumBuilderType[enumBuilderType as keyof typeof EnumBuilderType];

            test(`an properly configured builder of type ${targetBuilder} should be provided`, () => {
                const builder = enumBuilderFactory.getBuilder(targetBuilder);

                expect(builder).toBeTruthy();
            });
        }

        test('an properly configured default/fallback builder should be provided', () => {
            const builder = enumBuilderFactory.getBuilder();

            expect(builder).toBeTruthy();
        });
    });
});