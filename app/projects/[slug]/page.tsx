import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, Play } from 'lucide-react';
import { projects, getProjectBySlug, categoryLabels } from '@/data/projects';
import { VideoPlayer } from '@/components/VideoPlayer';
import { MediaGallery } from '@/components/MediaGallery';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Projet introuvable' };
  return {
    title: `${project.title} — Grégoire Portevin`,
    description: project.subtitle,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <article className="pt-24 pb-32">
      <div className="container-x">
        {/* Retour */}
        <Link
          href="/#projets"
          className="link-underline mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-accent"
        >
          <ArrowLeft size={14} />
          Tous les projets
        </Link>

        {/* En-tête */}
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                {categoryLabels[project.category]} · {project.year}
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

        {/* Media principal : VIDEO si dispo, sinon image cover */}
        <div className="mb-16">
          {project.video ? (
            <VideoPlayer video={project.video} cover={project.cover} />
          ) : (
            <div className="aspect-[16/9] overflow-hidden border border-line bg-surface">
              <div
                className="scan-line h-full w-full grid-background"
                style={{
                  backgroundImage: project.cover
                    ? `url(${project.cover})`
                    : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          )}
        </div>

        {/* Contenu : description + métadonnées */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          {/* Texte */}
          <div className="space-y-12">
            <section>
              <div className="section-label mb-4">Description</div>
              <p className="text-lg leading-relaxed text-bright">
                {project.description}
              </p>
            </section>

            <section>
              <div className="section-label mb-4">Réalisations</div>
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
                <div className="section-label mb-4">Ce que j'ai appris</div>
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

          {/* Sidebar info */}
          <aside className="space-y-6">
            <div className="border border-line bg-surface p-6">
              <div className="space-y-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Contexte
                  </div>
                  <div className="mt-1.5 text-sm text-bright">
                    {project.context}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Équipe
                  </div>
                  <div className="mt-1.5 text-sm text-bright">
                    {project.team}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Année
                  </div>
                  <div className="mt-1.5 text-sm text-bright">
                    {project.year}
                  </div>
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

        {/* Galerie d'images (si dispo) */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-20 border-t border-line pt-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <div className="section-label">Galerie</div>
                <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                  Aperçus du projet
                </h2>
              </div>
              <span className="hidden font-mono text-xs text-muted md:block">
                ← → pour naviguer
              </span>
            </div>
            <MediaGallery images={project.gallery} />
          </section>
        )}

        {/* CTA bas de page */}
        <div className="mt-24 flex flex-col items-center gap-4 border-t border-line pt-12 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            Suite
          </span>
          <Link
            href="/#projets"
            className="link-underline text-2xl font-medium md:text-3xl"
          >
            Voir les autres projets →
          </Link>
        </div>
      </div>
    </article>
  );
}
