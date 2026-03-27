"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "./translations/en";
import { uk } from "./translations/uk";
import { es } from "./translations/es";
import { de } from "./translations/de";
import { fr } from "./translations/fr";

export type Locale = "en" | "uk" | "es" | "de" | "fr";

export type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, uk, es, de, fr };

export const localeNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
};

const langMap: Record<string, Locale> = {
  en: "en", uk: "uk", es: "es", de: "de", fr: "fr",
  "en-US": "en", "en-GB": "en", "en-AU": "en",
  "uk-UA": "uk", "es-ES": "es", "es-MX": "es",
  "de-DE": "de", "de-AT": "de", "de-CH": "de",
  "fr-FR": "fr", "fr-CA": "fr", "fr-BE": "fr",
};

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem("citadel-locale") as Locale | null;
  if (saved && translations[saved]) return saved;

  const browserLang = navigator.language;
  if (langMap[browserLang]) return langMap[browserLang];

  const prefix = browserLang.split("-")[0];
  if (langMap[prefix]) return langMap[prefix];

  return "en";
}

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: en,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("citadel-locale", newLocale);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
