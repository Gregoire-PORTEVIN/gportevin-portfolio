'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import { ArrowLeft, ArrowUpRight, Github, Play } from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/projects';
import { getProjectEnBySlug } from '@/data/projects.en';
import { VideoPlayer } from '@/components/VideoPlayer';
import { MediaGallery } from '@/components/MediaGallery';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { lang, t } = useLanguage();

  const project =
    lang === 'en'
      ? (getProjectEnBySlug(slug) ?? getProjectBySlug(slug))
      : getProjectBySlug(slug);

  if (!project) notFound();

  const categoryLabels: Record<string, string> = {
    stage:   t('Stage', 'Internship'),
    moteur:  t('Moteur & Tech', 'Engine & Tech'),
    jeu:     t('Jeu vidéo', 'Game'),
    shaders: t('Shaders & VFX', 'Shaders & VFX'),
    web:     t('Web', 'Web'),
  };

  return (
    <article className="pb-32 pt-24">
      <div className="container-x">
        {/* Back */}
        <Link
          href="/#projets"
          className="link-underline mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-accent"
        >
          <ArrowLeft size={14} />
          {t('Tous les projets', 'All projects')}
        </Link>

        {/* Header */}
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                {categoryLabels[project.category] ?? project.category} · {project.year}
              </span>
            </div>
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-soft md:text-xl">
              {project.subtitle}
            </p>
          </div>

          {/* CTA Github / Demo */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={16} />
                Code
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
              >
                <Play size={16} />
                {project.demoLabel || 'Demo'}
              </a>
            )}
          </div>
        </div>

        {/* Main media */}
        <div className="mb-16">
          {project.video && project.video.id ? (
            <VideoPlayer video={project.video} cover={project.cover} />
          ) : (
            <div className="aspect-[16/9] overflow-hidden border border-line bg-surface">
              <div
                className="h-full w-full grid-background"
                style={{
                  backgroundImage: project.cover ? `url(${project.cover})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div className="space-y-12">
            <section>
              <div className="section-label mb-4">
                {t('Description', 'Description')}
              </div>
              <p className="text-lg leading-relaxed text-bright">
                {project.description}
              </p>
            </section>

            <section>
              <div className="section-label mb-4">
                {t('Réalisations', 'Highlights')}
              </div>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[auto_1fr] gap-4 text-base leading-relaxed text-soft"
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.learnings && (
              <section>
                <div className="section-label mb-4">
                  {t("Ce que j'ai appris", 'What I learned')}
                </div>
                <ul className="space-y-3">
                  {project.learnings.map((l, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-4 text-base leading-relaxed text-soft"
                    >
                      <span className="font-mono text-xs text-muted">→</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="border border-line bg-surface p-6">
              <div className="space-y-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {t('Contexte', 'Context')}
                  </div>
                  <div className="mt-1.5 text-sm text-bright">{project.context}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {t('Équipe', 'Team')}
                  </div>
                  <div className="mt-1.5 text-sm text-bright">{project.team}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {t('Année', 'Year')}
                  </div>
                  <div className="mt-1.5 text-sm text-bright">{project.year}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Stack
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-20 border-t border-line pt-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="section-label">{t('Galerie', 'Gallery')}</div>
                <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                  {t('Aperçus du projet', 'Project screenshots')}
                </h2>
              </div>
              <span className="hidden font-mono text-xs text-muted md:block">
                {t('← → pour naviguer', '← → to navigate')}
              </span>
            </div>
            <MediaGallery images={project.gallery} />
          </section>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 flex flex-col items-center gap-4 border-t border-line pt-12 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {t('Suite', 'Next')}
          </span>
          <Link href="/#projets" className="link-underline text-2xl font-medium md:text-3xl">
            {t('Voir les autres projets →', 'See other projects →')}
          </Link>
        </div>
      </div>
    </article>
  );
}
