import { defineConfig } from "i18next-cli";

const secondaryLanguages = [
  "es",
  "pt-BR",
  "fr",
  "de",
  "ja",
  "ko",
  "it",
  "nl",
  "pl",
  "ru",
  "zh-CN",
  "zh-TW",
  "ar",
  "tr",
  "sv",
  "uk",
] as const;

export default defineConfig({
  locales: ["en", ...secondaryLanguages],
  extract: {
    input: [
      "../../apps/app/src/renderer/src/**/*.{ts,tsx}",
      "../../apps/mobile/src/**/*.{ts,tsx}",
    ],
    ignore: ["**/node_modules/**", "**/dist/**", "**/privacy.tsx"],
    output: "src/locales/{{language}}/{{namespace}}.json",
    defaultNS: "common",
    keySeparator: ".",
    pluralSeparator: "_",
    primaryLanguage: "en",
    secondaryLanguages: [...secondaryLanguages],
    removeUnusedKeys: false,
    preservePatterns: [
      "duration.*",
      "status.*",
      "pages.*",
      "categories.*",
      "nav.*",
      "expressions.*",
      "themeCreator.*",
      "profile.blocks.*",
      "dob.months.*",
      "roles.permissions.*",
      "channels.permissions.*",
    ],
    sort: true,
    indentation: 2,
    defaultValue: (_key, _namespace, language, value) =>
      language === "en" ? (value ?? "") : "",
    functions: ["t", "*.t"],
    useTranslationNames: ["useTranslation"],
    transComponents: ["Trans"],
  },
  lint: {
    // Legal policy copy is maintained separately from product UI catalogs.
    ignore: ["**/privacy.tsx"],
  },
  types: {
    input: ["src/locales/en/*.json"],
    output: "src/types/i18next.d.ts",
    resourcesFile: "src/types/resources.d.ts",
    enableSelector: true,
  },
});
