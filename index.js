import fs from 'fs';
import { execSync } from 'node:child_process';
import { input, select } from '@inquirer/prompts';
import { printDoc } from './output/index.js';
import { getSection } from './parser/index.js';

/**
 * Search the lib folder for a directory with a name containing the users search
 * Return the contents of the index.md file in that directory as a string
 * @param {'html' | 'css' | 'javascript'} technology
 * @param {String} query 
 */
const findDirectory = async (technology, query) => {
    const t = technology.trim().toLowerCase();
    const q = query.trim().toLowerCase();
    // find all directories with the query in the name
    const files = execSync(`find ./lib/${t} -name '${q}' -type d`);
    const lines = files.toString().trim().split('\n');
    let selected;
    if (lines[0] === '') {
        console.error(`Sorry! No results found for ${q}. Please check for typos and search again.`)
        return;
    } else if (lines.length === 1) {
        selected = lines[0];
    } else {
        // prompt with list of files
        selected = await select({
            message: 'Chose reference you would like to view',
            choices: lines.map(line => ({ name: line, value: line }))
        });
    }
    const file = fs.readFileSync(selected + '/index.md').toString();
    return file;
}

const TECHNOLOGY_TYPE = await select({ 
    message: 'Choose the technology you would like to reference', 
    choices: [
        {
            name: 'JavaScript',
            value: 'javascript',
        },
        {
            name: 'HTMl',
            value: 'html',
        },
        {
            name: 'CSS',
            value: 'css',
        },
    ],
});

const QUERY = await input({
    message: 'Search:',
    required: true
});

const doc = await findDirectory(TECHNOLOGY_TYPE, QUERY);
// printDoc(doc);

const sec = getSection('Examples', doc);
// console.log(sec)
printDoc(sec);
