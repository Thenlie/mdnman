import type { SupportedLanguages } from '../types.js';
import { TITLE_FILE_LIST } from './index.js';

/**
 * Checks if the provided title matches any documents in the list.
 * Returns the document path when an exact match is found, otherwise null.
 * @param inputTitle
 * @param language
 * @returns {string | null}
 */
const getPathFromTitle = (inputTitle: string, language: SupportedLanguages): string | null => {
    if (!(language in TITLE_FILE_LIST)) {
        console.error(
            `[getPathFromTitle] Error: "${language}" is not a supported language! Please choose "javascript", "html" or "css".`
        );
        return null;
    }

    const titles = TITLE_FILE_LIST[language];
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
