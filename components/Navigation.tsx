'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('Projets', 'Projects'),    href: '/#projets' },
    { label: t('Parcours', 'Experience'), href: '/#parcours' },
    { label: t('À propos', 'About'),      href: '/#a-propos' },
    { label: t('Contact', 'Contact'),     href: '/#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight transition-colors hover:text-accent"
        >
          {profile.firstName[0]}
          {profile.lastName[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-soft transition-colors hover:text-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <span className="flex items-center gap-2 font-mono text-xs text-soft">
            <span className="status-dot" />
            {t('Dispo Sept. 2026', 'Avail. Sept. 2026')}
          </span>
        </div>

        {/* Mobile : switcher + lien projets */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <Link
            href="/#projets"
            className="font-mono text-xs text-accent"
          >
            {t('Projets →', 'Projects →')}
          </Link>
        </div>
      </div>
    </header>
  );
}