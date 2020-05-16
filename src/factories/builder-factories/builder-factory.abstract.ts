export abstract class BuilderFactory<TKey, KValue> {
    constructor() {
        this._builders = this.configureBuilders();
    }
    
    protected abstract configureBuilders(): Map<TKey, KValue>;
    
    protected readonly _builders: Map<TKey, KValue>;
}
