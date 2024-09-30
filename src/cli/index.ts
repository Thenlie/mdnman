import { Command } from 'commander';
import { openEditor, DEFAULT_OUTPUT_PATH, printDoc, writeDocToFile, openLess } from './output.js';
import { createChoicesFromTitles, stripJsxRef } from '../parser/index.js';
import { getAllSections, getFirstSection } from '../parser/sections.js';
import { findMDNFile } from './file_handler.js';
import { search, select } from '@inquirer/prompts';
import { javascriptTitles } from '../titles/js_titles.js';
import { htmlTitles } from '../titles/html_titles.js';
import { cssTitles } from '../titles/css_titles.js';
import { getMDNFile } from '../file_handler.js';

const program = new Command();
const GENERIC_ERROR_MESSAGE =
    'Error: Something went wrong while attempting to find the selected MDN directory.\nPlease try again with a different query.';

type SupportedLanguages = 'javascript' | 'html' | 'css';

// TODO: Make this an exported constant
const choiceLanguageMap = {
    javascript: javascriptTitles,
    html: htmlTitles,
    css: cssTitles,
};

/**
 * Runs when any CLI command is executed. Handles finding the correct file and outputting it
 * based on the user defined options
 * @param {SupportedLanguages} lang
 * @param {string} query
 * @param {{output: string, section: string}} options
 * @returns {Promise<void>}
 */
const commandActionHandler = async (
    lang: SupportedLanguages,
    query: string,
    options: { output: string; section: string; path: string }
): Promise<void> => {
    let document = await findMDNFile(lang, query);
    if (!document) {
        console.error('[commandActionHandler]', GENERIC_ERROR_MESSAGE);
        return;
    }
    if (options.section !== 'none') {
        document = getFirstSection(document, options.section);
    }
    const strippedDoc = stripJsxRef(document);

    if (!strippedDoc) {
        console.error(
            '[commandActionHandler] Error: Nothing was returned from stripJsxRef!\nDocument:',
            document
        );
        return;
    }

    if (options.output === 'stdout') {
        printDoc(strippedDoc);
    } else if (options.output === 'vim') {
        writeDocToFile(strippedDoc);
        openEditor(DEFAULT_OUTPUT_PATH);
    } else if (options.output === 'file' && options.path) {
        writeDocToFile(strippedDoc, options.path);
    }
};

const interactiveActionHandler = async (options: { output: string; path: string }) => {
    // Prompt user for language
    const language: SupportedLanguages = await select({
        message: 'Select a language',
        choices: [
            {
                name: 'JavaScript',
                value: 'javascript',
            },
            {
                name: 'HTML',
                value: 'html',
            },
            {
                name: 'CSS',
                value: 'css',
            },
        ],
    });
    console.log(language);
    // Prompt user for query (with autocomplete)
    const query = await search({
        message: 'Search for an MDN Web Doc',
        source: async (input) => {
            const titles = choiceLanguageMap[language];
            const choices = createChoicesFromTitles(titles);
            if (!input) {
                return choices;
            }
            // Split the input by space, dot, and hyphen
            const inputValues = input.split(/\.| |-/);
            return choices.filter((choice) =>
                inputValues.every((val: string) =>
                    choice.name.toLowerCase().includes(val.toLowerCase())
                )
            );
        },
    });
    console.log(query);
    const file = getMDNFile(query);
    if (!file) {
        console.error(`[interactiveActionHandler] Error: Could not find file at ${query}`);
        return;
    }
    // Prompt user for section (default to no section/complete doc)
    const section = await search({
        message: 'Select a section from the document (select none for the full doc)',
        source: async (input) => {
            const sections = getAllSections(file);
            const choices = [{ name: 'none (return full page)', value: 'none' }, ...sections];
            if (!input) {
                return choices.map((choice) => ({
                    name: choice.name,
                    value: JSON.stringify(choice),
                }));
            }
            // Split the input by space, dot, and hyphen
            const inputValues = input.split(/\.| |-/);
            const filteredChoices = choices.filter((choice) =>
                inputValues.every(
                    (val: string) =>
                        choice.name.toLowerCase().includes(val.toLowerCase()) ||
                        choice.name === 'none (return full page)'
                )
            );
            return filteredChoices.map((choice) => ({
                name: choice.name,
                value: JSON.stringify(choice),
            }));
        },
    });
    console.log(section);

    openLess(query);
    // if (options.output === 'stdout') {
    //     printDoc(file);
    // } else if (options.output === 'vim') {
    //     writeDocToFile(file);
    //     openEditor(DEFAULT_OUTPUT_PATH);
    // } else if (options.output === 'file' && options.path) {
    //     writeDocToFile(file, options.path);
    // }
};

const cli = () => {
    program.name('mdnman').description('MDN reference CLI');

    program
        .command('js')
        .description('Search the MDN JavaScript reference library')
        .argument('<query>', 'query to search')
        .option('-o, --output <stdout | file | vim>', 'output type', 'stdout')
        .option('-s, --section <section_name>', 'specified section of MDN doc', 'none')
        .option('-p, --path <string>', 'output path', './out/ref.md')
        .action(async (query, options) => commandActionHandler('javascript', query, options));

    program
        .command('html')
        .description('Search the MDN HTML reference library')
        .argument('<query>', 'query to search')
        .option('-o, --output <stdout | file | vim>', 'output type', 'stdout')
        .option('-s, --section <section_name>', 'specified section of MDN doc', 'none')
        .action(async (query, options) => commandActionHandler('html', query, options));

    program
        .command('css')
        .description('Search the MDN CSS reference library')
        .argument('<query>', 'query to search')
        .option('-o, --output <stdout | file | vim>', 'output type', 'stdout')
        .option('-s, --section <section_name>', 'specified section of MDN doc', 'none')
        .action(async (query, options) => commandActionHandler('css', query, options));

    program
        .command('interactive')
        .description('Use prompts to search the entire MDN reference library')
        .option('-o, --output <stdout | file | vim>', 'output type', 'stdout')
        .option('-p, --path <string>', 'output path', './out/ref.md')
        .action(async (options) => interactiveActionHandler(options));

    program.parse();
};

// Remove before push
cli();

export default cli;
export * from './output.js';
