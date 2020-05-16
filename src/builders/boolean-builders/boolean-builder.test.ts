import { BooleanBuilder } from "./boolean-builder";
import { IBooleanBuilder } from "./boolean-builder.interface";

describe(`An BooleanStrategy instance`, () => {
    let booleanBuilder: IBooleanBuilder;

    beforeEach(() => {
        booleanBuilder = new BooleanBuilder();
    });

    describe("when initialized", () => {
        test("should be truthy", () => {
            expect(booleanBuilder).toBeTruthy();
            expect(booleanBuilder).toMatchSnapshot();
        });
    });

    describe("when build is invoked", () => {
        test("a random boolean value should be returned", () => {
            const boolean = booleanBuilder.build();

            expect(typeof (boolean)).toEqual("boolean");
        });
    });
});