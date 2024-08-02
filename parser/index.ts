type MDNHeader = {
    title?: string,
    slug?: string,
    'page-type'?: string,
    'browser-compat'?: string
}

const HEADER_FIELDS = [
    'title',
    'slug',
    'page-type',
    'browser-compat'
] as const;

type HeaderField = typeof HEADER_FIELDS[number];

/** 
 * Type guard to check if a string is a valid header field
 * @param {string} key
 */
const isHeaderField = (key: string): key is HeaderField => {
    return HEADER_FIELDS.includes(key as HeaderField);
}

/**
 * Take raw markdown MDN doc and return an object containing the 
 * document title, slug and page-type
 * @param {string} document
 */
const getHeader = (document: string): MDNHeader | null => {
    let header: MDNHeader = {};
    let flag = false;
    let failSafe = false;
    const docArr = document.split('\n');
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i] === '---' && !flag) {
            flag = true;
        } else if (docArr[i] === '---' && flag) {
            flag = false;
            failSafe = true;
            break;
        } else {
            const match = [...docArr[i].matchAll(/[^: ]+/g)];
            if (match.length === 2 && isHeaderField(match[0][0])) {
                header[match[0][0]] = match[1][0];
            }
        }
    }
    if (!failSafe) return null;
    return header
};

/**
 * Take raw markdown MDN doc and return the same document with the
 * header removed
 * @param {string} document
 */
const stripHeader = (document: string) => {
    const docArr = document.split('\n');
    do { docArr.shift() } while (docArr[0] !== '---');
    docArr.shift();
    return docArr.join('\n');
}

/**
 * Take a raw markdown MDN doc and return the section of the document that
 * with the provided prefix
 * @param {string} prefix
 * @param {string} document
 */
const getSection = (prefix: string, document: string) => {
    const docArr = document.split('\n');
    const section = [];
    let flag = false;
    let heading;
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i].startsWith('#') && docArr[i].includes(prefix) && !flag) {
            flag = true;
            heading = docArr[i].match(/^#+/)?.[0];
        } else if (docArr[i].match(/^#+/)?.[0] === heading && flag) {
            flag = false;
            break;
        } else if (flag) {
            section.push(docArr[i]);
        }
    }
    return section.join('\n');
}

export { getHeader, stripHeader, getSection }