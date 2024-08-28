const { transformData } = require('../../js-example-agent');

describe('transformData', () => {
    test('should transform data correctly', () => {
        const input = {
            name: 'test',
            fields: {
                test_key_1: 'value1',
                test_key_2: 'value2',
            }
        };

        const expectedOutput = [
            { test_test_key_1: 'value1' },
            { test_test_key_2: 'value2' }
        ];

        expect(transformData(input)).toEqual(expectedOutput);
    });

    test('объект без полей должен давать пустой результат', () => {
        const input = {
            name: 'test',
            fields: {}
        };

        const expectedOutput = [];

        expect(transformData(input)).toEqual(expectedOutput);
    });

    test('проверка трансформации с большим количеством полей', () => {
        const input = {
            name: 'example',
            fields: {
                key1: 'value1',
                key2: 'value2',
                key3: 'value3',
                key4: 'value4',
            }
        };

        const expectedOutput = [
            { example_key1: 'value1' },
            { example_key2: 'value2' },
            { example_key3: 'value3' },
            { example_key4: 'value4' },
        ];

        expect(transformData(input)).toEqual(expectedOutput);
    });
});