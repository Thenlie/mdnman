import { getHeader } from '../parser/index.js';
import fs from 'fs';
import mapHeader from '../__fixtures__/map.header.json';

const JS_FILE_PATH = './lib/javascript/global_objects/array/map/index.md';
let jsFile: string;

describe('parser', () => {
    beforeAll(() => {
        try {
            jsFile = fs.readFileSync(JS_FILE_PATH).toString();
        } catch (error) {
            throw new Error('Error reading file: ' + error);
        }
    });
    describe('getHeader', () => {
        it('passes', () => {
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
        it('passes', () => {
            expect(1 + 1).toBe(2);
        });
    });

    describe('getHtmlDescription', () => {
        it('passes', () => {
            expect(1 + 1).toBe(2);
        });
    });
});
