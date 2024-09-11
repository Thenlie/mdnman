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
 * Removes all text wrapped in double curly brackets from a string.
 * If this results in an empty line, or a line only containing a '-'
 * that line is removed from the document.
 * @param {string} document
 * @returns {string | null}
 * @example Hello{{ world }}! -> Hello!
 */
const stripJsxRef = (document: string): string | null => {
    const regex = /{{.+?}}/gm;
    const lines = document.split('\n');

    const transformedLines = lines.map((line) => {
        if (!regex.test(line)) {
            return line;
        }
        const newLine = line.replace(regex, (match) => {
            // if match contains HTMLElement("*"), transform to <*>
            if (
                match.match(/{{HTMLElement\("\S+"\)}}/) ||
                match.match(/{{htmlelement\("\S+"\)}}/)
            ) {
                const element = match.match(/"([^"]*)"/);
                return element ? `<${element[1]}>` : '';
            }
            return '';
        });
        const trimmedLine = newLine.trim();
        // Only return lines that are non-empty and contain more than a single '-'
        if (trimmedLine !== '-' && trimmedLine !== '' && trimmedLine !== '- .') {
            return newLine;
        }
    });

    // Remove all instances of undefined from the lines array
    const filteredLines = transformedLines.filter((line) => line !== undefined);

    if (filteredLines.length === 0) {
        return null;
    } else if (filteredLines.length === 1) {
        return filteredLines[0];
    } else {
        return filteredLines.join('\n');
    }
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
 * Cuts a string down to the provided length and corrects missing codeblock backticks if needed
 * Appends '...' if the string was trimmed
 * Appends '...```' if the codeblock backticks were corrected
 * @param {string} document
 * @param {number} length
 */
const truncateString = (document: string, length: number) => {
    // Returns original document if its length is smaller than the discord maximum length
    if (length > document.length) return document;
    // Prepare document for truncate, appending ellipsis
    const truncatedStr = document.slice(0, length - 3) + '...';
    // Splits truncated string on \n and \r characters
    const lines = truncatedStr.match(/[^\r\n]+/g);
    // Filter lines for codeblock backticks, store array length
    const backtickMatches = lines?.filter((item) => item.startsWith('```')).length;
    // If the number of backtick instances is odd, returns document with an additional 3 backticks alongside the ellipsis. Else, return original truncated string
    if (backtickMatches && backtickMatches % 2 !== 0) {
        return document.slice(0, length - 7) + '...\n```';
    }
    return truncatedStr;
};

/**
 * Creates an array of objects containing all titles and filepaths
 * from a given mdnman title file
 * @param {Array<{ title: string; path: string }>} titles
 */
const createChoicesFromTitles = (titles: Array<{ title: string; path: string }>) => {
    return titles.map((title) => ({
        name: title.title,
        value: title.path,
    }));
};

/**
 * Removes duplicate newlines from a given string
 * @param document
 * @returns {string}
 */
const removeEmptyLines = (document: string): string => {
    return document.replace(/(\n\n)\n+/g, '$1');
};

export {
    getHeader,
    stripHeader,
    stripJsxRef,
    getHtmlDescription,
    expandLinks,
    convertEmojiTags,
    removeTitle,
    truncateString,
    createChoicesFromTitles,
    removeEmptyLines,
};
