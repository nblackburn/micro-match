const test = require('ava');
const match = require('../source/index');

test('get required parameter', t => {

    const matches = match('/api/:version?/users/:id', '/api/v1/users/1');

    t.true(matches.id === '1');
});

test('get optional parameter', t => {

    const matches = match('/api/:version?/users/:id', '/api/v1/users/1');

    t.true(matches.version === 'v1');
});
