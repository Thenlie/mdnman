import { getPathFromTitle } from '../titles/utils';

const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(jest.fn());

describe('title utils', () => {
    afterAll(() => {
        consoleErrorMock.mockReset();
    });
    describe('getPathFromTitle', () => {
        it('returns a valid path when given a valid title', () => {
            expect(getPathFromTitle('Array.prototype.find()', 'javascript')).toBe(
                'lib/javascript/global_objects/array/find/index.md'
            );
            expect(getPathFromTitle('String.prototype.split()', 'javascript')).toBe(
                'lib/javascript/global_objects/string/split/index.md'
            );
            expect(getPathFromTitle('<div>: The Content Division element', 'html')).toBe(
                'lib/html/elements/div/index.md'
            );
            expect(getPathFromTitle('ARIA: aria-labelledby attribute', 'html')).toBe(
                'lib/html/attributes/aria-labelledby/index.md'
            );
            expect(getPathFromTitle('box-sizing', 'css')).toBe('lib/css/box-sizing/index.md');
            expect(getPathFromTitle('font-weight', 'css')).toBe(
                'lib/css/@font-face/font-weight/index.md'
            );
            expect(consoleErrorMock).not.toHaveBeenCalled();
        });
        it('returns null when given an invalid title', () => {
            expect(getPathFromTitle('asdf', 'javascript')).toBeNull();
            expect(getPathFromTitle('Array.map', 'javascript')).toBeNull();
            expect(consoleErrorMock).toHaveBeenCalledTimes(2);
            expect(getPathFromTitle('asdf', 'html')).toBeNull();
            expect(getPathFromTitle('div', 'html')).toBeNull();
            expect(consoleErrorMock).toHaveBeenCalledTimes(4);
            expect(getPathFromTitle('asdf', 'css')).toBeNull();
            expect(getPathFromTitle('font-color', 'css')).toBeNull();
            expect(consoleErrorMock).toHaveBeenCalledTimes(6);
        });
        it('returns null when given an invalid language', () => {
            // @ts-expect-error passing in an invalid language for testing
            expect(getPathFromTitle('Array.prototype.map()', 'asdf')).toBeNull();
            expect(consoleErrorMock).toHaveBeenCalledTimes(7);
        });
    });
});
