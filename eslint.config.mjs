import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrors: "none" }],
    },
  },
  {
    // Untyped JSON from Wikipedia, Wikidata and Commons APIs.
    files: ["scripts/**/*.ts", "src/lib/wikimedia.ts"],
    rules: { "@typescript-eslint/no-explicit-any": "off" },
  },
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "scripts/banner/**"],
  },
];

export default eslintConfig;
