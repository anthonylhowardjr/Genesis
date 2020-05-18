import { DataTypeBuilderFactory } from "./data-type-builder-factory";

describe(`A DataTypeBuilderFactory instance`, () => {
    let dataTypeBuilderFactory: DataTypeBuilderFactory;

    beforeEach(() => {
        dataTypeBuilderFactory = new DataTypeBuilderFactory();
    });

    describe(`when initialized`, () => {
        test('should be truthy', () => {
            expect(dataTypeBuilderFactory).toBeTruthy();
        });
    });

    describe(`when getBooleanBuilder is invoked`, () => {
        test('an properly configured builder should be provided', () => {
            const builder = dataTypeBuilderFactory.getBooleanBuilder();

            expect(builder).toBeTruthy();
        });
    });

    describe(`when getNumberBuilder is invoked`, () => {
        test('an properly configured builder should be provided', () => {
            const builder = dataTypeBuilderFactory.getNumberBuilder();

            expect(builder).toBeTruthy();
        });
    });

    describe(`when getStringBuilder is invoked`, () => {
        test('an properly configured builder should be provided', () => {
            const builder = dataTypeBuilderFactory.getStringBuilder();

            expect(builder).toBeTruthy();
        });
    });

    describe(`when getObjectBuilder is invoked`, () => {
        test('an properly configured builder should be provided', () => {
            const builder = dataTypeBuilderFactory.getObjectBuilder();

            expect(builder).toBeTruthy();
        });
    });

    describe(`when getObjectBuilder is invoked`, () => {
        test('an properly configured builder should be provided', () => {
            const builder = dataTypeBuilderFactory.getArrayBuilder();

            expect(builder).toBeTruthy();
        });
    });
});