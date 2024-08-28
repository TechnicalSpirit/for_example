const { checkValues } = require('../../js-example-agent');


describe('checkValues', () => {
    test('должен вернуть "M1" для test_key_1 равного val_1 и если приэтом test_key_2 равен val_2', () => {
        const input = [
            { test_key_1: 'val_1', test_key_2: 'val_2' },
            { test_key_3: 'some_value' }
        ];

        expect(checkValues(input)).toBe("M1");
    });

    test('должен вернуть "A1" только для test_key_1 равного val_1', () => {
        const input = [
            { test_key_1: 'val_1' },
            { test_key_2: 'some_value' }
        ];

        expect(checkValues(input)).toBe("A1");
    });

    test('должен вернуть "V1" только для test_key_2 равного val_2', () => {
        const input = [
            { test_key_2: 'val_2' },
            { test_key_1: 'some_value' }
        ];

        expect(checkValues(input)).toBe("V1");
    });

    test('должен вернуть "G1" для test_key_3 равного val_3', () => {
        const input = [
            { test_key_3: 'val_3' },
            { test_key_1: 'some_value', test_key_2: 'some_value' }
        ];

        expect(checkValues(input)).toBe("G1");
    });

    test('должен вернуть null, если нет совпадений', () => {
        const input = [
            { test_key_1: 'some_value' },
            { test_key_2: 'another_value' }
        ];

        expect(checkValues(input)).toBeNull();
    });
});
