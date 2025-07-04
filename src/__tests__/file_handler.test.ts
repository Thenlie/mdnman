import { getMDNFile, optimisticallyFindMDNFile } from '../file_handler.js';

// getMDNFile will throw errors for the invalid cases
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation((...args) => {
    const str = args.join(' ');
    if (
        str.startsWith('[getMDNFile] Error: File') ||
        str.startsWith('[getMDNFile] Error: Path') ||
        str.startsWith('[optimisticallyFindMDNFile] Error: No files found for query')
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
        expect(getMDNFile('lib/html/elements/div/index.md')).toMatchSnapshot();
        expect(getMDNFile('lib/css/border/index.md')).toMatchSnapshot();
    });
    it('appends `index.md` when provided a directory', () => {
        expect(getMDNFile('lib/javascript/global_objects/array/map')).toMatchSnapshot();
        expect(getMDNFile('lib/html/elements/a')).toMatchSnapshot();
        expect(getMDNFile('lib/css/color')).toMatchSnapshot();
    });
    it('returns null when provided invalid parameters', () => {
        expect(getMDNFile('lib')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledTimes(1);
        expect(mockConsoleError).toHaveBeenCalledWith(
            '[getMDNFile] Error: Path "lib" is a directory, not a file!'
        );
        expect(getMDNFile('lib/global_attributes/div/index.md')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledTimes(2);
        expect(mockConsoleError).toHaveBeenCalledWith(
            '[getMDNFile] Error: File "lib/global_attributes/div/index.md" does not exist!'
        );
        expect(getMDNFile('css/border/index.md')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledWith(
            '[getMDNFile] Error: File "css/border/index.md" does not exist!'
        );
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
            '[optimisticallyFindMDNFile] Error: No files found for query "notfound"!'
        );
        expect(mockConsoleError).toHaveBeenCalledTimes(1);
        expect(optimisticallyFindMDNFile('html', 'notfound')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledWith(
            '[optimisticallyFindMDNFile] Error: No files found for query "notfound"!'
        );
        expect(mockConsoleError).toHaveBeenCalledTimes(2);
        expect(optimisticallyFindMDNFile('css', 'notfound')).toBeNull();
        expect(mockConsoleError).toHaveBeenCalledWith(
            '[optimisticallyFindMDNFile] Error: No files found for query "notfound"!'
        );
        expect(mockConsoleError).toHaveBeenCalledTimes(3);
    });
});
