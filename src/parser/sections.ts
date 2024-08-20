type MDNSection = {
    name: string;
    level: number;
    position: number;
};

/**
 * Take a raw markdown MDN doc and return the section of the document that
 * with the provided section name
 * @param {string} document
 * @param {string} sectionName
 * @returns {string}
 */
const getSection = (document: string, sectionName: string): string => {
    const docArr = document.split('\n');
    const section = [];
    let flag = false;
    let heading = '';
    for (let i = 0; i < docArr.length; i++) {
        const currentHeading = docArr[i].match(/^#+/)?.[0];
        // Check for matching section name and set flag
        if (
            !flag &&
            docArr[i].startsWith('#') &&
            docArr[i].toLowerCase().includes(sectionName.toLowerCase())
        ) {
            flag = true;
            heading = currentHeading || '';
            section.push(docArr[i]);
            // Check for end of section by finding matching or higher markdown heading
        } else if (flag && currentHeading && currentHeading.length <= heading.length) {
            flag = false;
            break;
            // Add lines of section if not at a heading
        } else if (flag) {
            section.push(docArr[i]);
        }
    }
    return section.join('\n');
};

/**
 * Take a raw markdown MDN doc and return an array of all sections in that doc
 * @param document
 * @returns {MDNSection}
 */
const getAllSections = (document: string): MDNSection[] => {
    const docArr = document.split('\n');
    const sections = docArr.filter((line) => line.startsWith('#'));
    return sections.map((line, i) => {
        // Create a two element array where the first element is the '#'s
        // and the second is the string that follows
        const lineArr = line.split(/ (.*)/, 2);
        return {
            name: lineArr[1],
            level: lineArr[0].length,
            position: i + 1,
        };
    });
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
        const currentHeading = docArr[i].match(/^#+/)?.[0];
        // Check for matching section name and set flag
        if (
            !flag &&
            docArr[i].startsWith('#') &&
            docArr[i].toLowerCase().includes(sectionName.toLowerCase())
        ) {
            flag = true;
            heading = currentHeading || '';
            // Check for end of section by finding matching or higher markdown heading
        } else if (flag && currentHeading && currentHeading.length <= heading.length) {
            flag = false;
            // Add all lines when section not flagged
        } else if (!flag) {
            section.push(docArr[i]);
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
    let trimmedDoc = document;
    for (let i = 0; i < sections.length; i++) {
        const section = getSection(document, sections[i].name);
        const lines = section.split('\n');
        // Remove the heading line from the section
        lines.shift();
        // Filter out empty line and lines only containing '\n'
        const filteredLines = lines.filter((line) => line !== '');
        if (filteredLines.length === 0) {
            trimmedDoc = removeSection(trimmedDoc, sections[i].name);
        }
    }
    return trimmedDoc;
};

export { getSection, getAllSections, removeSection, removeEmptySections };
