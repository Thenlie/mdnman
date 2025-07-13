import {
    expandLinks,
    getHeader,
    getHtmlDescription,
    stripHeader,
    transformKumascript,
    convertEmojiTags,
    truncateString,
    removeEmptyLines,
    transformCodeblockLangs,
} from '../parser/index.js';
import { getNamedSection, removeEmptySections } from '../parser/sections.js';
import fs from 'fs';
import mapHeader from './__fixtures__/map.header.json';
import spliceDescription from './__fixtures__/splice.description.json';
import mapDocument from './__fixtures__/map.document.json';

const JS_FILE_PATH = './lib/javascript/global_objects/array/map/index.md';
const JS_STR_SUBSTR_PATH = './lib/javascript/global_objects/string/substring/index.md';
const HTML_FILE_PATH = './lib/html/global_attributes/title/index.md';
let jsFile: string;
let substrFile: string;
let htmlFile: string;

const failingStr = `
## Description

\`undefined\` is a property of the _global object_. That is, it is a variable in global scope.

In all non-legacy browsers, \`undefined\` is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

A variable that has not been assigned a value is of type \`undefined\`. A
method or statement also returns \`undefined\` if the variable that is being
evaluated does not have an assigned value. A function returns \`undefined\` if
a value was not .

> ℹ️
> While you can use \`undefined\` as an  (variable name) in any scope other than the global scope (because \`undefined\` is not a [reserved word](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)), doing so is a very bad idea that will make your code difficult to maintain and debug.
>
> \`\`\`js example-bad
> // DON'T DO THIS
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined); // foo string
> })();
>
> ((undefined) => {
>   console.log(undefined, typeof undefined); // foo string
> })("foo");
> \`\`\`
`;

describe('parser', () => {
    beforeAll(() => {
        try {
            jsFile = fs.readFileSync(JS_FILE_PATH).toString();
            htmlFile = fs.readFileSync(HTML_FILE_PATH).toString();
            substrFile = fs.readFileSync(JS_STR_SUBSTR_PATH).toString();
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

    describe('transformKumascript', () => {
        it('removes text wrapped in double curly braces `{{ }}`', () => {
            expect(transformKumascript('Hello{{ hello }}')).toBe('Hello');
            expect(transformKumascript('{{ hello }}')).toBe('');
        });

        describe('cssxref & CSSxRef', () => {
            it('wraps cssxref text in backticks', () => {
                expect(transformKumascript('- {{cssxref("div")}} other text')).toBe(
                    '- `div` other text'
                );
                expect(transformKumascript('- {{cssxref("div")}}')).toBe('- `div`');
                // eslint-disable-next-line quotes
                expect(transformKumascript("- {{cssxref('div')}}")).toBe('- `div`');
                expect(transformKumascript('- {{ cssxref("div") }}')).toBe('- `div`');
                expect(transformKumascript('- {{cssxref("div")}}.')).toBe('- `div`.');
            });
            it('displays second string when two strings are provided', () => {
                expect(transformKumascript('- {{cssxref("var", "var()")}}')).toBe('- `var()`');
                expect(transformKumascript('- {{cssxref("var", "var(...)")}}')).toBe(
                    '- `var(...)`'
                );
            });
            it('provides valid links when addLinks is true', () => {
                expect(transformKumascript('- {{cssxref("div")}} other text', true)).toBe(
                    '- [`div`](https://developer.mozilla.org/en-US/docs/Web/CSS/div) other text'
                );
                expect(transformKumascript('- {{cssxref("var", "var()")}}', true)).toBe(
                    '- [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/var)'
                );
                expect(transformKumascript('- {{CSSxRef("div")}}.', true)).toBe(
                    '- [`div`](https://developer.mozilla.org/en-US/docs/Web/CSS/div).'
                );
            });
            it('handles HTML entities', () => {
                expect(transformKumascript('- {{cssxref("&lt;blend-mode&gt;")}}')).toBe(
                    '- `<blend-mode>`'
                );
                expect(transformKumascript('- {{cssxref("&lt;blend-mode&gt;")}}', true)).toBe(
                    '- [`<blend-mode>`](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode)'
                );
            });
        });

        describe('htmlelement & HTMLElement', () => {
            it('puts HTMLElement references in angle brackets', () => {
                expect(transformKumascript('A test {{HTMLElement("input")}} string')).toBe(
                    'A test `<input>` string'
                );
                expect(transformKumascript('A test {{htmlelement("div")}} string')).toBe(
                    'A test `<div>` string'
                );
            });
            it('displays second string when two strings are provided', () => {
                expect(transformKumascript('{{htmlelement("input/button","button")}}')).toBe(
                    '`<button>`'
                );
                expect(transformKumascript('{{HTMLElement("input/radio","radio")}}')).toBe(
                    '`<radio>`'
                );
            });
            it('provides valid links when addLinks is true', () => {
                expect(transformKumascript('- {{htmlelement("div")}} other text', true)).toBe(
                    '- [`<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) other text'
                );
                expect(transformKumascript('- {{HTMLElement("input/radio", "radio")}}', true)).toBe(
                    '- [`<radio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio)'
                );
                expect(
                    transformKumascript('- {{htmlelement("input/button", "button")}}.', true)
                ).toBe(
                    '- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/button).'
                );
            });
        });

        describe('domxref & DOMxRef', () => {
            it('puts domxref references in back ticks', () => {
                expect(transformKumascript('- {{domxref("Animation.startTime")}}.')).toBe(
                    '- `Animation.startTime`.'
                );
                expect(transformKumascript('- {{DOMxRef("Animation.startTime")}}')).toBe(
                    '- `Animation.startTime`'
                );
            });
            it('displays second string when two strings are provided', () => {
                expect(transformKumascript('- {{domxref("var", "var()")}}')).toBe('- `var()`');
                expect(transformKumascript('- {{DOMxRef("var", "var(...)")}}')).toBe(
                    '- `var(...)`'
                );
            });
            it('provides valid links when addLinks is true', () => {
                expect(transformKumascript('- {{domxref("Animation.startTime")}}.', true)).toBe(
                    '- [`Animation.startTime`](https://developer.mozilla.org/en-US/docs/Web/API/Animation/startTime).'
                );
                expect(transformKumascript('- {{domxref("var", "var(...)")}}.', true)).toBe(
                    '- [`var(...)`](https://developer.mozilla.org/en-US/docs/Web/API/var).'
                );
            });
        });

        describe('jsxref', () => {
            it('wraps jsxref text in backticks', () => {
                expect(transformKumascript('- {{jsxref("div")}} other text')).toBe(
                    '- `div` other text'
                );
                expect(transformKumascript('- {{jsxref("div")}}')).toBe('- `div`');
                // eslint-disable-next-line quotes
                expect(transformKumascript("- {{jsxref('div')}}")).toBe('- `div`');
                expect(transformKumascript('- {{jsxref("div")}}.')).toBe('- `div`.');
            });
            it('displays second string when two strings are provided', () => {
                expect(transformKumascript('- {{jsxref("var", "var()")}}')).toBe('- `var()`');
                expect(transformKumascript('- {{jsxref("var", "var(...)")}}')).toBe('- `var(...)`');
            });
            it('provides valid links when addLinks is true', () => {
                expect(transformKumascript('- {{jsxref("String.prototype.trimEnd")}}', true)).toBe(
                    '- [`String.prototype.trimEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/String/trimEnd)'
                );
                expect(transformKumascript('- {{jsxref("Classes/static", "static")}}', true)).toBe(
                    '- [`static`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)'
                );
                expect(transformKumascript('- {{jsxref("Array.from()")}}', true)).toBe(
                    '- [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)'
                );
            });
        });

        describe('Glossary', () => {
            it('provides valid links when addLinks is true', () => {
                expect(
                    transformKumascript('- {{Glossary("grid column", "grid columns")}}', true)
                ).toBe(
                    '- [`grid columns`](https://developer.mozilla.org/en-US/docs/Glossary/grid_column)'
                );
            });
        });
        describe('Deprecated Header', () => {
            it('provides a shortened deprecated header message', () => {
                expect(transformKumascript('{{Deprecated_Header}}')).toBe(
                    'Deprecated: This feature is no longer recommended'
                );
            });
        });
    });

    describe('getHtmlDescription', () => {
        it('returns all text in the document up until the first `#`', () => {
            const strippedFile = stripHeader(htmlFile, false);
            const description = getHtmlDescription(strippedFile);
            expect(description.trim()).toMatchSnapshot();
        });
    });

    describe('expandLinks', () => {
        it('expands truncated MDN links to valid MDN URL', () => {
            expect(expandLinks('[data tables](/en-US/docs/Web/HTML/Element/table)', '')).toBe(
                '[data tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)'
            );
            expect(expandLinks(spliceDescription.description, '')).toBe(
                // eslint-disable-next-line quotes
                "The `splice()` method is a [mutating method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It may change the content of `this`. If the specified number of elements to insert differs from the number of elements being removed, the array's `length` will be changed as well. At the same time, it uses [`[Symbol.species]`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) to create a new array instance to be returned. If the deleted portion is [sparse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the array returned by `splice()` is sparse as well, with those corresponding indices being empty slots. The `splice()` method is [generic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable."
            );
        });
        it('expands image links', () => {
            expect(
                expandLinks('![test image](border-image-slice.png)', 'Web/CSS/border-image-slice')
            ).toBe(
                '![test image](https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice/border-image-slice.png)'
            );
            expect(
                expandLinks(
                    '![A browser with developer tools open to the debugger panel showing how execution is paused at the debugger statement to allow close inspection of variables, scopes, events, etc.](screen_shot_2014-02-07_at_9.14.35_am.png)',
                    'Web/JavaScript/Reference/Statements/debugger'
                )
            ).toBe(
                '![A browser with developer tools open to the debugger panel showing how execution is paused at the debugger statement to allow close inspection of variables, scopes, events, etc.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger/screen_shot_2014-02-07_at_9.14.35_am.png)'
            );
        });
        it('transforms section tags', () => {
            expect(
                expandLinks('[year numbers](#year_numbers)', 'Web/HTML/Date_and_time_formats')
            ).toBe(
                '[year numbers](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats/#year_numbers)'
            );
        });
        it('handles complete links', () => {
            expect(expandLinks('[test](https://www.google.com)', '')).toBe(
                '[test](https://www.google.com)'
            );
            expect(
                expandLinks(
                    '[Paint Program (by Rick Byers)](https://rbyers.github.io/paint.html)',
                    ''
                )
            ).toBe('[Paint Program (by Rick Byers)](https://rbyers.github.io/paint.html)');
        });
        it('handles URLs wrapped in <>', () => {
            expect(expandLinks('[test](https://www.wikipedia.org)', '')).toBe(
                '[test](https://www.wikipedia.org)'
            );
            expect(expandLinks('[test](<https://www.wikipedia.org>)', '')).toBe(
                '[test](<https://www.wikipedia.org>)'
            );
            expect(
                expandLinks('[test](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>)', '')
            ).toBe('[test](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>)');
            expect(
                expandLinks(
                    '[`[[DefineOwnProperty]]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)',
                    ''
                )
            ).toBe(
                '[`[[DefineOwnProperty]]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)'
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

    describe('truncateString', () => {
        it('cuts a string down to the provided length and corrects missing codeblock backticks if needed', () => {
            const section = getNamedSection(substrFile, 'Examples');
            const truncatedStr = truncateString(section, 1024);
            expect(truncatedStr).toHaveLength(1024);
            expect(truncatedStr).toMatchSnapshot();
            expect(truncateString(failingStr, 1024)).toMatchSnapshot();
        });
    });

    describe('removeEmptyLines', () => {
        it('removes duplicate newlines from a document', () => {
            const trimmedDoc = removeEmptySections(transformKumascript(mapDocument.document) || '');
            expect(removeEmptyLines(trimmedDoc)).toMatchSnapshot();
        });
    });

    describe('transformCodeblockLangs', () => {
        it('properly replaces codeblock languages with valid ones', () => {
            expect(transformCodeblockLangs('```js')).toBe('```js');
            expect(transformCodeblockLangs('```js-nolint')).toBe('```js');
            expect(transformCodeblockLangs('```js example-good')).toBe('```js');
            expect(transformCodeblockLangs('```js example-bad')).toBe('```js');
            expect(transformCodeblockLangs('```css')).toBe('```css');
            expect(transformCodeblockLangs('```css-nolint')).toBe('```css');
            expect(transformCodeblockLangs('```css example-good')).toBe('```css');
            expect(transformCodeblockLangs('```css example-bad')).toBe('```css');
            expect(transformCodeblockLangs('```html')).toBe('```html');
            expect(transformCodeblockLangs('```html-nolint')).toBe('```html');
            expect(transformCodeblockLangs('```html example-good')).toBe('```html');
            expect(transformCodeblockLangs('```html example-bad')).toBe('```html');
            expect(transformCodeblockLangs('```plain')).toBe('```txt');
            expect(transformCodeblockLangs('```plain-nolint')).toBe('```txt');
            expect(transformCodeblockLangs('```plain example-good')).toBe('```txt');
            expect(transformCodeblockLangs('```plain example-bad')).toBe('```txt');
        });
        it('does not remove hidden text from codeblock', () => {
            expect(transformCodeblockLangs('```js hidden')).toBe('```js hidden');
            expect(transformCodeblockLangs('```js-nolint hidden')).toBe('```js hidden');
            expect(transformCodeblockLangs('```css hidden')).toBe('```css hidden');
            expect(transformCodeblockLangs('```css-nolint hidden')).toBe('```css hidden');
            expect(transformCodeblockLangs('```html hidden')).toBe('```html hidden');
            expect(transformCodeblockLangs('```html-nolint hidden')).toBe('```html hidden');
            expect(transformCodeblockLangs('```plain hidden')).toBe('```txt hidden');
            expect(transformCodeblockLangs('```plain-nolint hidden')).toBe('```txt hidden');
            expect(
                transformCodeblockLangs(
                    '```css hidden live-sample___shapes1 live-sample___shapes2 live-sample___shapes3'
                )
            ).toBe('```css hidden');
        });
    });
});
