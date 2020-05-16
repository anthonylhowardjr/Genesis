import { IObjectBuilder } from "./object-builder.interface";
import { ObjectBuilder } from "./object-builder";

describe(`A ObjectBuilder instance`, () => {
    let objectBuilder: IObjectBuilder;

    beforeEach(() => {
        objectBuilder = new ObjectBuilder();
    });

    describe("when create is initialized", () => {
        test("should be truthy", () => {
            expect(objectBuilder).not.toBeNull();
            expect(objectBuilder).toBeTruthy();
        });
    });

    describe("when build is invoked", () => {
        for (const objectType of [Object, Array]) {
            test(`the built-in object type ${objectType} should be created`, () => {
                const object = objectBuilder.build(objectType);

                expect(object).toBeTruthy();
            });
        }

        test("a class should be instantiated", () => {
            const object = objectBuilder.build(SampleClass);

            expect(object).toBeTruthy();
            expect(object.test).toEqual("");
        });
    });
});

class SampleClass {
    test: string = "";
}
