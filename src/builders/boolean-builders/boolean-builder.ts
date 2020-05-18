import { IBooleanBuilder } from './boolean-builder.interface';
import { generateRandomNumber } from "@shared/number-generator";
import { sealed } from "@decorators/sealed.decorator";

@sealed
export class BooleanBuilder implements IBooleanBuilder {

    public build(): boolean {
        return !!generateRandomNumber(0, 1);
    }
}