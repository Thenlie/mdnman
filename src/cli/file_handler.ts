import fs from 'fs';
import path from 'path';
import { select } from '@inquirer/prompts';
import type { SupportedLanguages } from '../types.js';
import { javascriptTitles } from '../titles/js_titles.js';
import { htmlTitles } from '../titles/html_titles.js';
import { cssTitles } from '../titles/css_titles.js';

const _dirname = import.meta.dirname;

const FILE_LIST = {
    javascript: javascriptTitles,
    html: htmlTitles,
    css: cssTitles,
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
    const files = FILE_LIST[technology];
    // find all files with the query in the title
    const matchedTitles = files.filter((file) => file.title.includes(q));
    if (matchedTitles.length < 1) {
        console.error('No files found for query:', query);
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
        console.error(error);
        return null;
    }
};

export { findMDNFile };
