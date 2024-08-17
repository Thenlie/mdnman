import { getMDNFile, optimisticallyFindMDNFile } from '../file_handler.js';

// getMDNFile will throw errors for the invalid cases
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation((...args) => {
    const str = args.join(' ');
    if (
        str.startsWith('File does not exist:') ||
        str.startsWith('Path is a directory, not a file:') ||
        str.startsWith('No files found for query:')
    ) {
        return;
    }
    console.warn(...args);
});

describe('getMDNFile', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });
    it('returns MDN doc when provided valid parameters', () => {
        expect(getMDNFile('lib/javascript/global_objects/array/filter/index.md')).toMatchSnapshot();
        expect(getMDNFile('lib/html/element/div/index.md')).toMatchSnapshot();
        expect(getMDNFile('lib/css/border/index.md')).toMatchSnapshot();
    });
    it('returns null when provided invalid parameters', () => {
        expect(getMDNFile('lib/javascript/global_objects/array/filter')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledTimes(1);
        expect(mockConsoleError).toHaveBeenCalledWith(
            'Path is a directory, not a file:',
            expect.anything()
        );
        expect(getMDNFile('lib/global_attributes/div/index.md')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledTimes(2);
        expect(mockConsoleError).toHaveBeenCalledWith('File does not exist:', expect.anything());
        expect(getMDNFile('css/border/index.md')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledWith('File does not exist:', expect.anything());
        expect(mockConsoleError).toHaveBeenCalledTimes(3);
    });
});

describe('optimisticallyFindMDNFile', () => {
    beforeAll(() => {
        jest.clearAllMocks();
    });
    it('returns MDN doc when provided valid parameters', () => {
        expect(optimisticallyFindMDNFile('javascript', 'split')).toMatchSnapshot();
        expect(optimisticallyFindMDNFile('html', 'dir')).toMatchSnapshot();
        expect(optimisticallyFindMDNFile('css', 'font-family')).toMatchSnapshot();
    });
    it('returns null when provided invalid parameters', () => {
        expect(optimisticallyFindMDNFile('javascript', 'notfound')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledWith(
            'No files found for query:',
            expect.anything()
        );
        expect(mockConsoleError).toHaveBeenCalledTimes(1);
        expect(optimisticallyFindMDNFile('html', 'notfound')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledWith(
            'No files found for query:',
            expect.anything()
        );
        expect(mockConsoleError).toHaveBeenCalledTimes(2);
        expect(optimisticallyFindMDNFile('css', 'notfound')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledWith(
            'No files found for query:',
            expect.anything()
        );
        expect(mockConsoleError).toHaveBeenCalledTimes(3);
    });
});
