import { ArrayStrategy } from './arrayStrategy';
import { IDataTypeStrategy } from './IDataTypeStrategy';

describe(`An ArrayStrategy instance`, () => {
    let arrayStrategy: IDataTypeStrategy<Array<any>>;

    beforeEach(() => {
        arrayStrategy = new ArrayStrategy<any>();
    });

    describe(`when create is initialized`, () => {
        test('should be truthy', () => {
            expect(arrayStrategy).not.toBeNull();
            expect(arrayStrategy).toBeTruthy();
        });
    });

    describe(`when create is invoked`, () => {
        test('an empty array of specified type should be created', () => {
            const array = arrayStrategy.create();

            expect(array).not.toBeNull();
            expect(array).toHaveLength(0);
        });
    });
});