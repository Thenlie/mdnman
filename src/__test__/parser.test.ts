import { getHeader, getHtmlDescription, stripHeader, stripJsxRef } from '../parser/index.js';
import fs from 'fs';
import mapHeader from '../__fixtures__/map.header.json';
import titleDescription from '../__fixtures__/title.description.json';

const JS_FILE_PATH = './lib/javascript/global_objects/array/map/index.md';
const HTML_FILE_PATH = './lib/html/global_attributes/title/index.md';
let jsFile: string;
let htmlFile: string;

describe('parser', () => {
    beforeAll(() => {
        try {
            jsFile = fs.readFileSync(JS_FILE_PATH).toString();
            htmlFile = fs.readFileSync(HTML_FILE_PATH).toString();
        } catch (error) {
            throw new Error('Error reading file: ' + error);
        }
    });
    describe('getHeader', () => {
        it('returns properly formatted object containing all required header fields', () => {
            const header = getHeader(jsFile);
            expect(header).toMatchObject(mapHeader);
        });
    });

    describe('stripHeader', () => {
        it('passes', () => {
            expect(1 + 1).toBe(2);
        });
    });

    describe('getSection', () => {
        it('passes', () => {
            expect(1 + 1).toBe(2);
        });
    });

    describe('stripJsxRef', () => {
        it('properly removes or transforms text wrapped in double curly braces `{{ }}`', () => {
            expect(stripJsxRef('Hello{{ hello }}')).toBe('Hello');
            expect(stripJsxRef('{{ hello }}')).toBe('');
            expect(stripJsxRef('Some test {{HTMLElement("input")}} string')).toBe(
                'Some test <input> string'
            );
            expect(stripJsxRef('Some test {{htmlelement("div")}} string')).toBe(
                'Some test <div> string'
            );
        });
    });

    describe('getHtmlDescription', () => {
        it('returns all text in the document up until the first `#`', () => {
            const strippedFile = stripHeader(htmlFile);
            const description = getHtmlDescription(strippedFile);
            expect(description.trim()).toBe(titleDescription.description);
        });
    });
});
