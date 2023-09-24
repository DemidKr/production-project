module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        '@typescript-eslint/indent': [2,4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        'react/no-deprecated': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/naming-convention': [
            "error",
            {
                "selector": "default",
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ]
            },
            // TODO: create custom filter for globals (__EXAMPLE__)
            {
                selector: 'variable',
                format: null,
                filter: {
                    regex: '^(__IS_DEV__|name_two|name_three)$',
                    match: true,
                }
            },
            {
                selector: 'property',
                format: null,
                filter: {
                    regex: '^(__IS_DEV__|name_two|name_three)$',
                    match: true,
                }
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
    },
}
