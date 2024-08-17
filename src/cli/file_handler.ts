import fs from 'fs';
import path from 'path';
import { execSync } from 'node:child_process';
import { select } from '@inquirer/prompts';
import { getHeader } from '../parser/index.js';
import type { SupportedLanguages } from '../types.js';

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
    const t = technology.trim().toLowerCase();
    const q = query.trim().toLowerCase();
    // find all directories with the query in the name
    try {
        const currentDir = path.join(__dirname, '..', 'lib');
        const files = execSync(`find ${currentDir}/${t} -name '${q}' -type d`);
        const lines = files.toString().trim().split('\n');
        let selected;
        if (lines[0] === '') {
            console.error(
                `Sorry! No results found for ${q}. Please check for typos and search again.`
            );
            return null;
        } else if (lines.length === 1) {
            selected = lines[0];
        } else {
            // prompt with list of files
            selected = await select({
                message: 'Chose reference you would like to view',
                choices: lines.map((line) => {
                    const file = fs.readFileSync(line + '/index.md').toString();
                    const header = getHeader(file);
                    if (!header || !header?.title) return { name: line, value: line };
                    return { name: header.title, value: line };
                }),
            });
        }
        const file = fs.readFileSync(selected + '/index.md').toString();
        return file;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { findMDNFile };
