type MDNHeader = {
    title?: string,
    slug?: string,
    'page-type'?: string,
    'browser-compat'?: string
}
declare function isHeaderField(document: string): boolean;
declare function getHeader(document: string): MDNHeader | null;
declare function getSection(prefix: string, document: string): string;
declare function stripHeader(document: string): string;
declare function stripJsxRef(document: string): string;
