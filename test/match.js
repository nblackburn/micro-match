const test = require('ava');
const match = require('../source/index');

test('get required parameter', t => {

    const {version, id} = match('/api/:version?/users/:id', '/api/v1/users/1');

    t.true(id === '1');
});

test('get optional parameter', t => {

    const {version, id} = match('/api/:version?/users/:id', '/api/v1/users/1');

    t.true(version === 'v1');
});
