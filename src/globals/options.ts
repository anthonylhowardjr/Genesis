export class Options {
    constructor() {
        this._recursiveDepth = 3;
        this._maxRecursiveDepth = 10;
        this._defaultArrayItems = 3;
    }

    public get defaultArrayItems(): number {
        return this._defaultArrayItems;
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
}
