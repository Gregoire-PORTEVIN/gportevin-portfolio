'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import type { ProjectImage } from '@/data/projects';

interface MediaGalleryProps {
  images: ProjectImage[];
}

/**
 * Image gallery with:
 * - Large main image
 * - Thumbnails at the bottom for navigation
 * - Left/right arrows
 * - Lightbox (full-screen zoom on click)
 * - Keyboard navigation (arrows + Escape)
 */
export function MediaGallery({ images }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  if (!images || images.length === 0) return null;

  const active = images[activeIndex];

  return (
    <>
      <div className="space-y-3">
        {/* Main image */}
        <div className="group relative aspect-[16/10] overflow-hidden border border-line bg-surface2">
          <AnimatePresence mode="wait">
            <motion.button
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightboxOpen(true)}
              className="block h-full w-full"
              aria-label="Agrandir l'image"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt || active.caption || `Image ${activeIndex + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.button>
          </AnimatePresence>

          {/* Zoom icon */}
          <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomIn size={12} />
            Agrandir
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/20 bg-black/60 p-2 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-accent hover:text-ink group-hover:opacity-100"
                aria-label="Image précédente"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/20 bg-black/60 p-2 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-accent hover:text-ink group-hover:opacity-100"
                aria-label="Image suivante"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-4 font-mono text-xs text-white/80">
            <span className="text-accent">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-white/40"> / {String(images.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Caption */}
        {active.caption && (
          <p className="font-mono text-xs leading-relaxed text-muted">
            <span className="text-accent">→</span> {active.caption}
          </p>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative aspect-[4/3] overflow-hidden border transition-all ${
                  idx === activeIndex
                    ? 'border-accent ring-1 ring-accent/30'
                    : 'border-line opacity-60 hover:opacity-100'
                }`}
                aria-label={`Voir l'image ${idx + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt || `Vignette ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full-screen lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-12"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 z-10 border border-white/20 bg-black/60 p-2 text-white transition-colors hover:bg-accent hover:text-ink"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 border border-white/20 bg-black/60 p-3 text-white transition-colors hover:bg-accent hover:text-ink"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 border border-white/20 bg-black/60 p-3 text-white transition-colors hover:bg-accent hover:text-ink"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={active.src}
                alt={active.alt || active.caption || `Image ${activeIndex + 1}`}
                className="max-h-[85vh] max-w-full object-contain"
              />
              {active.caption && (
                <div className="mt-3 text-center font-mono text-xs text-white/70">
                  {active.caption}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
