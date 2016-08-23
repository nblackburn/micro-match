'use strict';

/**
* Get the tokens.
* 
* @param {string} pattern
* 
* @return {array}
*/
const getTokens = (pattern) => {

    let expression = /([^\/\?]+)(?=\:)/g;
    let reversed = reverseString(pattern);
    let matches = reversed.match(expression);

    for(let index = 0; index < matches.length; index++) {
        matches[index] = reverseString(matches[index]);
    }

    return matches.reverse();
};

/**
 * Escape special characters from a regular expression.
 * 
 * @param  {string} pattern
 * 
 * @return {string}
 */
const escapeExpression = (pattern) => {

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
const buildExpression = (pattern) => {

    let expression = pattern.replace(/\/:[^\/\?]+\?/g, '(?:\/)?([^\/]+)?')
                            .replace(/\:[^\/]+/g, '([^\/]+)');

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

    for(let index = 0; index < keys.length; index++) {

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
* 
* @return {object}
*/
const match = (pattern, url) => {

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

module.exports = match;
