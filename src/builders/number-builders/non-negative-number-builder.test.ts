import { INumberBuilder } from "./number-builder.interface";
import { NonNegativeNumberBuilder } from "./non-negative-number-builder";

describe(`A NumberBuilder instance`, () => {
    let numberBuilder: INumberBuilder;

    beforeEach(() => {
        numberBuilder = new NonNegativeNumberBuilder();
    });

    describe(`when build is initialized`, () => {
        test("should be truthy", () => {
            expect(numberBuilder).not.toBeNull();
            expect(numberBuilder).toBeTruthy();
        });
    });

    describe(`when build is invoked`, () => {
        test("a random non-negative number should be created", () => {
            const generatedNumber = numberBuilder.build();

            expect(generatedNumber).toBeTruthy();
            expect(generatedNumber).toBeGreaterThan(0);
            expect(Math.sign(generatedNumber)).toEqual(1);
        });
    });
});

