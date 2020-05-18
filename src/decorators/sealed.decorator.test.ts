import { logClass, logger } from "./sealed.decorator";

describe("The @sealed decorator", () => {
    describe("when placed above class", () => {
        let sealedClass: SealedClass;

        beforeEach(() => {
            sealedClass = new SealedClass();
        });

        test("should sealed its construction", () => {
            sealedClass.method<string>();
            expect(sealedClass).toBeTruthy();
            expect(Object.isSealed(sealedClass)).toEqual(false);
        });
    });

    describe("when placed above a parent", () => {
        let inheritedClass: InheritedClass;

        beforeEach(() => {
            inheritedClass = new InheritedClass();
        });

        test("should not seal derived classes", () => {
            expect(Object.isSealed(inheritedClass)).toEqual(false);
        });
    });
});

@logClass
class SealedClass {
    constructor(private readonly provideThisValue?: string) {
    }

    propertyOne = "Test";
    method<T>(test?: Array<T>) { }
}

class InheritedClass extends SealedClass {
    propertyTwo = "e";
}