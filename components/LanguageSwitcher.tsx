'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-line rounded-sm overflow-hidden">
      <button
        onClick={() => setLang('fr')}
        className={`px-2 py-1 font-mono text-xs transition-colors flex items-center gap-1.5 ${
          lang === 'fr'
            ? 'bg-accent text-ink font-medium'
            : 'text-muted hover:text-bright'
        }`}
        aria-label="Français"
      >
        🇫🇷
        <span className="hidden sm:inline">FR</span>
      </button>
      <div className="w-px h-4 bg-line" />
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 font-mono text-xs transition-colors flex items-center gap-1.5 ${
          lang === 'en'
            ? 'bg-accent text-ink font-medium'
            : 'text-muted hover:text-bright'
        }`}
        aria-label="English"
      >
        🇬🇧
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}
