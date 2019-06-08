const { test: valid } = require('@/index');

describe('test', () => {
    test('test that a matching url returns true', () => {
        const route = '/api/v1/users/1';
        const matches = valid('/api/:version?/users/:id', route);

        expect(matches).toBe(true);
    });

    test('test that a unmatching url returns false', () => {
        const route = '/api/v1/films/1';
        const matches = valid('/api/:version?/users/:id', route);

        expect(matches).toBe(false);
    });
});
