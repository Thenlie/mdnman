import fs from 'fs';
import { stripJsxRef } from '../parser/index.js';
import {
    getSection,
    getAllSections,
    removeEmptySections,
    removeSection,
    getFirstSection,
} from '../parser/sections.js';
import mapDocument from './__fixtures__/map.document.json';
import { MDNSection } from '../types.js';

const JS_FILE_PATH = './lib/javascript/global_objects/array/map/index.md';
const HTML_FILE_PATH = './lib/html/global_attributes/title/index.md';
const CSS_FILE_PATH = './lib/css/color_value/color-mix/index.md';

let jsFile: string;
let htmlFile: string;
let cssFile: string;

const mockJsSection: MDNSection = {
    name: 'Description',
    level: 1,
    position: 1,
};

const mockHtmlSection: MDNSection = {
    name: 'Accessibility concerns',
    level: 1,
    position: 1,
};

const mockCssSection: MDNSection = {
    name: 'CSS',
    level: 4,
    position: 11,
};

describe('sections', () => {
    beforeAll(() => {
        try {
            jsFile = fs.readFileSync(JS_FILE_PATH).toString();
            htmlFile = fs.readFileSync(HTML_FILE_PATH).toString();
            cssFile = fs.readFileSync(CSS_FILE_PATH).toString();
        } catch (error) {
            throw new Error('Error reading file: ' + error);
        }
    });

    describe('getFirstSection', () => {
        it('properly returns a section with the provided name', () => {
            expect(getFirstSection(jsFile, 'Description')).toMatchSnapshot();
            expect(getFirstSection(htmlFile, 'Accessibility concerns')).toMatchSnapshot();
        });
    });

    describe('getSection', () => {
        it('properly returns the section with the provided name and position', () => {
            expect(getSection(jsFile, mockJsSection)).toMatchSnapshot();
            expect(getSection(htmlFile, mockHtmlSection)).toMatchSnapshot();
            // This document contains duplicate section names
            expect(getSection(cssFile, mockCssSection)).toMatchSnapshot();
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
