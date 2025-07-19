import { javascriptTitles } from '../titles/js_titles.js';
import { removeEmptySections } from './sections.js';
import type { MDNHeader } from '../types.js';

const HEADER_FIELDS = ['title', 'slug', 'page-type', 'browser-compat'] as const;
const LOCALE = 'en-US';
const MDN_BASE_URL = 'https://developer.mozilla.org';
const MDN_DOCS_URL = `${MDN_BASE_URL}/${LOCALE}/docs/Web`;

type HeaderField = (typeof HEADER_FIELDS)[number];

/**
 * Type guard to check if a string is a valid header field
 * @param {string} key
 * @returns {boolean}
 */
const isHeaderField = (key: string): key is HeaderField => {
    return HEADER_FIELDS.includes(key as HeaderField);
};

/**
 * Take raw markdown MDN doc and return an object containing the
 * document title, slug and page-type
 * @param {string} document
 * @returns {MDNHeader | null}
 */
const getHeader = (document: string): MDNHeader | null => {
    const header: MDNHeader = { title: '', slug: '' };
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
 * @returns {string}
 */
const stripHeader = (document: string, addHeading: boolean = true): string => {
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
 * @returns {string}
 * @example {{cssxref("color")}} -> color
 */
const transformKumascript = (document: string, addLinks: boolean = false): string => {
    const regex = /{{.+?}}/gm;
    const lines = document.split('\n');

    const transformedLines = lines.map((line) => {
        if (!regex.test(line)) {
            return line;
        }
        const newLine = line.replace(regex, (match) => {
            const matches = [...match.matchAll(/["']([^"']+)["']/g)];
            // if (!matches || matches.length === 0) return '';
            if (!matches || matches.length === 0) {
                // The Kumascript macro does not contain quotes.
                switch (true) {
                    case /{{deprecated_header}}/i.test(match):
                        return 'Deprecated: This feature is no longer recommended';
                    default:
                        return '';
                }
            }
            let path = matches[0][1].replace('&lt;', '').replace('&gt;', '');
            const val = (matches.length === 2 ? matches[1][1] : matches[0][1])
                .replace('&lt;', '<')
                .replace('&gt;', '>');
            switch (true) {
                // if match contains jsxref, wrap in `*`
                case /{{\s?jsxref\(.+\)\s?}}/i.test(match): {
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
                case /{{\s?htmlelement\(.+\)\s?}}/i.test(match):
                    return addLinks
                        ? `[\`<${val}>\`](${MDN_DOCS_URL}/HTML/Reference/Elements/${path})`
                        : `\`<${val}>\``;
                // if match contains domxref or cssxref, wrap in `*`
                case /{{\s?domxref\(.+\)\s?}}/i.test(match):
                    return addLinks
                        ? `[\`${val}\`](${MDN_DOCS_URL}/API/${path.replace('.', '/')})`
                        : `\`${val}\``;
                case /{{\s?cssxref\(.+\)\s?}}/i.test(match):
                    return addLinks ? `[\`${val}\`](${MDN_DOCS_URL}/CSS/${path})` : `\`${val}\``;
                case /{{\s?glossary\(.+\)\s?}}/i.test(match): {
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
    return filteredLines.join('\n');
};

/**
 * Updates all markdown links formatted as `[text](url)` to provide the full path to the MDN docs
 * Uses some weird regex to account for cases where the text has brackets.
 * @param {string} document
 * @param {string} slug
 * @returns {string}
 */
const expandLinks = (document: string, slug: string): string => {
    // Find text formatted as  ![...](...)
    const regex = /!?\[([^[\]]*(?:\[[^[\]]*\][^[\]]*)*)\]\(([^()\s]+(?:\([^()\s]*\)[^()\s]*)*)\)/gm;

    return document.replace(regex, (match) => {
        if (!match.match(/\(.+\)/)) return match;
        if (match.startsWith('!')) match = match.substring(1);
        const split = match.split('](');
        const mask = split[0].substring(1);
        const path = split[1].substring(0, split[1].length - 1);

        if (!mask || !path) return match;
        if (path.startsWith('#')) {
            return `[${mask}](${MDN_BASE_URL}/${LOCALE}/docs/${slug}/${path})`;
        }
        if (path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.svg')) {
            return `![${mask}](${MDN_BASE_URL}/${LOCALE}/docs/${slug}/${path})`;
        }
        if (path.startsWith('http') || path.startsWith('<http')) {
            return `[${mask}](${path})`;
        }

        return `[${mask}](${MDN_BASE_URL + path})`;
    });
};

/**
 * Converts [!NOTE] and [!WARNING] in a given document to emojis
 * @param {string} document
 * @returns {string}
 * @example [!WARNING] -> ⚠️
 */
const convertEmojiTags = (document: string): string => {
    const regex = /\[!WARNING\]/;
    const newDoc = document.replace(regex, '⚠️');
    const regex2 = /\[!NOTE\]/;
    return newDoc.replace(regex2, 'ℹ️');
};

/**
 * Removes the first two lines of a document, expecting this is a
 * markdown heading ('#') followed by an empty line
 * @param {string} document
 * @returns {string}
 */
const removeTitle = (document: string): string => {
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
 * @returns {string}
 */
const truncateString = (document: string, length: number): string => {
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
 * @param {Array<{ title: string, path: string }>} titles
 * @returns {Array<{name: string, value: string }>}
 */
const createChoicesFromTitles = (
    titles: Array<{ title: string; path: string }>
): Array<{ name: string; value: string }> => {
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
 * Removes codeblocks that MDN hides from the out
 * @param {string} document
 * @returns {string}
 */
const removeHiddenCodeblocks = (document: string): string => {
    const hiddenBlocks = ['```js hidden', '```css hidden', '```html hidden'];

    const transformedDoc: string[] = [];
    let shouldRemove = false;
    const docArr = document.split('\n');
    docArr.forEach((line) => {
        if (hiddenBlocks.includes(line.trim())) {
            shouldRemove = true;
        } else if (shouldRemove && line.trim() === '```') {
            shouldRemove = false;
        } else if (!shouldRemove) {
            transformedDoc.push(line);
        }
    });
    return transformedDoc.join('\n');
};

/**
 * Transforms codeblock coding languages into more commonly supported languages.
 * Does not remove hidden label (ex: ```css hidden)
 * @param {string} document
 * @returns {string}
 * @example ```js-nolint -> ```js
 * @example ```js-nolint hidden -> ```js hidden
 */
const transformCodeblockLangs = (document: string): string => {
    const backticks = '```';
    const languageMap: Record<string, string> = {
        js: 'js',
        css: 'css',
        html: 'html',
        json: 'json',
        plain: 'txt',
        text: 'txt',
    };
    let newDoc = document;
    for (const [inputLang, outputLang] of Object.entries(languageMap)) {
        const regex = new RegExp(`^${backticks}${inputLang}.*$`, 'gm');
        newDoc = newDoc.replace(regex, (match) =>
            match.includes('hidden')
                ? `${backticks}${outputLang} hidden`
                : `${backticks}${outputLang}`
        );
    }
    return newDoc;
};

/**
 * Applies transformKumascript, transformCodeblockLangs, expandLinks, removeEmptyLines,
 * removeEmptySections and removeHiddenCodeblocks to a given document
 * @param {string} document
 * @param {string} slug
 * @param {boolean} expandKumaLinks
 * @returns {string}
 */
const completeParse = (document: string, slug: string, expandKumaLinks: boolean = true): string => {
    // Take a list of functions and run them in order, passing the output of one into the next
    // eslint-disable-next-line prettier/prettier
    const flow = <T>(...fns: Array<(input: T) => T>) => (input: T) => fns.reduce((acc, fn) => fn(acc), input);

    const cleanAndParse = flow(
        transformCodeblockLangs,
        removeHiddenCodeblocks,
        removeEmptyLines,
        removeEmptySections
    );

    // The order here matters, some sections will become empty after Kumascript is removed
    const expandedDocument = transformKumascript(expandLinks(document, slug), expandKumaLinks);
    return cleanAndParse(expandedDocument);
};

export {
    getHeader,
    stripHeader,
    transformKumascript,
    expandLinks,
    convertEmojiTags,
    removeTitle,
    truncateString,
    createChoicesFromTitles,
    removeEmptyLines,
    removeHiddenCodeblocks,
    transformCodeblockLangs,
    completeParse,
};
