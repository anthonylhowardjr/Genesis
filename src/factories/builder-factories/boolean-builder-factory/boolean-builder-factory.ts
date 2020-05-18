import { BooleanBuilder } from "@boolean-builders/boolean-builder";
import { IBooleanBuilder } from "@boolean-builders/boolean-builder.interface";
import { sealed } from "@decorators/sealed.decorator";
import { BooleanBuilderType } from "@enums/boolean-builder-type.enum";
import { BuilderFactory } from "../builder-factory.abstract";

@sealed
export class BooleanBuilderFactory extends BuilderFactory<BooleanBuilderType, IBooleanBuilder> {
    public getBuilder(builderType?: BooleanBuilderType): IBooleanBuilder {
        const booleanBuilder = builderType ?? BooleanBuilderType.Default;

        if (!this._builders.has(booleanBuilder)) {
            return this._builders.get(BooleanBuilderType.Default) as IBooleanBuilder;
        }

        return this._builders.get(booleanBuilder) as IBooleanBuilder;
    }

    protected configureBuilders(): Map<BooleanBuilderType, IBooleanBuilder> {
        return new Map([
            [BooleanBuilderType.Default, this.getBooleanBuilder()],
        ]);
    }

    private getBooleanBuilder(): BooleanBuilder {
        if (this._lazyBooleanBuilder) {
            return this._lazyBooleanBuilder;
        }

        this._lazyBooleanBuilder = new BooleanBuilder();

        return this._lazyBooleanBuilder;
    }

    private _lazyBooleanBuilder: BooleanBuilder | undefined;
}