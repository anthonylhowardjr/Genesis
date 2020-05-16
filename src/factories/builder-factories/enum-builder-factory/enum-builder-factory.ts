import { EnumBuilder } from "@genesis/enum-builders/enum-builder";
import { IEnumBuilder } from "@genesis/enum-builders/enum-builder.interface";
import { EnumBuilderType } from "@genesis/enums/enum-builder-type.enum";
import { BuilderFactory } from "../builder-factory.abstract";

export class EnumBuilderFactory extends BuilderFactory<EnumBuilderType, IEnumBuilder> {
    public getBuilder(builderType?: EnumBuilderType): IEnumBuilder {
        const objectBuilder = builderType ?? EnumBuilderType.Default;

        if (!this._builders.has(objectBuilder)) {
            return this._builders.get(EnumBuilderType.Default) as IEnumBuilder;
        }

        return this._builders.get(objectBuilder) as IEnumBuilder;
    }

    protected configureBuilders(): Map<EnumBuilderType, IEnumBuilder> {
        return new Map([
            [EnumBuilderType.Default, this.getEnumBuilder()],
        ]);
    }

    private getEnumBuilder(): EnumBuilder {
        if (this._lazyEnumBuilder) {
            return this._lazyEnumBuilder;
        }

        this._lazyEnumBuilder = new EnumBuilder();

        return this._lazyEnumBuilder;
    }

    private _lazyEnumBuilder: EnumBuilder | undefined;
}