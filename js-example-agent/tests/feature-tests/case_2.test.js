const { main } = require('../../js-example-agent');

let response_from_api = {
    name: "test",
    fields: {
        key_1: "val_1"
    }
};

test('пример 2', () => {
    const result = main(response_from_api);
    expect(result).toBe("A1");
});