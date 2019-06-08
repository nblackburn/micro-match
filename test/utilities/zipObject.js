const { zipObject } = require('@/utilities');

describe('utilities: zipObject', () => {
    test('returns an object', () => {
        let values = ['v1'];
        let keys = ['version'];
        let zipped = zipObject(keys, values);

        expect(typeof zipped).toBe('object');
    });

    test('keys and values of differing lengths is normalized', () => {
        let keys = ['version'];
        let values = ['v1', 'users'];
        let zipped = zipObject(keys, values);

        expect(Object.keys(zipped)).toHaveLength(1);
    });

    test('not passing any keys returns an empty object', () => {
        let values = ['v1', 'users'];
        let zipped = zipObject(null, values);

        expect(Object.keys(zipped)).toHaveLength(0);
    });

    test('not passing any values returns an empty object', () => {
        let keys = ['version'];
        let zipped = zipObject(keys, null);

        expect(Object.keys(zipped)).toHaveLength(0);
    });
});
