const escapeExpression = require('./escapeExpression');

/**
 * Build the regular expression needed to match the pattern.
 *
 * @param {string} pattern
 *
 * @return {regexp}
 */
module.exports = pattern => {
    let escaped = escapeExpression(pattern);

    let expression = escaped
        .replace(/:[^/?]+\?/g, '(?:/)?([^/]+)?')
        .replace(/:[^/]+/g, '([^/]+)');

    return new RegExp(`^${expression}$`);
};
