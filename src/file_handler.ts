import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import type { SupportedLanguages } from './types.js';
import { jsTitles } from './titles/js_titles.js';
import { htmlTitles } from './titles/html_titles.js';
import { cssTitles } from './titles/css_titles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_OPTIONS = {
    javascript: jsTitles,
    html: htmlTitles,
    css: cssTitles,
};

/**
 * Get an MDN reference doc based on an explicit file path starting at the 'lib' directory
 * @param filepath ex: 'lib/javascript/global_objects/string/split/index.md'
 */
const getMDNFile = (filepath: string): string | null => {
    try {
        const file = fs.readFileSync(path.join(__dirname, '..', filepath)).toString();
        return file;
    } catch (error) {
        console.error(error);
        return null;
    }
};

/**
 * Search the lib folder for a directory with a name containing the users search
 * Return the contents of the index.md file in that directory as a string
 * If multiple directories are found, return the first one
 * @param {SupportedLanguages} technology
 * @param {string} query
 */
const optimisticallyFindMDNFile = async (
    technology: SupportedLanguages,
    query: string
): Promise<string | null> => {
    const t = technology.trim().toLowerCase();
    const q = query.trim().toLowerCase();
    const files = FILE_OPTIONS[t as SupportedLanguages];
    // find all directories with the query in the name
    const matchedTitles = files.filter((file) => file.path.includes(q));
    const selected = matchedTitles[0].path;
    try {
        const file = fs.readFileSync(path.join(__dirname, '..', selected + '/index.md')).toString();
        return file;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { getMDNFile, optimisticallyFindMDNFile };
