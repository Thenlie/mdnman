export type MDNHeader = {
    title?: string;
    slug?: string;
    'page-type'?: string;
    'browser-compat'?: string;
};

const HEADER_FIELDS = ['title', 'slug', 'page-type', 'browser-compat'] as const;
const MDN_BASE_URL = 'https://developer.mozilla.org';

type HeaderField = (typeof HEADER_FIELDS)[number];

/**
 * Type guard to check if a string is a valid header field
 * @param {string} key
 */
const isHeaderField = (key: string): key is HeaderField => {
    return HEADER_FIELDS.includes(key as HeaderField);
};

/**
 * Take raw markdown MDN doc and return an object containing the
 * document title, slug and page-type
 * @param {string} document
 */
const getHeader = (document: string): MDNHeader | null => {
    const header: MDNHeader = {};
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
            const match = [...docArr[i].matchAll(/(\S+):\s*(.+)/g)];
            if (match?.[0]?.[1] && isHeaderField(match[0][1])) {
                header[match[0][1]] = match[0][2];
            }
        }
    }
    if (!failSafe) return null;
    return header;
};

/**
 * Take raw markdown MDN doc and return the same document with the
 * header removed
 * @param {string} document
 */
const stripHeader = (document: string) => {
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
const getSection = (prefix: string, document: string) => {
    const docArr = document.split('\n');
    const section = [];
    let flag = false;
    let heading;
    for (let i = 0; i < docArr.length; i++) {
        if (
            docArr[i].startsWith('#') &&
            docArr[i].toLowerCase().includes(prefix.toLowerCase()) &&
            !flag
        ) {
            flag = true;
            heading = docArr[i].match(/^#+/)?.[0];
            section.push(docArr[i]);
        } else if (docArr[i].match(/^#+/)?.[0] === heading && flag) {
            flag = false;
            break;
        } else if (flag) {
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
const stripJsxRef = (document: string) => {
    const regex = /{{.+?}}/gm;
    return document.replace(regex, (match) => {
        // if match contains HTMLElement("*"), transform to <*>
        if (match.match(/{{HTMLElement\("\S+"\)}}/) || match.match(/{{htmlelement\("\S+"\)}}/)) {
            const element = match.match(/"([^"]*)"/);
            return element ? `<${element[1]}>` : '';
        }
        return '';
    });
};

/**
 * Returns all text until the first `#` in a document.
 * This is because HTML documents do not specify a "Description" heading,
 * it is just the first paragraph of text.
 * @param {string} document
 */
const getHtmlDescription = (document: string) => {
    const headingIndex = document.indexOf('#');
    if (!headingIndex) return document;
    return document.substring(0, headingIndex);
};

/**
 * Updates all markdown links formatted as "[text](url)" to provide the full path to the MDN docs
 * Uses some weird regex to account for cases where the text has brackets.
 * @param {string} document
 */
const expandLinks = (document: string) => {
    const regex = /\[([^\]]*(?:`[^`]*`[^\]]*)*)\]\(([^)]+)\)/gm;
    return document.replace(regex, (match) => {
        if (match.match(/\(.+\)/)) {
            const mask = match.match(/\[([^\]]*(?:`[^`]*`[^\]]*)*)\]\(/);
            const path = match.match(/\(([^)]+)\)/);
            if (mask && path) {
                return `${mask[0].slice(0, -1)}(${MDN_BASE_URL + path[0].slice(1, path[0].length - 1)})`;
            }
        }
        return match;
    });
};

/**
 * Converts [!NOTE] and [!WARNING] in a given document to emojis
 * @param {string} document
 */
const convertEmojiTags = (document: string) => {
    const regex = /\[!WARNING\]/;
    const newDoc = document.replace(regex, '⚠️');
    const regex2 = /\[!NOTE\]/;
    return newDoc.replace(regex2, 'ℹ️');
};

/**
 * Removes the first two lines of a document, expecting this is a
 * markdown heading ('#') followed by an empty line
 * @param {string} document
 */
const removeTitle = (document: string) => {
    // Find the index of the second newline character
    const newlineIndex = document.indexOf('\n', document.indexOf('\n') + 1);
    // If there are fewer than two newlines, return the original string
    if (newlineIndex === -1) return document;
    // Return the substring starting after the second newline
    return document.substring(newlineIndex + 1);
};

/**
 * Cuts a string down to the specified length if needed
 * Appends '...' if the string was trimmed
 * @param {string} document
 * @param {number} length
 */
const truncateString = (document: string, length: number) => {
    return document.length > length ? document.slice(0, length - 3) + '...' : document;
};

/**
 * Creates an array of objects containing all titles and filepaths
 * from a given mdnman title file
 * @param {Array<{ title: string; file: string }>} titles
 */
const createChoicesFromTitles = (titles: Array<{ title: string; file: string }>) => {
    return titles.map((title) => ({
        name: title.title,
        value: title.file,
    }));
};

export {
    getHeader,
    stripHeader,
    getSection,
    stripJsxRef,
    getHtmlDescription,
    expandLinks,
    convertEmojiTags,
    removeTitle,
    truncateString,
    createChoicesFromTitles,
};
