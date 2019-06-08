const { buildExpression } = require('@/utilities');

describe('utilities: buildExpression', () => {
    test('returns a regular expression', () => {
        let expression = buildExpression('/api/:version?/users/:id');

        expect(expression).toBeInstanceOf(RegExp);
    });
});
