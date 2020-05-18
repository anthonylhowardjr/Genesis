
import { ObjectBuilderType } from "@enums/object-builder-type.enum";
import { ObjectBuilderFactory } from "./object-builder-factory";

describe(`An ObjectBuilderFactory instance`, () => {
    let objectBuilderFactory: ObjectBuilderFactory;

    beforeEach(() => {
        objectBuilderFactory = new ObjectBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(objectBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBuilder is invoked`, () => {
        for (const objectBuilderType in ObjectBuilderType) {
            const targetBuilder: ObjectBuilderType = ObjectBuilderType[objectBuilderType as keyof typeof ObjectBuilderType];

            test(`an properly configured builder of type ${targetBuilder} should be provided`, () => {
                const builder = objectBuilderFactory.getBuilder(targetBuilder);

                expect(builder).toBeTruthy();
            });
        }

        test('an properly configured default/fallback builder should be provided', () => {
            const builder = objectBuilderFactory.getBuilder();

            expect(builder).toBeTruthy();
        });
    });
});