'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export function About() {
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
              04 / À propos
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title mt-4"
            >
              Curieux,{' '}
              <span
                style={{ fontFamily: 'var(--font-serif)' }}
                className="italic text-accent"
              >
                rigoureux
              </span>
              , et toujours partant.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-soft"
            >
              <p>
                Je suis étudiant en Master au Gaming Campus de Lyon, spécialisé
                dans le développement de jeux vidéo, le rendu 3D temps réel et
                les technologies immersives.
              </p>
              <p>
                Ce qui me motive ? Donner vie à des univers, résoudre des
                problèmes techniques exigeants, et explorer la frontière entre
                code et expérience. J'aime aussi bien plonger dans
                l'architecture d'un moteur que peaufiner le ressenti d'un
                gameplay.
              </p>
              <p>
                Aujourd'hui, je cherche une{' '}
                <span className="font-medium text-bright">
                  alternance d'un an à partir de septembre 2026
                </span>{' '}
                pour rejoindre une équipe et contribuer à des projets ambitieux
                — particulièrement en VR, simulation, ou jeu vidéo.
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
                Langues
              </div>
              <div className="mt-4 space-y-1.5">
                {profile.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="text-bright">{lang.name}</span>
                    <span className="text-muted">— {lang.level}</span>
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
              Stack technique
            </div>
            {Object.entries(profile.skills).map(([category, items]) => (
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
