import { IDataTypeStrategy } from "./IDataTypeBuilderStrategy";
import { generateRandomNumber } from "../shared/numberGenerator";

export class BooleanStrategy implements IDataTypeStrategy {

    public create(): boolean {
        return !!generateRandomNumber(0, 1);
    }
}