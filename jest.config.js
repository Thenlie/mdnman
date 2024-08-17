/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                diagnostics: {
                    ignoreCodes: [1343],
                },
                astTransformers: {
                    before: [
                        {
                            path: 'ts-jest-mock-import-meta',
                            options: { metaObjectReplacement: { dirname: './__tests__/' } },
                        },
                    ],
                },
            },
        ],
    },
    moduleNameMapper: {
        '(.+)\\.js': '$1',
    },
};
