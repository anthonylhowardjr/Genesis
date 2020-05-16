import { generateRandomNumber } from "@genesis/shared/number-generator";
import { INumberBuilder } from "./number-builder.interface";

export class NonNegativeNumberBuilder implements INumberBuilder {
    public build(): number {
        return generateRandomNumber(0, 100000);
    }
}