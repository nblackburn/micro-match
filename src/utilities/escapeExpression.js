/**
 * Escape special characters from a regular expression.
 *
 * @param  {string} pattern
 *
 * @return {string}
 */
module.exports = pattern => {
    if (typeof pattern !== 'string') {
        throw new Error('pattern must of type string.');
    }

    return pattern.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
};
