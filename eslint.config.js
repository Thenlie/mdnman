import globals from 'globals';
import pluginJs from '@eslint/js';
import tslint from 'typescript-eslint';


export default [
    {files: ['**/*.{js,mjs,cjs,ts}']},
    {languageOptions: { globals: globals.node }},
    pluginJs.configs.recommended,
    ...tslint.configs.recommended,
    {    
        'rules': {
            'indent': [
                'error',
                4,
                {
                    'SwitchCase': 1
                }
            ],
            'linebreak-style': [
                'error',
                'unix'
            ],
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'always'
            ],
            '@typescript-eslint/no-unused-vars': 'error',
        } 
    }
];