'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, featuredProject, type ProjectCategory } from '@/data/projects';
import { projectsEn, featuredProjectEn } from '@/data/projects.en';
import { ProjectCard } from './ProjectCard';
import { FeaturedProject } from './FeaturedProject';

type Filter = 'all' | ProjectCategory;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const { lang, t } = useLanguage();

  const allProjects = lang === 'en' ? projectsEn : projects;
  const featured = lang === 'en' ? featuredProjectEn : featuredProject;

  const categoryLabelsI18n: Record<ProjectCategory, string> = {
    stage:   t('Stage', 'Internship'),
    moteur:  t('Moteur & Tech', 'Engine & Tech'),
    jeu:     t('Jeu vidéo', 'Game'),
    shaders: t('Shaders & VFX', 'Shaders & VFX'),
    web:     t('Web', 'Web'),
  };

  const filters: { id: Filter; label: string }[] = [
    { id: 'all',     label: t('Tous', 'All') },
    { id: 'stage',   label: categoryLabelsI18n.stage },
    { id: 'moteur',  label: categoryLabelsI18n.moteur },
    { id: 'jeu',     label: categoryLabelsI18n.jeu },
    { id: 'shaders', label: categoryLabelsI18n.shaders },
  ];

  const filteredProjects = useMemo(() => {
    const list = allProjects.filter((p) => !p.featured);
    if (activeFilter === 'all') return list;
    return list.filter((p) => p.category === activeFilter);
  }, [activeFilter, allProjects]);

  return (
    <section id="projets" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label"
            >
              {t('02 / Travaux', '02 / Work')}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title mt-4"
            >
              {t('Une sélection de', 'A selection of')}{' '}
              <span
                style={{ fontFamily: 'var(--font-serif)' }}
                className="italic text-accent"
              >
                {t('projets.', 'projects.')}
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-sm text-soft"
          >
            {t(
              "De la conception de moteurs bas-niveau à la création d'expériences immersives — voici un aperçu de ce sur quoi j'ai travaillé.",
              "From low-level engine development to immersive experience creation — here's an overview of what I've worked on."
            )}
          </motion.p>
        </div>

        {/* Featured project */}
        {featured && (
          <div className="mb-16">
            <FeaturedProject project={featured} />
          </div>
        )}

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2 border-y border-line py-4">
          <span className="mr-2 font-mono text-xs text-muted">
            {t('FILTRES :', 'FILTERS:')}
          </span>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                activeFilter === filter.id
                  ? 'text-accent'
                  : 'text-muted hover:text-bright'
              }`}
            >
              [ {filter.label} ]
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} index={idx} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="border border-dashed border-line py-16 text-center text-sm text-muted">
            {t(
              'Aucun projet dans cette catégorie pour le moment.',
              'No projects in this category yet.'
            )}
          </div>
        )}
      </div>
    </section>
  );
}
