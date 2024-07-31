import { exec } from 'node:child_process';
import { input, select } from '@inquirer/prompts';
import { highlight } from 'cli-highlight';
import { getHeader, stripHeader } from './parser/index.js';

/**
 * Take raw markdown MDN doc and format it before outputting to the console
 * @param {String} document 
 */
const printDoc = (document) => {
    // Remove 'Specifications' section and everything below it
    // This includes 'Browser Compatibility' and 'See Also'
    const index = document.indexOf('## Specifications');
    if (index !== -1) {
        document = document.slice(0, index);
    }

    const header = getHeader(document);
    console.log(header)

    const strippedDoc = stripHeader(document)
    const docArr = strippedDoc.split('\n');
    let shouldHighlight = false;
    let highlightLang = 'javascript';
    const markdownSyntaxMap = {
        '```js': 'javascript',
        '```js-nolint': 'javascript',
        '```html': 'html',
        '```css': 'css',
        '```plain': 'plaintext'
    }

    const mapMarkdownToLang = (markdown) => {
        return markdownSyntaxMap[markdown]
    }

    docArr.forEach((line) => {
        // Check for syntax highlighting
        if (line in markdownSyntaxMap) {
            shouldHighlight = true;
            highlightLang = mapMarkdownToLang(line)
            console.log('-----------------');
            return;
        }
        if (line === '```') {
            shouldHighlight = false;
            console.log('-----------------');
            return;
        }
        if (shouldHighlight) {
            console.log(highlight(line, { language: highlightLang }))
        } else {
            console.log(line);
        }
    });
}
    
/**
 * Search the lib folder for a directory with a name containing the users search
 * Pass that directories index.md file on to the print function
 * @param {'html' | 'css' | 'javascript'} technology
 * @param {String} query 
 */
const findDirectory = (technology, query) => {
    const t = technology.trim().toLowerCase()
    const q = query.trim().toLowerCase()
    exec(`find ./lib/${t} -name '${q}' -type d`, async (error, output) => {
        if (error) {
            console.error(error);
            exit(1)
        }
        const lines = output.trim().split('\n');
        let selected;
        if (lines.length === 0) {
            console.log(`Sorry! No results found for ${q}. Please check for typos and search again.`)
        } else if (lines.length === 1) {
            selected = lines[0];
        } else {
            // prompt with list of files
            selected = await select({
                message: 'Chose reference you would like to view',
                choices: lines.map(line => ({ name: line, value: line }))
            });
        }
        exec(`cat ${selected}/index.md`, (error, output) => {
            if (error) {
                console.error(error);
                exit(1);
            }
            printDoc(output);
        })
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
