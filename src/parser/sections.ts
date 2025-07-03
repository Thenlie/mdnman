import type { MDNSection } from '../types.js';
import { stripHeader } from './index.js';

/**
 * Take a raw markdown MDN doc and return the first section of the document
 * with the provided section name. Used when there are no duplicate section
 * names in a document.
 * @param {string} document
 * @param {string} sectionName
 * @returns {string}
 */
const getNamedSection = (document: string, sectionName: string): string => {
    const docArr = document.split('\n');
    const result = [];
    let inSection = false;
    let hashes = '';
    for (let i = 0; i < docArr.length; i++) {
        const line = docArr[i];
        const currentHashes = line.match(/^#+ /)?.[0].trim();

        if (inSection) {
            // Check for end of section by finding matching or higher markdown heading
            if (currentHashes && currentHashes.length <= hashes.length) {
                inSection = false;
                break;
            }
            // Add content to final output
            result.push(line);
        }

        // Check for matching section name and set flag
        // Regex to split line into two parts, hashes and text
        const re = /^(?<hashes>#+ )(?<text>.*)/;
        const match = line.match(re);
        // Check if line is a markdown heading
        if (!match) continue;
        // Check for matching heading name
        if (match.groups?.text.trim().toLowerCase() === sectionName.trim().toLowerCase()) {
            inSection = true;
            hashes = match.groups.hashes.trim();
            result.push(line);
        }
    }
    return result.join('\n');
};

/**
 * Take a raw markdown MDN doc and return the section of the document
 * with the provided section name and position.
 * @param {string} document
 * @param {MDNSection} inputSection
 * @returns {string | null}
 */
const getSection = (document: string, inputSection: MDNSection): string | null => {
    const sections = getAllSections(document);

    // Check for duplicate section names
    const matchingSections = sections.filter((s) => s.name === inputSection.name);
    if (matchingSections.length === 0) {
        console.error(
            `[getSection] Error: No section named ${inputSection.name} found in document!`
        );
        return null;
    } else if (matchingSections.length === 1) {
        return getNamedSection(document, inputSection.name);
    }

    const docArr = document.split('\n');
    const result = [];
    let inSection = false;
    let position = 0;

    for (let i = 0; i < docArr.length; i++) {
        const line = docArr[i].trim();

        if (inSection) {
            // Check for end of section by finding matching or higher markdown heading
            const hashes = line.match(/^#+ /)?.[0].trim();
            if (hashes && hashes.length <= inputSection.level) {
                inSection = false;
                break;
            }
            // Add content to the final output
            result.push(line);
        }

        // Regex to split line into two parts, hashes and text
        const re = /^(?<hashes>#+ )(?<text>.*)/;
        const match = line.match(re);
        // Check if line is a markdown heading
        if (!match) continue;
        position++;
        // Check if heading title matches the input section
        if (match.groups?.text.trim() !== inputSection.name.trim()) continue;
        // Check if line position matches input position
        if (position !== inputSection.position) continue;

        // Matching section found! Start adding content to final output
        inSection = true;
        result.push(line);
    }

    return result.join('\n');
};

/**
 * Take a raw markdown MDN doc and return an array of all sections in that doc
 * @param document
 * @returns {MDNSection[]}
 */
const getAllSections = (document: string): MDNSection[] => {
    const docArr = document.split('\n');
    const sections = docArr.filter((line) => /^#+ /.test(line));
    const mainSections = sections.map((line, i) => {
        // Create a two element array where the first element is the '#'s
        // and the second is the string that follows
        const lineArr = line.split(/ (.*)/, 2);
        return {
            name: lineArr[1],
            level: lineArr[0].length,
            position: i + 1,
        };
    });
    // Add the static Description section since it does not have a '#' heading
    mainSections.unshift({
        name: 'Introduction',
        level: 1,
        position: 0,
    });
    return mainSections;
};

/**
 * Take a raw markdown MDN doc and return the document with the specified section removed.
 * This is done by removing all content from the section heading, until the next heading of
 * equal or higher value.
 * @param document
 * @param sectionName
 * @returns {string}
 */
const removeSection = (document: string, sectionName: string): string => {
    const docArr = document.split('\n');
    const section = [];
    let flag = false;
    let heading = '';
    for (let i = 0; i < docArr.length; i++) {
        const line = docArr[i];
        const currentHeading = line.match(/^#+ /)?.[0].trim();
        // Check for matching section name and set flag
        if (!flag && /^#+ /.test(line) && line.toLowerCase().includes(sectionName.toLowerCase())) {
            flag = true;
            heading = currentHeading || '';
            // Check for end of section by finding matching or higher markdown heading
        } else if (flag && currentHeading && currentHeading.length <= heading.length) {
            flag = false;
            // Add all lines when section not flagged
        } else if (!flag) {
            section.push(line);
        }
    }
    return section.join('\n');
};

/**
 * Take a raw markdown MDN doc and return the document with any empty sections removed
 * @param {string} document
 * @returns {string}
 */
const removeEmptySections = (document: string): string => {
    const sections = getAllSections(document);
    // Remove the introduction section from the list of sections
    sections.shift();
    let trimmedDoc = document;
    for (let i = 0; i < sections.length; i++) {
        const section = getSection(document, sections[i]);
        if (!section) {
            console.error(
                `[removeEmptySections] Error: No section named ${sections[i].name} found in document!`
            );
            continue;
        }
        const lines = section.split('\n');
        // Remove the heading line from the section
        lines.shift();
        // Filter out empty line and lines only containing '\n'
        const filteredLines = lines.filter((line) => line !== '');
        if (filteredLines.length === 0) {
            trimmedDoc = removeSection(trimmedDoc, sections[i].name);
        }
    }
    // console.log('Leithen', trimmedDoc);
    // const intro = getIntroSection(document);
    return trimmedDoc;
};

/**
 * The description of each MDN Doc is the first content in the document, listed before
 * any section headings. This function returns that section of the document.
 * @param {string} document
 * @returns {string}
 */
const getIntroSection = (document: string): string => {
    const parsedDocument = stripHeader(document, false);
    const section: string[] = [];
    const docArr = parsedDocument.split('\n');
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i].startsWith('##')) break;
        section.push(docArr[i]);
    }
    return section.join('\n');
};

export {
    getSection,
    getNamedSection,
    getAllSections,
    removeSection,
    removeEmptySections,
    getIntroSection,
};
