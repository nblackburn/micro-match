module.exports = (wallaby) => {

    return {

        testFramework: 'ava',

        files: [
            'source/**/*.js'
        ],

        tests: [
            'test/**/*.js'
        ],

        env: {
            type: 'node',
            runner: 'node'
        }
    };
};
