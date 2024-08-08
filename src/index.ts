import fs from 'fs';
import { execSync } from 'node:child_process';
import { select } from '@inquirer/prompts';
import { printDoc, writeDocToFile } from './output/index.js';
import { getHeader, stripHeader, stripJsxRef } from './parser/index.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { jsTitles, htmlTitles, cssTitles } from './titles/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type SupportedLanguages = 'javascript' | 'html' | 'css';

/**
 * Get an MDN reference doc based on an explicit file path starting at the 'lib' directory
 * @param filepath ex: 'lib/javascript/global_objects/string/split/index.md'
 */
const getMDNFile = (filepath: string) => {
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
 * @param {'html' | 'css' | 'javascript'} technology
 * @param {string} query 
 */
const getMDNDoc = async (technology: SupportedLanguages, query: string) => {
    const t = technology.trim().toLowerCase();
    const q = query.trim().toLowerCase();
    // find all directories with the query in the name
    try {
        const currentDir = path.join(__dirname, '..', 'lib');
        const files = execSync(`find ${currentDir}/${t} -name '${q}' -type d`);
        const lines = files.toString().trim().split('\n');
        let selected;
        if (lines[0] === '') {
            console.error(`Sorry! No results found for ${q}. Please check for typos and search again.`);
            return null;
        } else if (lines.length === 1) {
            selected = lines[0];
        } else {
            // prompt with list of files
            selected = await select({
                message: 'Chose reference you would like to view',
                choices: lines.map(line => {
                    const file = fs.readFileSync(line + '/index.md').toString();
                    const header = getHeader(file);
                    if (!header || !header?.title) return { name: line, value: line };
                    return { name: header.title, value: line };
                })
            });
        }
        const file = fs.readFileSync(selected + '/index.md').toString();
        return file;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { getMDNDoc, getMDNFile, writeDocToFile, printDoc, stripJsxRef, getHeader, stripHeader, jsTitles, htmlTitles, cssTitles };
