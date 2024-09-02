const { main } = require('../../js-example-agent');

let response_from_api = {
    name: "test",
    fields: {
        // key_1: "val_1",
        // key_2: "val_2"
    }
}

test('пример 1', () => {
    const result = main(response_from_api);
    expect(result).toBe("M1");
});