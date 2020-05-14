export interface IDataTypeBuilderStrategy<T> {
    create<T>(): T;
}