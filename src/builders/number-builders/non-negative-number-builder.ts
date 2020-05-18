import { generateRandomNumber } from "@shared/number-generator";
import { INumberBuilder } from "./number-builder.interface";
import { sealed } from "@decorators/sealed.decorator";

@sealed
export class NonNegativeNumberBuilder implements INumberBuilder {
    public build(): number {
        return generateRandomNumber(0, 100000);
    }
}