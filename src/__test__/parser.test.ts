import {
    expandLinks,
    getHeader,
    getHtmlDescription,
    stripHeader,
    stripJsxRef,
    convertEmojiTags,
} from '../parser/index.js';
import fs from 'fs';
import mapHeader from '../__fixtures__/map.header.json';
import titleDescription from '../__fixtures__/title.description.json';
import spliceDescription from '../__fixtures__/splice.description.json';

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

    describe('expandLinks', () => {
        it('properly expands links to a valid MDN URL', () => {
            expect(expandLinks('[data tables](/en-US/docs/Web/HTML/Element/table)')).toBe(
                '[data tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)'
            );
            expect(expandLinks(spliceDescription.description)).toBe(
                // eslint-disable-next-line quotes
                "The `splice()` method is a [mutating method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It may change the content of `this`. If the specified number of elements to insert differs from the number of elements being removed, the array's `length` will be changed as well. At the same time, it uses [`[Symbol.species]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) to create a new array instance to be returned. If the deleted portion is [sparse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the array returned by `splice()` is sparse as well, with those corresponding indices being empty slots. The `splice()` method is [generic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable."
            );
        });
    });

    describe('convertEmojiTags', () => {
        it('properly converts warning and note tags to emojis', () => {
            expect(convertEmojiTags('[!WARNING]')).toBe('⚠️');
            expect(convertEmojiTags('[!NOTE]')).toBe('ℹ️');
            expect(convertEmojiTags('[!NOTES]')).toBe('[!NOTES]');
            expect(convertEmojiTags('[!WARN]')).toBe('[!WARN]');
        });
    });
});
