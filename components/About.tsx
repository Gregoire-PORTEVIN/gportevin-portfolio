'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { profile } from '@/data/profile';
import { profileEn } from '@/data/profile.en';

export function About() {
  const { lang, t } = useLanguage();
  const p = lang === 'en' ? profileEn : profile;

  return (
    <section id="a-propos" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label"
            >
              {t('04 / À propos', '04 / About')}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title mt-4"
            >
              {t('Curieux,', 'Curious,')}{' '}
              <span
                style={{ fontFamily: 'var(--font-serif)' }}
                className="italic text-accent"
              >
                {t('rigoureux', 'rigorous')}
              </span>
              {t(', et toujours partant.', ', and always up for a challenge.')}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-soft"
            >
              <p>
                {t(
                  "Je suis étudiant en Master au Gaming Campus de Lyon, spécialisé dans le développement de jeux vidéo, le rendu 3D temps réel et les technologies immersives.",
                  "I'm a Master's student at Gaming Campus (Lyon), specializing in video game development, real-time 3D rendering and immersive technologies."
                )}
              </p>
              <p>
                {t(
                  "Ce qui me motive ? Donner vie à des univers, résoudre des problèmes techniques exigeants, et explorer la frontière entre code et expérience. J'aime aussi bien plonger dans l'architecture d'un moteur que peaufiner le ressenti d'un gameplay.",
                  "What drives me? Bringing worlds to life, solving challenging technical problems, and exploring the boundary between code and experience. I enjoy diving into engine architecture just as much as polishing gameplay feel."
                )}
              </p>
              <p>
                {t("Aujourd'hui, je cherche une", "I'm currently looking for a")}{' '}
                <span className="font-medium text-bright">
                  {t(
                    "alternance d'un an à partir de septembre 2026",
                    '1-year apprenticeship starting September 2026'
                  )}
                </span>{' '}
                {t(
                  "pour rejoindre une équipe et contribuer à des projets ambitieux — particulièrement en VR, simulation, ou jeu vidéo.",
                  'to join a team and contribute to ambitious projects — particularly in VR, simulation, or game development.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 border-t border-line pt-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {t('Langues', 'Languages')}
              </div>
              <div className="mt-4 space-y-1.5">
                {p.languages.map((l) => (
                  <div
                    key={l.name}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="text-bright">{l.name}</span>
                    <span className="text-muted">— {l.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-1"
          >
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              {t('Stack technique', 'Tech stack')}
            </div>
            {Object.entries(p.skills).map(([category, items]) => (
              <div
                key={category}
                className="group grid grid-cols-[1fr_2fr] gap-6 border-b border-line py-5 transition-colors hover:border-accent/30"
              >
                <div className="font-mono text-xs uppercase tracking-wider text-soft transition-colors group-hover:text-accent">
                  {category}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-bright">
                  {items.map((item, idx) => (
                    <span key={item}>
                      {item}
                      {idx < items.length - 1 && (
                        <span className="ml-3 text-muted">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
