/**
 * Take raw markdown MDN doc and return an object containing the 
 * document title, slug and page-type
 * @param {String} document
 */
const getHeader = (document) => {
    let header = {};
    let flag = false;
    let failSafe = false;
    const docArr = document.split('\n');
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i] === '---' && !flag) {
            flag = true;
        } else if (docArr[i] === '---' && flag) {
            flag = false;
            failSafe = true;
            break;
        } else {
            const match = [...docArr[i].matchAll(/[^: ]+/g)];
            if (match.length === 2) {
                header[match[0]] = match[1][0];
            }
        }
    }
    if (!failSafe) return null;
    return header
};

/**
 * Take raw markdown MDN doc and return the same document with the
 * header removed
 * @param {String} document
 */
const stripHeader = (document) => {
    const docArr = document.split('\n');
    do { docArr.shift() } while (docArr[0] !== '---');
    docArr.shift();
    return docArr.join('\n');
}

/**
 * Take a raw markdown MDN doc and return the section of the document that
 * with the provided prefix
 * @param {string} prefix
 * @param {string} document
 */
const getSection = (prefix, document) => {
    const docArr = document.split('\n');
    const section = [];
    let flag = false;
    let heading;
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i].startsWith('#') && docArr[i].includes(prefix) && !flag) {
            flag = true;
            heading = docArr[i].match(/^#+/)[0];
        } else if (docArr[i].match(/^#+/)?.[0] === heading && flag) {
            flag = false;
            break;
        } else if (flag) {
            section.push(docArr[i]);
        }
    }
    return section.join('\n');
}

export { getHeader, stripHeader, getSection }