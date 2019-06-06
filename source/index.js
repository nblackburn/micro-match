'use strict';

/**
 * Get the tokens.
 *
 * @param {string} pattern
 *
 * @return {array}
 */
const getTokens = pattern => {
    let expression = /:([^/\\?]+)/g;
    let matches = getMatches(expression, pattern);

    return matches;
};

/**
 * Get matches from a regular expression.
 *
 * @param  {regexp} expression
 * @param  {string} pattern
 *
 * @return {array}
 */
const getMatches = (expression, pattern) => {
    let match;
    let matches = [];

    while ((match = expression.exec(pattern)) !== null) {
        matches.push(match[1]);
    }

    return matches;
};

/**
 * Escape special characters from a regular expression.
 *
 * @param  {string} pattern
 *
 * @return {string}
 */
const escapeExpression = pattern => {
    if (typeof pattern !== 'string') {
        throw new Error('pattern must of type string.');
    }

    return pattern.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
};

/**
 * Build the regular expression needed to match the pattern.
 *
 * @param {string} pattern
 *
 * @return {regexp}
 */
const buildExpression = pattern => {
    let expression = pattern
        .replace(/:[^/?]+\?/g, '(?:/)?([^/]+)?')
        .replace(/:[^/]+/g, '([^/]+)');

    return new RegExp(`^${expression}$`);
};

/**
 * Take a key and value array and convert them into key/value pairs.
 *
 * @param {array} keys
 * @param {array} values
 *
 * @return {object}
 */
const zipObject = (keys, values) => {
    keys = keys || [];
    values = values || [];

    let zipped = {};

    // Ensure keys and values are of equal length.
    if (keys.length !== values.length) {
        keys = keys.slice(0, values.length);
        values = values.slice(0, keys.length);
    }

    for (let index = 0; index < keys.length; index++) {
        if (keys[index] && values[index]) {
            zipped[keys[index]] = values[index];
        }
    }

    return zipped;
};

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
