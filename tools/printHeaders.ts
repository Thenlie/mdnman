import fs from 'fs';
import path from 'path';

/**
 * Traverses all the files in the lib directory and prints everything between the two '---'
 * Will stop printing after 10 lines to avoid spamming the terminal
 */

const DIRECTORY_PATH = './lib';
const OUTPUT_FILE_PATH = 'headers.txt';
const LINE_COUNT = 10;

const writeStream = fs.createWriteStream(OUTPUT_FILE_PATH, { flags: 'w', encoding: 'utf8' });

const readFileLines = (filePath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const lines: string[] = [];
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    stream.on('data', chunk => {
      if (typeof chunk === 'string') {
        lines.push(...chunk.split('\n'));
      }
      if (lines.length >= LINE_COUNT) {
        stream.destroy();
        resolve(lines.slice(0, LINE_COUNT));
      }
    });
    stream.on('end', () => {
      resolve(lines.slice(0, LINE_COUNT));
    });
    stream.on('error', err => {
      reject(err);
    });
  });
};

const traverseDirectory = async (dir: string, outputStream: fs.WriteStream) => {
  const files = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      await traverseDirectory(fullPath, outputStream);
    } else if (file.isFile()) {
      try {
        const lines = await readFileLines(fullPath);
        outputStream.write(`\nFile: ${fullPath}\n`);
        let flag = false;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i] === '---' && !flag) {
              outputStream.write('---\n');
              flag = true;
          } else if (lines[i] === '---' && flag) {
              outputStream.write('---\n');
              flag = false;
              return;
          } else {
              outputStream.write(`${lines[i]}\n`);
          }
      }
      } catch (error) {
        outputStream.write(`Error reading file ${fullPath}: ${error.message}\n`);
      }
    }
  }
};

traverseDirectory(DIRECTORY_PATH, writeStream)
  .then(() => {
    writeStream.end();
    console.log(`Output written to ${OUTPUT_FILE_PATH}`);
  })
  .catch(err => {
    writeStream.end();
    console.error('Error traversing directory:', err);
  });

