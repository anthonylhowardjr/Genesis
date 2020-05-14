import { BooleanStrategy } from './booleanStrategy';

describe(`An BooleanStrategy instance`, () => {
    let booleanStrategy: BooleanStrategy;

    beforeEach(() => {
        booleanStrategy = new BooleanStrategy();
    });

    describe(`when create is initialized`, () => {
        test('should be truthy', () => {
            expect(booleanStrategy).toBeTruthy();
        });
    });

    describe(`when create is invoked`, () => {
        test('a random boolean value should be returned', () => {
            const boolean = booleanStrategy.create();

            expect(typeof (boolean)).toEqual("boolean");
        });
    });
});