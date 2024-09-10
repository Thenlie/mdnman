/* eslint-disable quotes */
import fs from 'fs';
import path from 'path';
import { escapeSingleQuotes, replaceDoubleSingleQuotes } from './utils';

const DIRECTORY_MAP = [
    { name: 'javascript', path: 'lib/javascript', out: 'tmp/javascript.headers.ts' },
    { name: 'html', path: 'lib/html', out: 'tmp/html.headers.ts' },
    { name: 'css', path: 'lib/css', out: 'tmp/css.headers.ts' },
];

/**
 * Read the first 10 lines of a file
 * @param filePath
 * @returns {Promise<string[]>}
 */
const readFileLines = (filePath: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        const FAILSAFE = 10;
        const lines: string[] = [];
        const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
        stream.on('data', (chunk) => {
            if (typeof chunk === 'string') {
                lines.push(...chunk.split('\n'));
            }
            if (lines.length >= FAILSAFE) {
                stream.destroy();
                resolve(lines.slice(0, FAILSAFE));
            }
        });
        stream.on('end', () => {
            resolve(lines.slice(0, FAILSAFE));
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
};

/**
 * Walk through all folders in a given directory.
 * If a file is found, read it and write the path and title to output stream
 * @param dir
 * @param outputStream
 */
const traverseDirectory = async (dir: string, outputStream: fs.WriteStream) => {
    const files = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            await traverseDirectory(fullPath, outputStream);
        } else if (file.isFile()) {
            try {
                const lines = await readFileLines(fullPath);
                outputStream.write('    {\n');
                outputStream.write(`        path: '${fullPath}',\n`);
                let flag = false;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i] === '---' && !flag) {
                        flag = true;
                    } else if (lines[i] === '---' && flag) {
                        flag = false;
                        break;
                    } else if (lines[i].startsWith('title:')) {
                        const titleText = replaceDoubleSingleQuotes(lines[i].slice(7));
                        if (titleText.startsWith('"')) {
                            outputStream.write(
                                `        title: '${escapeSingleQuotes(titleText.slice(1, -1))}',\n`
                            );
                        } else if (titleText.startsWith("'")) {
                            outputStream.write(`        title: ${titleText},\n`);
                        } else {
                            outputStream.write(
                                `        title: '${escapeSingleQuotes(titleText)}',\n`
                            );
                        }
                        outputStream.write('    },\n');
                        flag = false;
                        break;
                    }
                }
            } catch (error) {
                outputStream.write(`❌ Error reading file ${fullPath}: ${error.message}\n`);
            }
        }
    }
};

DIRECTORY_MAP.forEach((dir) => {
    const writeStream = fs.createWriteStream(dir.out, { flags: 'w', encoding: 'utf8' });
    writeStream.write(
        `${dir.name === 'javascript' ? '/* eslint-disable prettier/prettier */\n' : ''}export const ${dir.name}Titles: {\n    path: string;\n    title: string;\n}[] = [\n`
    );
    traverseDirectory(dir.path, writeStream)
        .then(() => {
            writeStream.write('];\n');
            writeStream.end();
            console.log(`✅ Output written to ${dir.out}`);
        })
        .catch((err) => {
            writeStream.end();
            console.error('❌ Error traversing directory:', err);
        });
});
