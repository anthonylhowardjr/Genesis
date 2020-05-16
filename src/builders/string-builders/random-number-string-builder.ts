import { generateRandomNumber } from "@genesis/shared/number-generator";
import { IStringBuilder } from "./string-builder.interface";

export class RandomNumberStringBuilder implements IStringBuilder {
    build(): string {
        return generateRandomNumber(0, 100000).toString();
    }
}