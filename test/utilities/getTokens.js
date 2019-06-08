const { getTokens } = require('@/utilities');

describe('utilities: getTokens', () => {
    test('get the tokens from a pattern', () => {
        let tokens = getTokens('/api/:version?/users/:id');

        expect(tokens).toStrictEqual(['version', 'id']);
    });
});
