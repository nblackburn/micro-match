const match = require('../source/index');

describe('match', () => {
    test('get required parameter', () => {
        const route = '/api/v1/users/1';
        const { id } = match('/api/:version?/users/:id', route);

        expect(id).toBe('1');
    });

    test('get optional parameter', () => {
        const route = '/api/v1/users/1';
        const { version } = match('/api/:version?/users/:id', route);

        expect(version).toBe('v1');
    });

    test('do not allow large urls', () => {
        let route = '';
        
        for (let i = 0; i < 10001; i++) {
            route += String(i % 10);
        }

        let matcher = () => {
            return match('/api/:version?/users/:id', route);
        };

        expect(matcher).toThrow();
    });

    test('allow large urls', () => {
        let route = '';

        for (let i = 0; i < 10001; i++) {
            route += String(i % 10);
        }

        let matcher = jest.fn(() => {
            return match('/api/:version?/users/:id', route, true);
        });

        matcher();

        expect(matcher).toHaveReturned();
    });
});