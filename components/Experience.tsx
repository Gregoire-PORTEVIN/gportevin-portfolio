'use client';

import { motion } from 'framer-motion';

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location: string;
  type: 'experience' | 'education';
  description?: string;
  stack?: string[];
};

// ============================================================
// PARCOURS — modifie ici pour ajouter / mettre à jour
// ============================================================
const items: ExperienceItem[] = [
  {
    period: 'Févr. 2026 — En cours',
    role: 'Développeur Moteur — Modélisation & Portabilité',
    org: 'INRAE',
    location: 'Toulouse',
    type: 'experience',
    description:
      "Développement d'un plugin Unreal Engine pour la portabilité d'un moteur de simulation. Modélisation de couches cellulaires via scripts Python et Blender.",
    stack: ['C++', 'Unreal Engine', 'Python', 'Blender'],
  },
  {
    period: '2025 — 2027',
    role: 'Master Développeur Jeu Vidéo, rendu 3D temps réel & technologies immersives',
    org: 'Master GTech — Gaming Campus',
    location: 'Lyon',
    type: 'education',
  },
  {
    period: 'Juin — Juil. 2025',
    role: 'Développeur Gameplay — Unity3D & Moteur custom',
    org: 'Gaming Campus',
    location: 'Lyon',
    type: 'experience',
    description:
      "Prototypage de mécaniques de jeu sous Unity3D puis portage vers le moteur custom en C++. Collaboration inter-pôles QA et Moteur.",
    stack: ['Unity', 'C#', 'C++'],
  },
  {
    period: 'Mai — Juil. 2024',
    role: 'Développeur Web — React / Next.js / Redux',
    org: 'Pignat / 3DVerse',
    location: 'Lyon',
    type: 'experience',
    description:
      "Développement d'une interface web Next.js permettant l'utilisation à distance de machines de TP (simulation et contrôle).",
    stack: ['Next.js', 'React', 'Redux', 'TailwindCSS'],
  },
  {
    period: '2022 — 2025',
    role: 'Bachelor Développeur Informatique — Option Jeu Vidéo',
    org: 'Gaming Campus',
    location: 'Lyon',
    type: 'education',
    description: '+ 40 projets réalisés en équipe sur 3 ans.',
  },
  {
    period: '2021',
    role: 'Baccalauréat Général — Mathématiques / Physique-Chimie',
    org: 'Lycée Honoré Romane',
    location: 'Embrun',
    type: 'education',
    description: 'Mention Assez Bien.',
  },
];

export function Experience() {
  return (
    <section id="parcours" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            03 / Parcours
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title mt-4"
          >
            Mon{' '}
            <span
              style={{ fontFamily: 'var(--font-serif)' }}
              className="italic text-accent"
            >
              parcours
            </span>
            , étape par étape.
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-line md:block md:left-[180px]" />

          <div className="space-y-12">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative grid gap-4 md:grid-cols-[180px_1fr] md:gap-12"
              >
                {/* Date */}
                <div className="relative">
                  <div className="font-mono text-xs text-muted">
                    {item.period}
                  </div>
                </div>

                {/* Point sur la timeline (desktop) */}
                <div className="absolute left-[174px] top-1 hidden h-3 w-3 rounded-full border-2 border-ink bg-accent md:block" />

                {/* Contenu */}
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                        item.type === 'experience'
                          ? 'text-accent'
                          : 'text-muted'
                      }`}
                    >
                      {item.type === 'experience' ? '→ Expérience' : '◇ Formation'}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium leading-snug text-bright">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-sm text-soft">
                    {item.org}{' '}
                    <span className="text-muted">— {item.location}</span>
                  </div>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  )}
                  {item.stack && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-soft"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
