import { IDataTypeStrategy } from "./IDataTypeBuilderStrategy";
import { generateRandomNumber } from "../shared/numberGenerator";

export class NumberStrategy implements IDataTypeStrategy {
    public create(): number {
        return generateRandomNumber(0, 100000);
    }
}