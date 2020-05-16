import { DataTypeBuilderFactory } from "@genesis/builder-factories/data-type-builder-factory";

class DataTypeGeneratorService {
    constructor() {
        this._dataTypeBuilderFactory = new DataTypeBuilderFactory(); // Replace with DI at some point        
    }

    public generate<T>(value: Array<T>): Array<T>;
    public generate<T extends object>(value: T): T;
    public generate<T extends object>(value: (new () => T)): T;
    public generate<T extends object>(value: (new () => T) | T | number): object | Array<T> {
        //return this.processObject(value);
        throw Error();
    }

    public generateString(): string;
    public generateString(value?: string): string {
        const stringBuilder = this._dataTypeBuilderFactory.getStringBuilder();
        return stringBuilder.build();
    }

    public generateNumber(): number;
    public generateNumber(value?: number): number {
        const numberBuilder = this._dataTypeBuilderFactory.getNumberBuilder();
        return numberBuilder.build();
    }

    public generateBoolean(): boolean;
    public generateBoolean(value?: boolean): boolean {
        const booleanBuilder = this._dataTypeBuilderFactory.getBooleanBuilder();
        return booleanBuilder.build();
    }

    public generateArray<T>(): Array<T>;
    public generateArray<T>(value: Array<T>): Array<T>;
    public generateArray<T>(value?: Array<T>): Array<T> {

        return [];
    }

    private processArray() {

    }

    private processObject<T extends object>(targetObject: T): object | Array<T> {
        for (const key in targetObject) {
            if (targetObject.hasOwnProperty(key)) {
                const element = targetObject[key];
                
            }
        }

        throw Error();
    }

    private transport() {

    }

    private readonly _dataTypeBuilderFactory: DataTypeBuilderFactory;
}