import { IBooleanBuilder } from './boolean-builder.interface';
import { generateRandomNumber } from "@genesis/shared/number-generator";

export class BooleanBuilder implements IBooleanBuilder {

    public build(): boolean {
        return !!generateRandomNumber(0, 1);
    }
}