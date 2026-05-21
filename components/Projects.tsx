'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  projects,
  featuredProject,
  categoryLabels,
  type ProjectCategory,
} from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { FeaturedProject } from './FeaturedProject';

type Filter = 'all' | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Tous' },
  { id: 'stage', label: categoryLabels.stage },
  { id: 'moteur', label: categoryLabels.moteur },
  { id: 'jeu', label: categoryLabels.jeu },
  { id: 'shaders', label: categoryLabels.shaders },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  // Excludes the featured project (already displayed separately)
  const filteredProjects = useMemo(() => {
    const list = projects.filter((p) => !p.featured);
    if (activeFilter === 'all') return list;
    return list.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

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
              02 / Travaux
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title mt-4"
            >
              Une sélection de{' '}
              <span
                style={{ fontFamily: 'var(--font-serif)' }}
                className="italic text-accent"
              >
                projets.
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
            De la conception de moteurs bas-niveau à la création d'expériences
            immersives — voici un aperçu de ce sur quoi j'ai travaillé.
          </motion.p>
        </div>

        {/* Featured project */}
        {featuredProject && (
          <div className="mb-16">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2 border-y border-line py-4">
          <span className="mr-2 font-mono text-xs text-muted">FILTRES :</span>
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
            Aucun projet dans cette catégorie pour le moment.
          </div>
        )}
      </div>
    </section>
  );
}
