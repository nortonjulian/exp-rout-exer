const { mean, median, mode } = require('./helpers')

describe('Calculations', () => {
    let nums;

    beforeEach(() => {
        // This function will run before each test case
        nums = [1,2,3,4,5]
    });

    afterEach(() => {
        // This function will run after each test case
        nums = null;
    })

    beforeAll(() => {
        // This function will run once before all test cases
        console.log('Starting calculations')
    })

    afterAll(() => {
        // This function will run once after all test cases
        console.log('All calculations completed')
    })

    describe('mean', () => {
        test('calculates the mean array of numbers', () => {
            expect(mean(nums)).toBe(3);
        });
    })

    describe('median', () => {
        test('calculates the median array of an odd-length array', () => {
            expect(median(nums)).toBe(3);
        });

        test('calculates the median array of an even-length array', () => {
            expect(median(nums)).toBe(3.5);
        });
    })

    describe('mode', () => {
        test('calculates the mode of an array with a single mode', () => {
            nums = [1, 2, 2, 3, 4, 4, 4]
            expect(mode(nums)).toBe(3);
        });
        test('calculates the mode of an array with multiple modes', () => {
            nums = [1, 2, 2, 3, 3, 4, 4, 5]
            expect(mode(nums)).toBe(2, 3, 4);
        });
    });
});
