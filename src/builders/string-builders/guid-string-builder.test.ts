import { GuidStringBuilder } from "./guid-string-builder";
import { IStringBuilder } from "./string-builder.interface";

describe("A GuidStringBuilder instance", () => {
    let stringBuilder: IStringBuilder;

    beforeEach(() => {
        stringBuilder = new GuidStringBuilder();
    });

    describe("when build initialized", () => {
        test("should be truthy", () => {
            expect(stringBuilder).toBeTruthy();
            expect(stringBuilder).toMatchSnapshot();
        });
    });

    describe("when build is invoked", () => {
        test("a guid string should be created", () => {
            const guidString = stringBuilder.build();

            expect(guidString).toBeTruthy();
            expect(guidString.length).toBeGreaterThan(0);
        });
    });
});

