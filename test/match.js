const test = require('ava');
const match = require('../source/index');

test('get required parameter', t => {

    const route = '/api/v1/users/1';
    const {version, id} = match('/api/:version?/users/:id', route);

    t.true(id === '1');
});

test('get optional parameter', t => {

    const route = '/api/v1/users/1';
    const {version, id} = match('/api/:version?/users/:id', route);

    t.true(version === 'v1');
});

test('do not allow large urls', t => {

    let route = '';
    for (let i = 0; i < 10001; i++) {
        route += String(i % 10)
    }
    try {
        match('/api/:version?/users/:id', route);
        t.fail('should throw error')
    } catch (err) {
        t.pass('guard against large url!');
    }

});


test('allow large urls', t => {

    let route = '';
    for (let i = 0; i < 10001; i++) {
        route += String(i % 10)
    }
    try {
        match('/api/:version?/users/:id', route, true);
        t.pass('should not throw error')
    } catch (err) {
        t.fail('do not guard against large url');
    }

});
