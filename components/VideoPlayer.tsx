'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import type { ProjectVideo } from '@/data/projects';

interface VideoPlayerProps {
  video: ProjectVideo;
  cover?: string;
}

/**
 * Lecteur vidéo unifié.
 * - YouTube/Vimeo : pas de chargement avant que l'utilisateur clique (perf)
 * - Fichier local : lecteur HTML5 standard avec controls
 */
export function VideoPlayer({ video, cover }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  // Vidéo fichier local
  if (video.kind === 'file') {
    return (
      <div className="overflow-hidden border border-line bg-black">
        <video
          src={video.src}
          poster={video.poster || cover}
          controls
          className="aspect-video w-full"
        >
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    );
  }

  // YouTube ou Vimeo : on attend le clic pour ne pas charger inutilement
  // (gain de perf énorme : un iframe YouTube = ~1 Mo)
  const embedUrl =
    video.kind === 'youtube'
      ? `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${video.id}?autoplay=1`;

  const thumbnailUrl =
    video.thumbnail ||
    cover ||
    (video.kind === 'youtube'
      ? `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`
      : '');

  return (
    <div className="group relative aspect-video overflow-hidden border border-line bg-surface2">
      {playing ? (
        <iframe
          src={embedUrl}
          title="Démonstration vidéo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="group/btn relative h-full w-full overflow-hidden"
          aria-label="Lancer la vidéo"
        >
          {/* Thumbnail */}
          {thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnailUrl}
              alt="Aperçu de la vidéo"
              className="h-full w-full object-cover transition-transform duration-700 group-hover/btn:scale-105"
            />
          ) : (
            <div className="h-full w-full grid-background" />
          )}

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity group-hover/btn:opacity-80" />

          {/* Bouton play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-ink shadow-2xl transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-accent-soft">
              <Play size={28} fill="currentColor" className="ml-1" />
            </div>
          </div>

          {/* Label en bas */}
          <div className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.2em] text-white/80">
            ▶ Lancer la démo
          </div>
        </button>
      )}
    </div>
  );
}
