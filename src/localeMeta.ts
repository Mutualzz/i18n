import type { AppLocale } from "./resources";

/** Native display names — not translated. */
export const localeNativeNames: Record<AppLocale, string> = {
  en: "English",
  es: "Español",
  "pt-BR": "Português (Brasil)",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  ru: "Русский",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  ar: "العربية",
  tr: "Türkçe",
  sv: "Svenska",
  uk: "Українська",
};

/** dayjs locale module ids for each app locale. */
export const dayjsLocaleIds: Record<AppLocale, string> = {
  en: "en",
  es: "es",
  "pt-BR": "pt-br",
  fr: "fr",
  de: "de",
  ja: "ja",
  ko: "ko",
  it: "it",
  nl: "nl",
  pl: "pl",
  ru: "ru",
  "zh-CN": "zh-cn",
  "zh-TW": "zh-tw",
  ar: "ar",
  tr: "tr",
  sv: "sv",
  uk: "uk",
};

export const LOCALE_STORAGE_KEY = "mutualzz.locale";
