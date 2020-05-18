import { sealed } from "@decorators/sealed.decorator";
import { NumberBuilderType } from "@enums/number-builder-type.enum";
import { NonNegativeNumberBuilder } from "@number-builders/non-negative-number-builder";
import { INumberBuilder } from "@number-builders/number-builder.interface";
import { BuilderFactory } from "../builder-factory.abstract";

@sealed
export class NumberBuilderFactory extends BuilderFactory<NumberBuilderType, INumberBuilder> {
    public getBuilder(builderType?: NumberBuilderType): INumberBuilder {
        const numberBuilder = builderType ?? NumberBuilderType.NonNegative;

        if (!this._builders.has(numberBuilder)) {
            return this._builders.get(NumberBuilderType.NonNegative) as INumberBuilder;
        }

        return this._builders.get(numberBuilder) as INumberBuilder;
    }

    protected configureBuilders(): Map<NumberBuilderType, INumberBuilder> {
        return new Map([
            [NumberBuilderType.NonNegative, this.getNonNegativeNumberBuilder()],
        ]);
    }

    private getNonNegativeNumberBuilder(): NonNegativeNumberBuilder {
        if (this._lazyNonNegativeNumberBuilder) {
            return this._lazyNonNegativeNumberBuilder;
        }

        this._lazyNonNegativeNumberBuilder = new NonNegativeNumberBuilder();

        return this._lazyNonNegativeNumberBuilder;
    }

    private _lazyNonNegativeNumberBuilder: NonNegativeNumberBuilder | undefined;
}