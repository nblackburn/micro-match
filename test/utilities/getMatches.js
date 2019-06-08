const { getMatches } = require('@/utilities');

describe('utilities: getMatches', () => {
    test('get the matches from a pattern', () => {
        let matches = getMatches(/:([^/\\?]+)/g, '/api/:version?/users/:id');

        expect(matches).toStrictEqual(['version', 'id']);
    });
});
