import { StringBuilderType } from "@enums/string-builder-type.enum";
import { GuidStringBuilder } from "@string-builders/guid-string-builder";
import { RandomNumberStringBuilder } from "@string-builders/random-number-string-builder";
import { IStringBuilder } from "@string-builders/string-builder.interface";
import { BuilderFactory } from "../builder-factory.abstract";
import { sealed } from "@decorators/sealed.decorator";

@sealed
export class StringBuilderFactory extends BuilderFactory<StringBuilderType, IStringBuilder> {
    public getBuilder(builderType?: StringBuilderType): IStringBuilder {
        const stringBuilder = builderType ?? StringBuilderType.Guid;

        if (!this._builders.has(stringBuilder)) {
            return this._builders.get(StringBuilderType.Guid) as IStringBuilder;
        }

        return this._builders.get(stringBuilder) as IStringBuilder;
    }

    protected configureBuilders(): Map<StringBuilderType, IStringBuilder> {
        return new Map([
            [StringBuilderType.Guid, this.getGuidStringBuilder()],
            [StringBuilderType.RandomNumber, this.getRandomNumberStringBuilder()],
        ]);
    }

    private getGuidStringBuilder(): GuidStringBuilder {
        if (this._lazyGuidStringBuilder) {
            return this._lazyGuidStringBuilder;
        }

        this._lazyGuidStringBuilder = new GuidStringBuilder();

        return this._lazyGuidStringBuilder;
    }

    private getRandomNumberStringBuilder(): RandomNumberStringBuilder {
        if (this._lazyRandomNumberStringBuilder) {
            return this._lazyRandomNumberStringBuilder;
        }

        this._lazyRandomNumberStringBuilder = new RandomNumberStringBuilder();

        return this._lazyRandomNumberStringBuilder;
    }

    private _lazyGuidStringBuilder: GuidStringBuilder | undefined;
    private _lazyRandomNumberStringBuilder: RandomNumberStringBuilder | undefined;
}