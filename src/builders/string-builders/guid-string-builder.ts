import { IGuidAdapter } from "@genesis/guid/guid-adapter.interface";
import { GuidTypescript } from "@genesis/guid/guid-typescript";
import { IStringBuilder } from "./string-builder.interface";

export class GuidStringBuilder implements IStringBuilder {
    constructor() {
        // Replace with DI at some point
        this._guid = new GuidTypescript();
    }

    build(): string {
        return this._guid.createString();
    }

    private _guid: IGuidAdapter;
}