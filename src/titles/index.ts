import { javascriptTitles } from './js_titles.js';
import { htmlTitles } from './html_titles.js';
import { cssTitles } from './css_titles.js';
import { getPathFromTitle } from './utils.js';
import { glossaryTitles } from './glossary_titles.js';

const TITLE_FILE_LIST = {
    javascript: javascriptTitles,
    html: htmlTitles,
    css: cssTitles,
    glossary: glossaryTitles,
};

export {
    javascriptTitles,
    htmlTitles,
    cssTitles,
    glossaryTitles,
    getPathFromTitle,
    TITLE_FILE_LIST,
};
