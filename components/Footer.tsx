'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { profile } from '@/data/profile';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-surface/30">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Contact
            </div>
            <div className="mt-3 space-y-1.5 text-sm">
              <a
                href={`mailto:${profile.contact.email}`}
                className="link-underline block text-bright hover:text-accent"
              >
                {profile.contact.email}
              </a>
              <a
                href={`tel:${profile.contact.phone.replace(/\s/g, '')}`}
                className="block text-soft hover:text-bright"
              >
                {profile.contact.phone}
              </a>
              <div className="text-soft">{profile.location}</div>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {t('Liens', 'Links')}
            </div>
            <div className="mt-3 space-y-1.5 text-sm">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline block text-bright hover:text-accent"
              >
                LinkedIn ↗
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline block text-bright hover:text-accent"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {t('Statut', 'Status')}
            </div>
            <div className="mt-3 flex items-center gap-2.5 text-sm text-bright">
              <span className="status-dot" />
              <span>
                {t(
                  "En recherche d'alternance — Septembre 2026",
                  'Open to apprenticeship — September 2026'
                )}
              </span>
            </div>
            <div className="mt-2 text-xs text-soft">
              {t(
                "N'hésitez pas à me contacter, je réponds rapidement.",
                'Feel free to reach out, I reply quickly.'
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}.{' '}
            {t('Tous droits réservés.', 'All rights reserved.')}
          </div>
          <div className="font-mono">
            {t('Conçu et développé avec Next.js', 'Designed & built with Next.js')}
          </div>
        </div>
      </div>
    </footer>
  );
}
