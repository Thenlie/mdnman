import { Command } from 'commander';
import { search, select } from '@inquirer/prompts';
import { openEditor, DEFAULT_OUTPUT_PATH, printDoc, writeDocToFile, openLess } from './output.js';
import { completeParse, createChoicesFromTitles, getHeader } from '../parser/index.js';
import { getAllSections, getNamedSection, getSection } from '../parser/sections.js';
import { findMDNFile, getMDNFile } from '../file_handler.js';
import { TITLE_FILE_LIST } from '../titles/index.js';
import type { SupportedCategories } from '../types.js';

const program = new Command();
const GENERIC_ERROR_MESSAGE =
    'Error: Something went wrong while attempting to find the selected MDN directory.\nPlease try again with a different query.';

/**
 * Runs when any CLI command is executed. Handles finding the correct file and outputting it
 * based on the user defined options
 * @param {SupportedCategories} category
 * @param {string} query
 * @param {{output: string, section: string}} options
 * @returns {Promise<void>}
 */
const commandActionHandler = async (
    category: SupportedCategories,
    query: string,
    options: { output: string; section: string; path: string }
): Promise<void> => {
    let document = await findMDNFile(category, query);
    if (!document) {
        console.error('[commandActionHandler]', GENERIC_ERROR_MESSAGE);
        return;
    }
    const header = getHeader(document);
    if (!header) {
        console.error('[commandActionHandler] header', GENERIC_ERROR_MESSAGE);
        return;
    }

    if (options.section !== 'none') {
        document = getNamedSection(document, options.section);
    }
    const strippedDoc = completeParse(document, header.slug || '');

    if (!strippedDoc) {
        console.error(
            '[commandActionHandler] Error: Nothing was returned from transformKumascript!\nDocument:',
            document
        );
        return;
    }

    outputHandler(options, strippedDoc, header.slug);
};

/**
 * Unique handler for interactive command. Prompts the user for coding language,
 * document and optionally a section
 * @param {{output: string, path: string }} options
 * @returns {Promise<void>}
 */
const interactiveActionHandler = async (options: {
    output: string;
    path: string;
}): Promise<void> => {
    // Prompt user for language
    const category: SupportedCategories = await select(
        {
            message: 'Select a category',
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
                {
                    name: 'Glossary',
                    value: 'glossary',
                },
            ],
        },
        { output: process.stderr }
    );
    // Prompt user for query (with autocomplete)
    const documentQuery = await search(
        {
            message: 'Search for an MDN Web Doc',
            source: async (input) => {
                const titles = TITLE_FILE_LIST[category];
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
        },
        { output: process.stderr }
    );
    const file = getMDNFile(documentQuery);
    if (!file) {
        console.error(`[interactiveActionHandler] Error: Could not find file at ${documentQuery}`);
        return;
    }
    const header = getHeader(file);
    if (!header) {
        console.error(
            `[interactiveActionHandler] Error: Could not find file header ${documentQuery}`
        );
        return;
    }

    // Prompt user for section (default to no section/complete doc)
    const sectionQuery = await search(
        {
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
        },
        { output: process.stderr }
    );

    const queryObj = JSON.parse(sectionQuery);
    const section = queryObj.value === 'none' ? file : getSection(file, JSON.parse(sectionQuery));

    if (!section) {
        console.error(`[interactiveActionHandler] Error: Could not find section ${sectionQuery}`);
        return;
    }

    const strippedSection = completeParse(section, header.slug);

    if (!strippedSection) {
        console.error(
            `[interactiveActionHandler] Error: Nothing was returned by transformKumascript\n Query: ${sectionQuery}`
        );
        return;
    }

    outputHandler(options, strippedSection, header.slug);
};

/**
 * Pass a document to the correct output function based on provided options
 * @param {{ output: string, path: string}} options
 * @param {string} document
 * @param {string} slug
 */
const outputHandler = (
    options: { output: string; path: string },
    document: string,
    slug: string
) => {
    switch (options.output) {
        case 'stdout':
            printDoc(document, slug);
            break;
        case 'pager':
            writeDocToFile(document);
            openLess(DEFAULT_OUTPUT_PATH);
            break;
        case 'vim':
            writeDocToFile(document);
            openEditor(DEFAULT_OUTPUT_PATH);
            break;
        case 'file':
            writeDocToFile(document, options.path);
            break;
    }
};

const cli = () => {
    program.name('mdnman').description('MDN reference CLI');

    program
        .command('js')
        .description('Search the MDN JavaScript reference library')
        .argument('<query>', 'query to search')
        .option('-o, --output <stdout | file | vim>', 'output type', 'stdout')
        .option('-s, --section <section_name>', 'specified section of MDN doc', 'none')
        .option('-p, --path <string>', 'output path', DEFAULT_OUTPUT_PATH)
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
        .command('glossary')
        .description('Search the MDN Glossary')
        .argument('<query>', 'query to search')
        .option('-o, --output <stdout | file | vim>', 'output type', 'stdout')
        .option('-s, --section <section_name>', 'specified section of MDN doc', 'none')
        .action(async (query, options) => commandActionHandler('glossary', query, options));

    program
        .command('interactive')
        .description('Use prompts to search the entire MDN reference library')
        .option('-o, --output <pager | stdout | file | vim>', 'output type', 'stdout')
        .option('-p, --path <string>', 'output path', DEFAULT_OUTPUT_PATH)
        .action(async (options) => interactiveActionHandler(options));

    program.parse();
};

export default cli;
export * from './output.js';
