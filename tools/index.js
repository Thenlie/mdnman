import fs from 'fs';
import path from 'path';

/**
 * Traverses all the files in the lib directory and prints the first 5 lines of each file
 * to the console.
 */

const directoryPath = './lib';
const outputFilePath = 'headers.txt';

const writeStream = fs.createWriteStream(outputFilePath, { flags: 'w', encoding: 'utf8' });

const readFileLines = (filePath, lineCount = 20) => {
  return new Promise((resolve, reject) => {
    const lines = [];
    const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
    stream.on('data', chunk => {
      lines.push(...chunk.split('\n'));
      if (lines.length >= lineCount) {
        stream.destroy();
        resolve(lines.slice(0, lineCount));
      }
    });
    stream.on('end', () => {
      resolve(lines.slice(0, lineCount));
    });
    stream.on('error', err => {
      reject(err);
    });
  });
};

const traverseDirectory = async (dir, outputStream) => {
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

traverseDirectory(directoryPath, writeStream)
  .then(() => {
    writeStream.end();
    console.log(`Output written to ${outputFilePath}`);
  })
  .catch(err => {
    writeStream.end();
    console.error('Error traversing directory:', err);
  });

