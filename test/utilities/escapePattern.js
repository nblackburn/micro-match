const { escapeExpression } = require('@/utilities');

describe('utilities: escapeExpression', () => {
    test('escapes special characters from the pattern', () => {
        let escaped = escapeExpression('/api/:version?/users/:id');

        expect(escaped).toBe('/api/:version\\?/users/:id');
    });
});
