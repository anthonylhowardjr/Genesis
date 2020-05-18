import { DataTypeBuilderFactory } from "@builder-factories/data-type-builder-factory/data-type-builder-factory";
import { IDataTypeGeneratorFactory } from "@builder-factories/data-type-builder-factory/data-type-strategy-factory.interface";
import { BooleanBuilder, BuilderType, NumberBuilder, StringBuilder } from "../genesis";

export class DataTypeGeneratorService {

    constructor() {  
        this._dataTypeBuilderFactory = new DataTypeBuilderFactory(); // Replace with DI    
        this._configureBuilderFactories = new Map([
        ]);
    }

    public build<T extends String>(item: T, builderType?: StringBuilder): T;
    public build<T extends Boolean>(item: T, builderType?: BooleanBuilder): T;
    public build<T extends Number>(item: T, builderType?: NumberBuilder): T;
    public build<T extends Object>(item: T, builderType?: BuilderType<T>): T;
    public build<T = any>(item: Array<T>, builderType?: BuilderType<T>): Array<T>;
    public build<T>(item: T, builderType?: BuilderType<T>): T {        

        throw Error("Method not implemented");
    }

    public populate<T extends Object>(targetObject: T): T {
        throw Error("Method not implemented");
    }

    public canPopulate(): boolean {
        throw Error("Method not implemented");
    }

    private _configureBuilderFactories: Map<BuilderType<any>, Function>;
    private readonly _dataTypeBuilderFactory: IDataTypeGeneratorFactory;
}