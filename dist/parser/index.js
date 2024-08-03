const HEADER_FIELDS = [
    'title',
    'slug',
    'page-type',
    'browser-compat'
];
/**
 * Type guard to check if a string is a valid header field
 * @param {string} key
 */
const isHeaderField = (key) => {
    return HEADER_FIELDS.includes(key);
};
/**
 * Take raw markdown MDN doc and return an object containing the
 * document title, slug and page-type
 * @param {string} document
 */
const getHeader = (document) => {
    const header = {};
    let flag = false;
    let failSafe = false;
    const docArr = document.split('\n');
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i] === '---' && !flag) {
            flag = true;
        }
        else if (docArr[i] === '---' && flag) {
            flag = false;
            failSafe = true;
            break;
        }
        else {
            const match = [...docArr[i].matchAll(/(\S+):\s*(.+)/g)];
            if (match?.[0]?.[1] && isHeaderField(match[0][1])) {
                header[match[0][1]] = match[0][2];
            }
        }
    }
    if (!failSafe)
        return null;
    return header;
};
/**
 * Take raw markdown MDN doc and return the same document with the
 * header removed
 * @param {string} document
 */
const stripHeader = (document) => {
    const docArr = document.split('\n');
    do {
        docArr.shift();
    } while (docArr[0] !== '---');
    docArr.shift();
    return docArr.join('\n');
};
/**
 * Take a raw markdown MDN doc and return the section of the document that
 * with the provided prefix
 * @param {string} prefix
 * @param {string} document
 */
const getSection = (prefix, document) => {
    const docArr = document.split('\n');
    const section = [];
    let flag = false;
    let heading;
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i].startsWith('#') &&
            docArr[i].toLowerCase().includes(prefix.toLowerCase()) &&
            !flag) {
            flag = true;
            heading = docArr[i].match(/^#+/)?.[0];
            section.push(docArr[i]);
        }
        else if (docArr[i].match(/^#+/)?.[0] === heading && flag) {
            flag = false;
            break;
        }
        else if (flag) {
            section.push(docArr[i]);
        }
    }
    return section.join('\n');
};
/**
 * Removes all text wrapped in double curly brackets from a string
 * @param {string} document
 * @example Hello{{ world }}! -> Hello!
 */
const stripJsxRef = (document) => {
    const regex = /{{.+?}}/gm;
    return document.replace(regex, '');
};
export { getHeader, stripHeader, getSection, stripJsxRef };
