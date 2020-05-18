import { DataTypeBuilderFactory } from "@builder-factories/data-type-builder-factory/data-type-builder-factory";
import { IDataTypeGeneratorFactory } from "@builder-factories/data-type-builder-factory/data-type-strategy-factory.interface";
import { StringBuilderType } from "@enums/string-builder-type.enum";

export class DataTypeGeneratorService {

    constructor() {  
        this._dataTypeBuilderFactory = new DataTypeBuilderFactory(); // Replace with DI    
    }

    public build(builderType: StringBuilderType): T {
        throw Error("Method not implemented");
    }

    public populate<T extends Object>(targetObject: T): T {
        throw Error("Method not implemented");
    }

    public canPopulate(): boolean {
        throw Error("Method not implemented");
    }

    private readonly _dataTypeBuilderFactory: IDataTypeGeneratorFactory;
}