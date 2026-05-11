'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

const navItems = [
  { label: 'Projets', href: '/#projets' },
  { label: 'Parcours', href: '/#parcours' },
  { label: 'À propos', href: '/#a-propos' },
  { label: 'Contact', href: '/#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

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
          <span className="flex items-center gap-2 font-mono text-xs text-soft">
            <span className="status-dot" />
            Dispo Sept. 2026
          </span>
        </div>

        {/* Mobile : juste le statut + lien projets */}
        <Link
          href="/#projets"
          className="font-mono text-xs text-accent md:hidden"
        >
          Projets →
        </Link>
      </div>
    </header>
  );
}
