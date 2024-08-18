/**
 * Take a raw markdown MDN doc and return the section of the document that
 * with the provided prefix
 * @param {string} prefix
 * @param {string} document
 * @returns {string}
 */
const getSection = (prefix: string, document: string): string => {
    const docArr = document.split('\n');
    const section = [];
    let flag = false;
    let heading;
    for (let i = 0; i < docArr.length; i++) {
        if (
            docArr[i].startsWith('#') &&
            docArr[i].toLowerCase().includes(prefix.toLowerCase()) &&
            !flag
        ) {
            flag = true;
            heading = docArr[i].match(/^#+/)?.[0];
            section.push(docArr[i]);
        } else if (docArr[i].match(/^#+/)?.[0] === heading && flag) {
            flag = false;
            break;
        } else if (flag) {
            section.push(docArr[i]);
        }
    }
    return section.join('\n');
};

type MDNSection = {
    name: string;
    level: number;
    position: number;
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

export { getSection, getAllSections };
