import { generateRandomNumber } from "@shared/number-generator";
import { IStringBuilder } from "./string-builder.interface";
import { sealed } from "@decorators/sealed.decorator";

@sealed
export class RandomNumberStringBuilder implements IStringBuilder {
    build(): string {
        return generateRandomNumber(0, 100000).toString();
    }
}