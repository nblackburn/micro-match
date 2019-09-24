const getMatches = require('./getMatches');
/**
 * Get the tokens.
 *
 * @param {string} pattern
 *
 * @return {array}
 */
module.exports = pattern => {
    let expression = /:([^/\\?]+)/g;
    let matches = getMatches(expression, pattern);

    return matches;
};
