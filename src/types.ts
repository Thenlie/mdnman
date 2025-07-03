export type SupportedLanguages = 'javascript' | 'html' | 'css';

export type MDNSection = {
    name: string;
    level: number;
    position: number;
};

export type MDNHeader = {
    title: string;
    slug: string;
    'page-type'?: string;
    'browser-compat'?: string;
};
