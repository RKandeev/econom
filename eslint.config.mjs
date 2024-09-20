import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import dirs from "eslint-plugin-dirs";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import simpleImportSort from "eslint-plugin-simple-import-sort"


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react": pluginReact,
      "unused-imports": unusedImports,
      "dirs": dirs,
      "sort-keys-fix": sortKeysFix,
      "simple-import-sort":simpleImportSort
    },

    rules: {
      // react
      "react/react-in-jsx-scope": "off",
      "react/jsx-sort-props": [
        "error",
        {
          "callbacksLast": true,
          "ignoreCase": true,
          "shorthandFirst": true,
          "reservedFirst": true,
          "multiline": "last"
        }
      ],
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/display-name": "off",
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [".tsx", ".jsx"]
        }
      ],
      // eslint
      "padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "prev": "*",
          "next": "return"
        },
        {
          "blankLine": "always",
          "prev": ["const", "let"],
          "next": "*"
        },
        {
          "blankLine": "any",
          "prev": ["const", "let"],
          "next": ["const", "let"]
        }
      ],
      "arrow-body-style": ["error", "as-needed"],
      "no-unused-vars": "off",
      "no-console": "warn",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1
        }
      ],
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1
        }
      ],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      // import
      "import/no-unresolved": "off",
      // sort-keys-fix
      "sort-keys-fix/sort-keys-fix": "error",
      // unused-imports
      "unused-imports/no-unused-imports": "error",
      // dirs
      "dirs/dirnames": [
        2,
        {
          "pattern": "^[a-z-]+$"
        }
      ],

      // simple-import-sort
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
      "simple-import-sort/exports": "error"
    },

    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'public/**',
      '*.min.js',
    ],
  }
];
