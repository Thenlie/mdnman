import { completeParse, getHeader, stripHeader } from '../parser/index.js';
import fs from 'fs';
import path from 'path';
import child_process from 'node:child_process';
import { removeEmptySections } from '../parser/sections.js';

const DEFAULT_OUTPUT_PATH = './ref.md';

/**
 * Opens a file in the user defined editor or vim
 * @param {string} path
 */
const openEditor = (path: string) => {
    const editor = process.env.EDITOR || 'vim';
    const child = child_process.spawn(editor, [path], {
        stdio: 'inherit',
    });
    child.on('exit', () => {});
};

/**
 * Opens a file using less
 * @param {string} path
 */
const openLess = (path: string) => {
    const child = child_process.spawn('less', ['-R', path], {
        stdio: 'inherit',
    });
    child.on('exit', () => {});
};

/**
 * Safely create a writable stream for the output file.
 * @param {string} outputPath - The absolute or relative path to write the file.
 * @returns {fs.WriteStream|null} - Returns a writable stream or null if failed.
 */
const createSafeWriteStream = (outputPath: string): fs.WriteStream | null => {
    const fullPath = path.resolve(outputPath);

    // Ensure parent directory exists
    const dir = path.dirname(fullPath);
    try {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // make any missing folders
        }
    } catch (dirErr) {
        console.error(`Failed to create directory: ${dir}`);
        console.error((dirErr as Error).message);
        return null;
    }

    // Attempt to create a write stream
    let writeStream;
    try {
        writeStream = fs.createWriteStream(fullPath, { flags: 'w', encoding: 'utf8' });

        // Add error handling to the stream itself
        writeStream.on('error', (err) => {
            console.error(`Error writing to file: ${fullPath}`);
            console.error(err.message);
        });

        return writeStream;
    } catch (err) {
        console.error(`Failed to create write stream for: ${fullPath}`);
        console.error((err as Error).message);
        return null;
    }
};

/**
 * Take raw markdown MDN doc and write it to a file after formatting
 * @param {string} document
 * @param {string} [outputPath]
 */
const writeDocToFile = (document: string, outputPath: string = DEFAULT_OUTPUT_PATH) => {
    const writeStream = createSafeWriteStream(outputPath);
    if (!writeStream) {
        console.error('Failed to create writeStream!');
        return;
    }
    // Remove 'Specifications' section and everything below it
    // This includes 'Browser Compatibility' and 'See Also'
    const index = document.indexOf('## Specifications');
    if (index !== -1) {
        document = document.slice(0, index);
    }

    // Remove MDN header and write document to file
    let doc = document;
    const header = getHeader(document);
    console.log(`✍️ Writing MDN Doc${header ? ' ' + header.title + '' : ''} to file ${outputPath}`);
    if (header) {
        writeStream.write(`# ${header.title}\n`);
        doc = stripHeader(document);
    }
    // Write rest of document to file
    const docArr = doc.split('\n');
    docArr.forEach((line) => writeStream.write(line + '\n'));

    writeStream.end();
};

/**
 * Take raw markdown MDN doc and format it before outputting to the console
 * @param {string} document
 */
const printDoc = (document: string) => {
    const formattedDoc = completeParse(removeEmptySections(stripHeader(document)));
    console.log(formattedDoc);

    // // Remove 'Specifications' section and everything below it
    // // This includes 'Browser Compatibility' and 'See Also'
    // const index = document.indexOf('## Specifications');
    // if (index !== -1) {
    //     document = document.slice(0, index);
    // }

    // const header = getHeader(document);
    // let strippedDoc = document;
    // if (header) {
    //     console.log(`# ${header.title}`);
    //     strippedDoc = stripHeader(document);
    // }
    // const docArr = strippedDoc.split('\n');
    // let shouldHighlight = false;
    // let highlightLang = 'javascript';

    // docArr.forEach((line) => {
    //     // Check for syntax highlighting
    //     if (line in MARKDOWN_SYNTAX_MAP) {
    //         shouldHighlight = true;
    //         highlightLang = mapMarkdownToLang(line) || 'javascript';
    //         console.log('------------');
    //         return;
    //     }
    //     if (line === '```') {
    //         shouldHighlight = false;
    //         console.log('------------');
    //         return;
    //     }
    //     if (shouldHighlight) {
    //         console.log(highlight(line, { language: highlightLang }));
    //     } else {
    //         console.log(line);
    //     }
    // });
};

export { printDoc, writeDocToFile, openEditor, openLess, DEFAULT_OUTPUT_PATH };
