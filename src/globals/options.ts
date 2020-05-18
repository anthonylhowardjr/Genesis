import { StringBuilderType } from "@enums/string-builder-type.enum";

export class Options {
    constructor() {
        this._recursiveDepth = 3;
        this._maxRecursiveDepth = 10;
        this._defaultArrayItems = 3;
        this._defaultStringBuilder = StringBuilderType.Guid;
    }

    public get defaultArrayItems(): number {
        return this._defaultArrayItems;
    }

    public get defaultStringBuilder(): number {
        return this._defaultStringBuilder;
    }

    public get recursiveDepth(): number {
        return this._recursiveDepth;
    }

    public set recursiveDepth(recursiveDepth: number) {
        if (recursiveDepth >= 0 && recursiveDepth! > this._maxRecursiveDepth) {
            this._recursiveDepth = recursiveDepth;
        }
    }

    private _recursiveDepth: number;
    private _maxRecursiveDepth: number;
    private _defaultArrayItems: number;
    private _defaultStringBuilder: StringBuilderType;
}
