// @ts-check

import eslint from "@eslint/js";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig(
  js.configs.recommended,
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,

      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-definitions": "off",
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
  globalIgnores(["dist/**/*"]),
);
