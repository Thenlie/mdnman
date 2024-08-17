import fs from 'fs';
import path from 'path';
import { execSync } from 'node:child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import type { SupportedLanguages } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
        } else if (lines.length >= 1) {
            selected = lines[0];
        }
        const file = fs.readFileSync(selected + '/index.md').toString();
        return file;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { getMDNFile, optimisticallyFindMDNFile };
