// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    base: '/mdnman/',
    output: 'static',
    trailingSlash: 'always',
    integrations: [
        starlight({
            title: 'mdn man _',
            customCss: ['@fontsource/arvo/400.css', './src/styles/custom.css'],
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/thenlie/mdnman' },
            ],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Getting Started', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});
