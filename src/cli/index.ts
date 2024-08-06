import { Command } from 'commander';
import { openEditor, OUTPUT_PATH, printDoc, writeDocToFile } from '../output/index.js';
import { getSection, stripJsxRef } from '../parser/index.js';
import { getMDNDoc } from '../index.js';

const program = new Command();
const GENERIC_ERROR_MESSAGE = 'Error! Something went wrong while attempting to find the selected MDN directory.\nPlease try again with a different query.';

type SupportedLanguages = 'javascript' | 'html' | 'css';

/**
 * Runs when any CLI command is executed. Handles finding the correct file and outputting it
 * based on the user defined options
 * @param {SupportedLanguages} lang 
 * @param {string}str 
 * @param {{output: string, section: string}} options 
 * @returns {Promise<void>}
 */
const commandActionHandler = async (
    lang: SupportedLanguages,
    str: string,
    options: { output: string, section: string }
): Promise<void> => {
    let document = await getMDNDoc(lang, str);
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