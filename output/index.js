import { highlight } from 'cli-highlight';
import { getHeader, stripHeader } from '../parser/index.js';
import fs from 'fs';
import child_process from 'node:child_process';

const OUTPUT_PATH = './out/ref.md'

/**
 * Opens a file in the user defined editor or vim
 * @param {String} path
 */
const openEditor = (path) => {
    const editor = process.env.EDITOR || 'vim';
    const child = child_process.spawn(editor, [path], {
        stdio: 'inherit'
    });
    child.on('exit', () => {});
}

/**
* Take raw markdown MDN doc and write it to a file after formatting
* @param {String} document 
*/
const writeDocToFile = (document) => {
    const writeStream = fs.createWriteStream(OUTPUT_PATH, { flags: 'w', encoding: 'utf8' })
    // Remove 'Specifications' section and everything below it
    // This includes 'Browser Compatibility' and 'See Also'
    const index = document.indexOf('## Specifications');
    if (index !== -1) {
        document = document.slice(0, index);
    }

    // Remove MDN header and write document to file
    const header = getHeader(document);
    writeStream.write(`# ${header.title}\n`);
    const strippedDoc = stripHeader(document);
    // Write rest of document to file
    const docArr = strippedDoc.split('\n');
    docArr.forEach((line) => writeStream.write(line + '\n'));

    writeStream.end();
}

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
    let strippedDoc = document;
    if (header) {
        console.log(`# ${header.title}`);
        strippedDoc = stripHeader(document)
    }
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
            console.log('------------');
            return;
        }
        if (line === '```') {
            shouldHighlight = false;
            console.log('------------');
            return;
        }
        if (shouldHighlight) {
            console.log(highlight(line, { language: highlightLang }))
        } else {
            console.log(line);
        }
    });
};

export { printDoc, writeDocToFile, openEditor };
