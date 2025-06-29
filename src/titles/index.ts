import { javascriptTitles } from './js_titles.js';
import { htmlTitles } from './html_titles.js';
import { cssTitles } from './css_titles.js';
import { getPathFromTitle } from './utils.js';

const TITLE_FILE_LIST = {
    javascript: javascriptTitles,
    html: htmlTitles,
    css: cssTitles,
};

export { javascriptTitles, htmlTitles, cssTitles, getPathFromTitle, TITLE_FILE_LIST };
