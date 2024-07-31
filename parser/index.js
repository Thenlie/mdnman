/**
 * Take raw markdown MDN doc and return an object containing the 
 * document title, slug and page-type
 * @param {String} document
 */
const getHeader = (document) => {
    let header = {};
    let flag = false;
    const docArr = document.split('\n');
    for (let i = 0; i < docArr.length; i++) {
        if (docArr[i] === '---' && !flag) {
            flag = true;
        } else if (docArr[i] === '---' && flag) {
            flag = false;
            break;
        } else {
            const match = [...docArr[i].matchAll(/[^: ]+/g)];
            if (match.length === 2) {
                header[match[0]] = match[1][0];
            }
        }
    }
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

export { getHeader, stripHeader }