'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Blueprint-style background grid */}
      <div className="absolute inset-0 grid-background opacity-40" />

      {/* Orange glow at bottom right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ backgroundColor: '#FF5C39' }}
      />

      <div className="container-x relative z-10 py-20">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-px w-12 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Portfolio · {new Date().getFullYear()}
          </span>
        </motion.div>

        {/* Main title */}
        <h1 className="section-title max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            {profile.tagline.line1}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="block"
          >
            <span
              style={{ fontFamily: 'var(--font-serif)' }}
              className="italic text-accent"
            >
              {profile.tagline.highlight}
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            {profile.tagline.line2}
          </motion.span>
        </h1>

        {/* Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 max-w-2xl text-base leading-relaxed text-soft md:text-lg"
        >
          {profile.pitch}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projets"
            className="group inline-flex items-center gap-3 bg-accent px-6 py-3 text-sm font-medium text-ink transition-all hover:bg-accent-soft"
          >
            Voir mes projets
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="link-underline inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-bright"
          >
            Me contacter
          </a>
        </motion.div>

        {/* Stack ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 border-t border-line pt-8"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Stack
            </span>
            <span className="font-mono text-xs text-muted">
              {profile.primaryStack.length} technologies
            </span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {profile.primaryStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-sm text-soft transition-colors hover:text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
