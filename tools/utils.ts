/**
 * MDN uses a single quote to escape single quotes in their titles. This functions replaces
 * those instances of `''` with `\'`
 * @param inputString
 * @returns {string}
 */
const replaceDoubleSingleQuotes = (inputString: string): string => {
    const regex = /''/g;
    // eslint-disable-next-line quotes
    return inputString.replace(regex, "\\'");
};

/**
 * Add a backslash before all single quotes in a string
 * @param inputString
 * @returns {string}
 */
const escapeSingleQuotes = (inputString: string): string => {
    const regex = /'/g;
    // eslint-disable-next-line quotes
    return inputString.replace(regex, "\\'");
};

export { replaceDoubleSingleQuotes, escapeSingleQuotes };
