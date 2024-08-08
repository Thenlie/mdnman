// Main
export type SupportedLanguages = 'javascript' | 'html' | 'css';
export function findDirectory(
    technology: SupportedLanguages,
    query: string
): Promise<string | null>;

// Parser
export { getHeader, getSection, stripHeader, stripJsxRef } from './parser';
export type { MDNHeader } from './parser';

// Output
export { openEditor, writeDocToFile, printDoc } from './output';
