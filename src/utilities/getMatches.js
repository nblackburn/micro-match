/**
 * Get matches from a regular expression.
 *
 * @param  {regexp} expression
 * @param  {string} pattern
 *
 * @return {array}
 */
module.exports = (expression, pattern) => {
    let match;
    let matches = [];

    while ((match = expression.exec(pattern)) !== null) {
        matches.push(match[1]);
    }

    return matches;
};
