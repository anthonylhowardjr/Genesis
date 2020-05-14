import { Guid } from "guid-typescript";
import { IStringBuilderStrategy } from "./IStringBuilder";

export class GuidStringStrategy implements IStringBuilderStrategy {
    build(): string {
        return Guid.create().toString();
    }
}