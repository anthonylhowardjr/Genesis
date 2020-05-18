import { sealed } from "@decorators/sealed.decorator";
import { ObjectBuilderType } from "@enums/object-builder-type.enum";
import { ObjectBuilder } from "@object-builders/object-builder";
import { IObjectBuilder } from "@object-builders/object-builder.interface";
import { BuilderFactory } from "../builder-factory.abstract";

@sealed
export class ObjectBuilderFactory extends BuilderFactory<ObjectBuilderType, IObjectBuilder> {
    public getBuilder(builderType?: ObjectBuilderType): IObjectBuilder {
        const objectBuilder = builderType ?? ObjectBuilderType.Default;

        if (!this._builders.has(objectBuilder)) {
            return this._builders.get(ObjectBuilderType.Default) as IObjectBuilder;
        }

        return this._builders.get(objectBuilder) as IObjectBuilder;
    }

    protected configureBuilders(): Map<ObjectBuilderType, IObjectBuilder> {
        return new Map([
            [ObjectBuilderType.Default, this.getRandomNumberStringBuilder()],
        ]);
    }

    private getRandomNumberStringBuilder(): ObjectBuilder {
        if (this._lazyObjectBuilder) {
            return this._lazyObjectBuilder;
        }

        this._lazyObjectBuilder = new ObjectBuilder();

        return this._lazyObjectBuilder;
    }

    private _lazyObjectBuilder: ObjectBuilder | undefined;
}