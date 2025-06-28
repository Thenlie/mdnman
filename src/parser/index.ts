import { javascriptTitles } from '../titles/js_titles.js';

export type MDNHeader = {
    title?: string;
    slug?: string;
    'page-type'?: string;
    'browser-compat'?: string;
};

const HEADER_FIELDS = ['title', 'slug', 'page-type', 'browser-compat'] as const;
const LOCALE = 'en-US';
const MDN_BASE_URL = 'https://developer.mozilla.org';
const MDN_DOCS_URL = `${MDN_BASE_URL}/${LOCALE}/docs/Web`;

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
 * YAML frontmatter header removed, replaced with a markdown H1
 * @param {string} document
 * @param {boolean} addHeading | If the title should be added as a H1
 */
const stripHeader = (document: string, addHeading: boolean = true) => {
    const header = getHeader(document);
    if (!header) return document;
    const docArr = document.split('\n');
    do {
        docArr.shift();
    } while (docArr[0] !== '---');
    docArr.shift();
    if (addHeading) docArr.unshift(`# ${header.title}`);
    return docArr.join('\n');
};

/**
 * Transforms Kumascript macros into text or markdown links
 * Follows the patterns defined by the MDN macros
 * See: https://github.com/mdn/yari/tree/main/kumascript
 * @param {string} document
 * @param {boolean} addLinks
 * @returns {string | null}
 * @example {{cssxref("color")}} -> color
 */
const transformKumascript = (document: string, addLinks: boolean = false): string | null => {
    const regex = /{{.+?}}/gm;
    const lines = document.split('\n');

    const transformedLines = lines.map((line) => {
        if (!regex.test(line)) {
            return line;
        }
        const newLine = line.replace(regex, (match) => {
            const matches = [...match.matchAll(/["']([^"']+)["']/g)];
            if (!matches || matches.length === 0) return '';
            let path = matches[0][1];
            const val = matches.length === 2 ? matches[1][1] : matches[0][1];
            switch (true) {
                // if match contains jsxref, wrap in `*`
                case /{{jsxref\(.+\)}}/i.test(match): {
                    const titleMatch = javascriptTitles.find((title) => title.title === val);
                    const isGlobalObject = titleMatch?.path.includes('global_objects');
                    path = path.replace('()', '').replace('.prototype.', '.');
                    if (path.includes('.') && !path.includes('/')) {
                        path = path.replace('.', '/');
                    }
                    return addLinks
                        ? `[\`${val}\`](${MDN_DOCS_URL}/JavaScript/Reference/${isGlobalObject ? 'Global_Objects/' : ''}${path})`
                        : `\`${val}\``;
                }
                // if match contains htmlelement, wrap in <`*`>
                case /{{htmlelement\(.+\)}}/i.test(match):
                    return addLinks
                        ? `[\`<${val}>\`](${MDN_DOCS_URL}/HTML/Reference/Elements/${path})`
                        : `\`<${val}>\``;
                // if match contains domxref or cssxref, wrap in `*`
                case /{{domxref\(.+\)}}/i.test(match):
                    return addLinks
                        ? `[\`${val}\`](${MDN_DOCS_URL}/API/${path.replace('.', '/')})`
                        : `\`${val}\``;
                case /{{cssxref\(.+\)}}/i.test(match):
                    return addLinks ? `[\`${val}\`](${MDN_DOCS_URL}/CSS/${path})` : `\`${val}\``;
                case /{{glossary\(.+\)}}/i.test(match): {
                    path = path.replace(/\s+/g, '_');
                    return addLinks
                        ? `[\`${val}\`](${MDN_BASE_URL}/${LOCALE}/docs/Glossary/${path})`
                        : `\`${val}\``;
                }
                default:
                    return '';
            }
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

/**
 * Transforms codeblock coding languages into more commonly supported languages
 * Ignores hidden codeblocks (ex: ```css hidden)
 * @param {string} document
 * @returns {string}
 */
const transformCodeblockLangs = (document: string): string => {
    document
        .replace('```js', '```javascript')
        .replace('```js-nolint', '```javascript')
        .replace('```plain', '```plaintext')
        .replace('```text', '```plaintext')
        .replace('```css-nolint', '```css')
        .replace('```css-nolint example-good', '```css')
        .replace('```css-nolint example-bad', '```css');
    return document;
};

/**
 * Applies transformKumascript, expandLinks, and removeEmptyLines
 * to a given document
 * @param {string} document
 * @returns {string}
 */
const completeParse = (document: string): string => {
    const newDoc = transformKumascript(expandLinks(removeEmptyLines(document)), true);
    return newDoc || '';
};

export {
    getHeader,
    stripHeader,
    transformKumascript,
    getHtmlDescription,
    expandLinks,
    convertEmojiTags,
    removeTitle,
    truncateString,
    createChoicesFromTitles,
    removeEmptyLines,
    transformCodeblockLangs,
    completeParse,
};
