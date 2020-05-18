import { sealed } from "@decorators/sealed.decorator";
import { IEnumBuilder } from "./enum-builder.interface";

@sealed
export class EnumBuilder implements IEnumBuilder {
    public build(): {} {
        throw new Error("Method not implemented.");
    }
}