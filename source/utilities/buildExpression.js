/**
 * Build the regular expression needed to match the pattern.
 *
 * @param {string} pattern
 *
 * @return {regexp}
 */
module.exports = pattern => {
    let expression = pattern
        .replace(/:[^/?]+\?/g, '(?:/)?([^/]+)?')
        .replace(/:[^/]+/g, '([^/]+)');

    return new RegExp(`^${expression}$`);
};
