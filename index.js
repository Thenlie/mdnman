import { exec } from 'node:child_process';
import { input, select } from '@inquirer/prompts';

/**
 * Take raw markdown MDN document and format it before outputting to the console
 * @param {String} document 
 */
const printDoc = (document) => {
    /**
     * Remove 'Specifications' section and everything below it
     * This includes 'Browser Compatibility' and 'See Also'
     */
    const index = document.indexOf('## Specifications');
    if (index !== -1) {
        document = document.slice(0, index);
    }
    console.log(document);
}
    

/**
 * Search the lib folder for a directory with a name containing the users search
 * @param {'html' | 'css' | 'javascript'} technology
 * @param {String} query 
 */
const findDirectory = (technology, query) => {
    const t = technology.trim().toLowerCase()
    const q = query.trim().toLowerCase()
    exec(`find ./lib/${t} -name '${q}' -type d`, (error, output) => {
        if (error) {
            console.error(error);
            exit(1)
        }
        const lines = output.trim().split('\n');
        console.log(lines)
        if (lines.length === 0) {
            console.log(`Sorry! No results found for ${q}. Please check for typos and search again.`)
        } else if (lines.length === 1) {
            exec(`cat ${lines[0]}/index.md`, (e, o) => {
                if (e) {
                    console.error(e);
                    exit(1);
                }
                printDoc(o)
            })
        } else {
            // prompt with list of files
        }
    });
}

// Ask user for input of HTML, CSS or JS
// Ask user for query

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

findDirectory(TECHNOLOGY_TYPE, QUERY)

// If there is nothing returned, let the user know
// If there is only one line returned, log that file
// If there is more than one file, give the user the option to select one
// Then display that file
