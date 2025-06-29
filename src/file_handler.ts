import fs from 'fs';
import path from 'path';
import { select } from '@inquirer/prompts';
import type { SupportedLanguages } from './types.js';
import { TITLE_FILE_LIST } from './titles/index.js';

const _dirname = import.meta.dirname;

/**
 * Check if a provided filepath is valid.
 * Returns:
 * 0 - Path is a valid file
 * 1 - Path is invalid
 * 2 - Path is a directory
 * @param filepath
 * @returns {0 | 1 | 2}
 */
const validateFilePath = (filepath: string): 0 | 1 | 2 => {
    // Check if path exists
    if (!fs.existsSync(filepath)) {
        return 1;
    }
    const stats = fs.statSync(filepath);
    // Check if path is a directory
    if (stats.isDirectory()) {
        return 2;
    }
    return 0;
};

/**
 * Get an MDN reference doc based on an explicit file path starting at the 'lib' directory.
 * The function assumes you add 'index.md' to the end of the string, but will attempt to
 * add it for you if the path is a directory.
 * @param filepath ex: 'lib/javascript/global_objects/string/split/index.md'
 * @returns {string | null}
 */
const getMDNFile = (filepath: string): string | null => {
    let fullPath = path.join(_dirname, '..', filepath);
    const validation = validateFilePath(fullPath);
    if (validation === 1) {
        console.error(`[getMDNFile] Error: File "${fullPath}" does not exist!`);
        return null;
    } else if (validation === 2) {
        // If path is a directory, check for an index.md file
        const revalidation = validateFilePath(path.join(fullPath, 'index.md'));
        if (revalidation !== 0) {
            console.error(`[getMDNFile] Error: Path "${fullPath}" is a directory, not a file!`);
            return null;
        }
        fullPath = path.join(fullPath, 'index.md');
    }
    try {
        return fs.readFileSync(fullPath).toString();
    } catch (error) {
        console.error('[getMDNFile]', error);
        return null;
    }
};

/**
 * Search the lib folder for a directory with a name containing the users search
 * Return the contents of the index.md file in that directory as a string
 * If multiple directories are found, prompt the user to select one
 * @param {SupportedLanguages} technology
 * @param {string} query
 */
const findMDNFile = async (
    technology: SupportedLanguages,
    query: string
): Promise<string | null> => {
    const q = query.trim().toLowerCase();
    const files = TITLE_FILE_LIST[technology];
    // find all files with the query in the title
    const matchedTitles = files.filter((file) => file.title.toLowerCase().includes(q));

    if (matchedTitles.length < 1) {
        console.error(`[findMDNFile] Error: No files found for query "${query}"!`);
        return null;
    }
    let selected = matchedTitles[0].path;
    if (matchedTitles.length > 1) {
        // prompt with list of matching files
        selected = await select({
            message: 'Chose reference you would like to view',
            choices: matchedTitles.map((title) => ({ name: title.title, value: title.path })),
        });
    }
    try {
        const file = fs.readFileSync(path.join(_dirname, '../..', selected)).toString();
        return file;
    } catch (error) {
        console.error('[findMDNFile]', error);
        return null;
    }
};

/**
 * Search the lib folder for a directory with a name containing the users search.
 * Return the contents of the index.md file in that directory as a string.
 * If multiple directories are found, return the first one.
 * @param {SupportedLanguages} technology
 * @param {string} query
 * @returns {string | null}
 */
const optimisticallyFindMDNFile = (
    technology: SupportedLanguages,
    query: string
): string | null => {
    const q = query.trim().toLowerCase();
    const files = TITLE_FILE_LIST[technology];
    // find all files with the query in the title
    const matchedTitles = files.filter((file) => file.title.toLowerCase().includes(q));
    if (matchedTitles.length < 1) {
        console.error(`[optimisticallyFindMDNFile] Error: No files found for query "${query}"!`);
        return null;
    }
    const selected = matchedTitles[0].path;
    try {
        const file = fs.readFileSync(path.join(_dirname, '..', selected)).toString();
        return file;
    } catch (error) {
        console.error('[optimisticallyFindMDNFile]', error);
        return null;
    }
};

export { getMDNFile, findMDNFile, optimisticallyFindMDNFile };
