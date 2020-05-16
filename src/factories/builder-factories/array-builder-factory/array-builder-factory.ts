import { ArrayBuilder } from "@genesis/array-builders/array-builder";
import { IArrayBuilder } from "@genesis/array-builders/array-builder.interface";
import { ArrayBuilderType } from "@genesis/enums/array-builder-type.enum";
import { BuilderFactory } from "../builder-factory.abstract";

export class ArrayBuilderFactory extends BuilderFactory<ArrayBuilderType, IArrayBuilder> {
    public getBuilder(builderType: ArrayBuilderType = ArrayBuilderType.Default): IArrayBuilder {
        if (!this._builders.has(builderType)) {
            return this._builders.get(builderType) as IArrayBuilder;
        }

        return this._builders.get(ArrayBuilderType.Default) as IArrayBuilder;
    }

    protected configureBuilders(): Map<ArrayBuilderType, IArrayBuilder> {
        return new Map([
            [ArrayBuilderType.Default, this.getArrayBuilder()],
        ]);
    }

    private getArrayBuilder(): ArrayBuilder {
        if (this._lazyArrayBuilder) {
            return this._lazyArrayBuilder;
        }

        this._lazyArrayBuilder = new ArrayBuilder();

        return this._lazyArrayBuilder;
    }

    private _lazyArrayBuilder: ArrayBuilder | undefined;
}