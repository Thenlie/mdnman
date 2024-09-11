import fs from 'fs';
import { stripJsxRef } from '../parser/index.js';
import {
    getSection,
    getAllSections,
    removeEmptySections,
    removeSection,
} from '../parser/sections.js';
import mapDocument from './__fixtures__/map.document.json';

const JS_FILE_PATH = './lib/javascript/global_objects/array/map/index.md';
const HTML_FILE_PATH = './lib/html/global_attributes/title/index.md';

let jsFile: string;
let htmlFile: string;

describe('sections', () => {
    beforeAll(() => {
        try {
            jsFile = fs.readFileSync(JS_FILE_PATH).toString();
            htmlFile = fs.readFileSync(HTML_FILE_PATH).toString();
        } catch (error) {
            throw new Error('Error reading file: ' + error);
        }
    });

    describe('getSection', () => {
        it('passes', () => {
            expect(getSection(jsFile, 'Description')).toMatchSnapshot();
            expect(getSection(htmlFile, 'Accessibility concerns')).toMatchSnapshot();
        });
    });

    describe('getAllSections', () => {
        it('returns all sections from a given document', () => {
            expect(getAllSections(mapDocument.document)).toMatchSnapshot();
        });
    });

    describe('removeSection', () => {
        it('returns a document with the specified section removed', () => {
            expect(removeSection(jsFile, 'Description')).toMatchSnapshot();
        });
    });

    describe('removeEmptySections', () => {
        it('removes empty sections from a given document', () => {
            const trimmedDoc = stripJsxRef(mapDocument.document);
            expect(removeEmptySections(trimmedDoc || '')).toMatchSnapshot();
        });
    });
});
