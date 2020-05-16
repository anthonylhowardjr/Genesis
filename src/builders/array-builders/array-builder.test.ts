import { ArrayBuilder } from "./array-builder";
import { IArrayBuilder } from "./array-builder.interface";

describe(`An ArrayStrategy instance`, () => {
    let arrayBuilder: IArrayBuilder;

    beforeEach(() => {
        arrayBuilder = new ArrayBuilder();
    });

    describe(`when create is initialized`, () => {
        test('should be truthy', () => {
            expect(arrayBuilder).not.toBeNull();
            expect(arrayBuilder).toBeTruthy();
        });
    });

    describe(`when build is invoked`, () => {
        test('an empty array of specified type should be created', () => {
            const array = arrayBuilder.build();

            expect(array).toBeTruthy();
            expect(array).toHaveLength(0);
        });
    });
});