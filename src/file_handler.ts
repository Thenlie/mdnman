import fs from 'fs';
import path from 'path';
import type { SupportedLanguages } from './types.js';
import { jsTitles } from './titles/js_titles.js';
import { htmlTitles } from './titles/html_titles.js';
import { cssTitles } from './titles/css_titles.js';

const _dirname = import.meta.dirname;

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
    const fullPath = path.join(_dirname, '..', filepath);
    // Ensure file exists
    if (!fs.existsSync(filepath)) {
        console.error('File does not exist:', fullPath);
        return null;
    }
    const stats = fs.statSync(fullPath);
    // Ensure file is not a directory
    if (stats.isDirectory()) {
        console.error('Path is a directory, not a file:', fullPath);
        return null;
    }
    try {
        const file = fs.readFileSync(fullPath).toString();
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
const optimisticallyFindMDNFile = (
    technology: SupportedLanguages,
    query: string
): string | null => {
    const t = technology.trim().toLowerCase();
    const q = query.trim().toLowerCase();
    const files = FILE_OPTIONS[t as SupportedLanguages];
    // find all directories with the query in the name
    const matchedTitles = files.filter((file) => file.path.includes(q));
    if (matchedTitles.length < 1) {
        console.error('No files found for query:', query);
        return null;
    }
    const selected = matchedTitles[0].path;
    try {
        const file = fs.readFileSync(path.join(_dirname, '..', selected)).toString();
        return file;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { getMDNFile, optimisticallyFindMDNFile };
