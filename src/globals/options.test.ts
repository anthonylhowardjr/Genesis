import { Options } from './options';

describe(`A Options instance`, () => {
    let options: Options;

    beforeEach(() => {
        options = new Options();
    });

    describe(`when initialized`, () => {
        test('should not be null', () => {
            expect(options).not.toBeNull();
            expect(options).toBeTruthy();
            expect(options).toMatchSnapshot();
        });

        test('should properly provide recursive depth', () => {
            expect(options.recursiveDepth).not.toBeNull();
        });

        test('should properly provide default array items', () => {
            expect(options.defaultArrayItems).not.toBeNull();
        });
    });
});
