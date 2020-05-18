import { DataTypeGeneratorService } from "./data-type-generator-service";

describe(`A DataTypeGeneratorService instance`, () => {
    let dataTypeGeneratorService: DataTypeGeneratorService;

    beforeEach(() => {
        dataTypeGeneratorService = new DataTypeGeneratorService();
    });

    describe(`when initialized`, () => {
        test('should not be null', () => {
            expect(dataTypeGeneratorService).toBeTruthy();
        });
    });
});
