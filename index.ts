import fs from 'fs';
import { Command } from 'commander';
import { execSync } from 'node:child_process';
import { select } from '@inquirer/prompts';
import { openEditor, OUTPUT_PATH, printDoc, writeDocToFile } from './output/index.js';
import { getHeader, getSection, stripJsxRef } from './parser/index.js';
const program = new Command();

type SupportedLanguages = 'javascript' | 'html' | 'css';

const GENERIC_ERROR_MESSAGE = 'Error! Something went wrong while attempting to find the selected MDN directory.\nPlease try again with a different query.';

/**
 * Search the lib folder for a directory with a name containing the users search
 * Return the contents of the index.md file in that directory as a string
 * @param {'html' | 'css' | 'javascript'} technology
 * @param {string} query 
 */
const findDirectory = async (technology: SupportedLanguages, query: string) => {
    const t = technology.trim().toLowerCase();
    const q = query.trim().toLowerCase();
    // find all directories with the query in the name
    try {
        const files = execSync(`find ./lib/${t} -name '${q}' -type d`);
        const lines = files.toString().trim().split('\n');
        let selected;
        if (lines[0] === '') {
            console.error(`Sorry! No results found for ${q}. Please check for typos and search again.`);
            return;
        } else if (lines.length === 1) {
            selected = lines[0];
        } else {
            // prompt with list of files
            selected = await select({
                message: 'Chose reference you would like to view',
                choices: lines.map(line => {
                    const file = fs.readFileSync(line + '/index.md').toString();
                    const header = getHeader(file);
                    if (!header) return { name: line, value: line };
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

const commandActionHandler = async (lang: SupportedLanguages, str: string, options: { output: string, section: string }) => {
    let document = await findDirectory(lang, str);
    if (!document) {
        console.error(GENERIC_ERROR_MESSAGE);
        return;
    }
    if (options.section !== 'none') {
        document = getSection(options.section, document);
    }
    const strippedDoc = stripJsxRef(document);
    if (options.output === 'stdout') {
        printDoc(strippedDoc);
    } else {
        writeDocToFile(strippedDoc);
        openEditor(OUTPUT_PATH);
    }
};

program
    .name('jsman')
    .description('MDN reference CLI');

program.command('js')
    .description('Search the MDN JavaScript reference library')
    .argument('<string>', 'query to search')
    .option('-o, --output <stdout | vim>', 'output type', 'stdout')
    .option('-s, --section <string>', 'specified section of MDN doc', 'none')
    .action(async (str, options) => commandActionHandler('javascript', str, options));

program.command('html')
    .description('Search the MDN HTML reference library')
    .argument('<string>', 'query to search')
    .option('-o, --output <stdout | vim>', 'output type', 'stdout')
    .option('-s, --section <string>', 'specified section of MDN doc', 'none')
    .action(async (str, options) => commandActionHandler('html', str, options));

program.command('css')
    .description('Search the MDN CSS reference library')
    .argument('<string>', 'query to search')
    .option('-o, --output <stdout | vim>', 'output type', 'stdout')
    .option('-s, --section <string>', 'specified section of MDN doc', 'none')
    .action(async (str, options) => commandActionHandler('css', str, options));

program.parse();
