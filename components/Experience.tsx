'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location: string;
  type: 'experience' | 'education';
  description?: string;
  stack?: string[];
};

const itemsFr: ExperienceItem[] = [
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
      'Prototypage de mécaniques de jeu sous Unity3D puis portage vers le moteur custom en C++. Collaboration inter-pôles QA et Moteur.',
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

const itemsEn: ExperienceItem[] = [
  {
    period: 'Feb. 2026 — Present',
    role: 'Engine Developer — Modelling & Portability',
    org: 'INRAE',
    location: 'Toulouse',
    type: 'experience',
    description:
      'Built an Unreal Engine C++ plugin bridging a scientific simulation engine with real-time 3D visualization. Procedural modelling of cell layers via Python and Blender scripts.',
    stack: ['C++', 'Unreal Engine', 'Python', 'Blender'],
  },
  {
    period: '2025 — 2027',
    role: "Master's — Video Game Development, Real-Time 3D & Immersive Technologies",
    org: 'Master GTech — Gaming Campus',
    location: 'Lyon',
    type: 'education',
  },
  {
    period: 'Jun. — Jul. 2025',
    role: 'Gameplay Developer — Unity3D & Custom C++ Engine',
    org: 'Gaming Campus',
    location: 'Lyon',
    type: 'experience',
    description:
      'Prototyped gameplay mechanics in Unity3D and ported them to a custom C++ engine. Cross-team collaboration with QA and Engine teams.',
    stack: ['Unity', 'C#', 'C++'],
  },
  {
    period: 'May — Jul. 2024',
    role: 'Web Developer — React / Next.js / Redux',
    org: 'Pignat / 3DVerse',
    location: 'Lyon',
    type: 'experience',
    description:
      'Built a Next.js web interface enabling remote simulation and control of lab machines for engineering students.',
    stack: ['Next.js', 'React', 'Redux', 'TailwindCSS'],
  },
  {
    period: '2022 — 2025',
    role: "Bachelor's — Computer Science, Video Game Specialization",
    org: 'Gaming Campus',
    location: 'Lyon',
    type: 'education',
    description: '40+ team projects completed over 3 years.',
  },
  {
    period: '2021',
    role: 'High School Diploma — Mathematics / Physics-Chemistry',
    org: 'Lycée Honoré Romane',
    location: 'Embrun',
    type: 'education',
    description: 'With Honours.',
  },
];

export function Experience() {
  const { lang, t } = useLanguage();
  const items = lang === 'en' ? itemsEn : itemsFr;

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
            {t('03 / Parcours', '03 / Experience')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title mt-4"
          >
            {t('Mon', 'My')}{' '}
            <span
              style={{ fontFamily: 'var(--font-serif)' }}
              className="italic text-accent"
            >
              {t('parcours', 'journey')}
            </span>
            {t(', étape par étape.', ', step by step.')}
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
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
                <div className="relative">
                  <div className="font-mono text-xs text-muted">{item.period}</div>
                </div>
                <div className="absolute left-[174px] top-1 hidden h-3 w-3 rounded-full border-2 border-ink bg-accent md:block" />
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                        item.type === 'experience' ? 'text-accent' : 'text-muted'
                      }`}
                    >
                      {item.type === 'experience'
                        ? t('→ Expérience', '→ Experience')
                        : t('◇ Formation', '◇ Education')}
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
