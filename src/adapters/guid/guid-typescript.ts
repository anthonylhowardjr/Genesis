import { Guid } from "guid-typescript";
import { IGuidAdapter } from "./guid-adapter.interface";

export class GuidTypescript implements IGuidAdapter {       
    public createJson(): JSON {
        const guid = Guid.create();

        return guid.toJSON() as JSON;
    }

    public createString(): string {
        const guid = Guid.create();

        return guid.toString();
    }
}