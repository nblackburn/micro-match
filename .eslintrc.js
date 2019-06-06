module.exports = {
    env: {
        es6: true,
        jest: true,
        node: true,
        browser: true
    },
    
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    
    plugins: [
        'prettier'
    ],
    
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },

    rules: {
        'prettier/prettier': 'error'
    }
};
