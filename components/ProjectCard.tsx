'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { categoryLabels } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="card-hover group block overflow-hidden border border-line bg-surface transition-colors"
      >
        {/* Image cover */}
        <div className="relative aspect-[16/10] overflow-hidden bg-surface2">
          {/* Placeholder pattern if no image */}
          <div
            className="absolute inset-0 grid-background opacity-50 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: project.cover
                ? `url(${project.cover})`
                : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Overlay gradient bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent" />

          {/* Year at top right */}
          <div className="absolute right-4 top-4 font-mono text-xs text-soft">
            {project.year}
          </div>

          {/* Category at bottom left */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-soft">
              {categoryLabels[project.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="border-t border-line p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-medium tracking-tight text-bright transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                {project.subtitle}
              </p>
            </div>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </div>

          {/* Stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-soft"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="font-mono text-[10px] text-muted">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
