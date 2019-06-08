const {
    zipObject,
    getTokens,
    buildExpression,
    escapeExpression,
} = require('./utilities');

/**
 * Match the route bindings from a url.
 *
 * @param {string} pattern
 * @param {string} url
 * @param {?boolean} unsafe
 *
 * @return {object}
 */
const match = (pattern, url, unsafe) => {
    // Avoid ReDoS, see example: https://goo.gl/RxSRXD
    if (url.length > 10000 && unsafe !== true) {
        throw new Error('URL too large, aborting!');
    }

    // Escape any special characters.
    pattern = escapeExpression(pattern);

    let tokens = getTokens(pattern);
    let expression = buildExpression(pattern);
    let matches = url.match(expression);

    if (matches) {
        matches = matches.splice(1, tokens.length);
    }

    return zipObject(tokens, matches);
};

/**
 * Test a url matches the given pattern.
 *
 * @param {string} pattern
 * @param {string} url
 *
 * @return {boolean}
 */
const test = (pattern, url) => {
    let expression = buildExpression(pattern);

    return expression.test(url);
};

module.exports = {
    test,
    match,
};
