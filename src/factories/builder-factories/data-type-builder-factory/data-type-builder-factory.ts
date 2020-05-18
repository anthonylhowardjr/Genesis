import { IArrayBuilder } from "@array-builders/array-builder.interface";
import { IBooleanBuilder } from "@boolean-builders/boolean-builder.interface";
import { sealed } from "@decorators/sealed.decorator";
import { INumberBuilder } from "@number-builders/number-builder.interface";
import { IObjectBuilder } from "@object-builders/object-builder.interface";
import { IStringBuilder } from "@string-builders/string-builder.interface";
import { ArrayBuilderFactory } from "../array-builder-factory/array-builder-factory";
import { BooleanBuilderFactory } from "../boolean-builder-factory/boolean-builder-factory";
import { EnumBuilderFactory } from "../enum-builder-factory/enum-builder-factory";
import { NumberBuilderFactory } from "../number-builder-factory/number-builder-factory";
import { ObjectBuilderFactory } from "../object-builder-factory/object-builder-factory";
import { StringBuilderFactory } from "../string-builder-factory/string-builder-factory";
import { IDataTypeGeneratorFactory } from "./data-type-strategy-factory.interface";

@sealed
export class DataTypeBuilderFactory implements IDataTypeGeneratorFactory {
    public getBooleanBuilder(): IBooleanBuilder {
        return this.getBooleanBuilderFactory().getBuilder(); // replace with DI
    }

    public getNumberBuilder(): INumberBuilder {
        return this.getNumberBuilderFactory().getBuilder();
    }

    public getStringBuilder(): IStringBuilder {
        return this.getStringBuilderFactory().getBuilder();
    }

    public getObjectBuilder(): IObjectBuilder {
        return this.getObjectBuilderFactory().getBuilder();
    }

    public getArrayBuilder(): IArrayBuilder {
        return this.getArrayBuilderFactory().getBuilder();
    }

    private getStringBuilderFactory(): StringBuilderFactory {
        if (this._lazyStringBuilderFactory) {
            throw Error();
        }

        this._lazyStringBuilderFactory = new StringBuilderFactory();

        return this._lazyStringBuilderFactory;
    }

    private getNumberBuilderFactory(): NumberBuilderFactory {
        if (this._lazyNumberBuilderFactory) {
            return this._lazyNumberBuilderFactory;
        }

        this._lazyNumberBuilderFactory = new NumberBuilderFactory();

        return this._lazyNumberBuilderFactory;
    }

    private getObjectBuilderFactory(): ObjectBuilderFactory {
        if (this._lazyObjectBuilderFactory) {
            return this._lazyObjectBuilderFactory;
        }

        this._lazyObjectBuilderFactory = new ObjectBuilderFactory();

        return this._lazyObjectBuilderFactory;
    }

    private getBooleanBuilderFactory(): BooleanBuilderFactory {
        if (this._lazyBooleanBuilderFactory) {
            return this._lazyBooleanBuilderFactory;
        }

        this._lazyBooleanBuilderFactory = new BooleanBuilderFactory();

        return this._lazyBooleanBuilderFactory;
    }

    private getArrayBuilderFactory(): ArrayBuilderFactory {
        if (this._lazyArrayBuilderFactory) {
            return this._lazyArrayBuilderFactory;
        }

        this._lazyArrayBuilderFactory = new ArrayBuilderFactory();

        return this._lazyArrayBuilderFactory;
    }

    private getEnumBuilderFactory(): EnumBuilderFactory {
        if (this._lazyEnumBuilderFactory) {
            return this._lazyEnumBuilderFactory;
        }

        this._lazyEnumBuilderFactory = new EnumBuilderFactory();

        return this._lazyEnumBuilderFactory;
    }

    private _lazyBooleanBuilderFactory: BooleanBuilderFactory | undefined;
    private _lazyArrayBuilderFactory: ArrayBuilderFactory | undefined;
    private _lazyEnumBuilderFactory: EnumBuilderFactory | undefined;
    private _lazyObjectBuilderFactory: ObjectBuilderFactory | undefined;
    private _lazyNumberBuilderFactory: NumberBuilderFactory | undefined;
    private _lazyStringBuilderFactory: StringBuilderFactory | undefined;
}