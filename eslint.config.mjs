import pluginJs from "@eslint/js";
import globals from "globals";
import dirs from "eslint-plugin-dirs";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'public/**',
      '*.min.js',
    ],

    plugins: {
      "dirs": dirs,
      "react": pluginReact,
      "simple-import-sort":simpleImportSort,
      "sort-keys-fix": sortKeysFix,
      "unused-imports": unusedImports,
    },

    rules: {
      
      // eslint
      "arrow-body-style": ["error", "as-needed"],
      
      "dirs/dirnames": [
        2,
        {
          "pattern": '^[a-zA-Z0-9_-]+$'
        }
      ],
      "import/no-unresolved": "off",
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1
        }
      ],
      "no-console": "warn",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1
        }
      ],
      "no-unused-vars": "off",
      "padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "next": "return",
          "prev": "*",
        },
        {
          "blankLine": "always",
          "next": "*",
          "prev": ["const", "let"],
        },
        {
          "blankLine": "any",
          "next": ["const", "let"],
          "prev": ["const", "let"],
        }
      ],
      
      // react
      "react/display-name": "off",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": ["error", "never"],
      // "react/jsx-filename-extension": [
      //   1,
      //   {
      //     "extensions": [".js", ".jsx"]
      //   }
      // ],
      "react/jsx-sort-props": [
        "error",
        {
          "callbacksLast": true,
          "ignoreCase": true,
          "multiline": "last",
          "reservedFirst": true,
          "shorthandFirst": true,
        }
      ],
      "react/react-in-jsx-scope": "off",
      // "quotes": ["error", "single"],
      "semi": ["error", "always"],
      // simple-import-sort
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          "groups": [
            ["^(react)(\\/.*|$)", "^(react-dom)(\\/.*|$)"],
            ["^@?\\w"],
            [
              "^(src/pages)(\\/.*|$)",
              "^(src/layouts)(\\/.*|$)",
              "^(src/containers)(\\/.*|$)",
              "^(src/components)(\\/.*|$)",
              "^(src/ui)(\\/.*|$)"
            ],
            [
              "^(src/api)(\\/.*|$)",
              "^(src/hooks)(\\/.*|$)",
              "^(src/store)(\\/.*|$)",
              "^(src/helpers)(\\/.*|$)",
              "^(src/types)(\\/.*|$)",
              "^(src/constants)(\\/.*|$)"
            ],
            ["^\\."],
            ["(jpe?g|png|webp|svg|avif)$"],
            ["(css)$"]
          ]
        }
      ],
      // sort-keys-fix
      "sort-keys-fix/sort-keys-fix": "error",
      // unused-imports
      "unused-imports/no-unused-imports": "error",
    }
  }
];
