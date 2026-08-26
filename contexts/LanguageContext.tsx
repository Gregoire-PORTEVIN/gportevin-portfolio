'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: (fr) => fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Détecte la langue du navigateur au premier chargement
  const [lang, setLangState] = useState<Language>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language | null;
    if (saved === 'en' || saved === 'fr') {
      setLangState(saved);
      return;
    }
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    setLangState(browserLang);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const t = (fr: string, en: string) => lang === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
