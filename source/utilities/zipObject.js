/**
 * Take a key and value array and convert them into key/value pairs.
 *
 * @param {array} keys
 * @param {array} values
 *
 * @return {object}
 */
module.exports = (keys, values) => {
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
