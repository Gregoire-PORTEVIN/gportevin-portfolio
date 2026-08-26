'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="card-hover group relative grid overflow-hidden border border-line bg-surface md:grid-cols-2"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-surface2 md:aspect-auto">
          <div
            className="scan-line absolute inset-0 grid-background opacity-60 transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage: project.cover ? `url(${project.cover})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/50" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              {t('★ Projet phare', '★ Featured project')} · {project.year}
            </span>
          </div>

          <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 text-base text-soft md:text-lg">{project.subtitle}</p>
          <p className="mt-6 line-clamp-4 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {t('Contexte', 'Context')}
              </div>
              <div className="mt-1 text-xs text-soft">{project.context}</div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Stack
              </div>
              <div className="mt-1 text-xs text-soft">
                {project.stack.slice(0, 3).join(' · ')}
              </div>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
            {t('Découvrir le projet', 'View project')}
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
