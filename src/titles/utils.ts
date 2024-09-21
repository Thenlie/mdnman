import type { SupportedLanguages } from '../types.js';
import { cssTitles } from './css_titles.js';
import { htmlTitles } from './html_titles.js';
import { javascriptTitles } from './js_titles.js';

/**
 * Checks if the provided title matches any documents in the list.
 * Returns the document path when an exact match is found, otherwise null.
 * @param inputTitle
 * @param language
 * @returns {string | null}
 */
const getPathFromTitle = (inputTitle: string, language: SupportedLanguages): string | null => {
    let titles;
    switch (language) {
        case 'html':
            titles = htmlTitles;
            break;
        case 'css':
            titles = cssTitles;
            break;
        case 'javascript':
            titles = javascriptTitles;
            break;
        default:
            console.error(
                `[getPathFromTitle] Error: "${language}" is not a supported language! Please choose "javascript", "html" or "css".`
            );
            return null;
    }
    const match = titles.find((title) => title.title === inputTitle);
    if (!match) {
        console.error(
            `[getPathFromTitle] Error: No matching titles found for "${inputTitle}" in language "${language}"!`
        );
        return null;
    }
    return match.path;
};

export { getPathFromTitle };
