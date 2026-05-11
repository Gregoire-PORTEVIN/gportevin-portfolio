import type { Metadata } from 'next';
import { Instrument_Serif, JetBrains_Mono, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CursorDot } from '@/components/CursorDot';

// ============================================================
// POLICES — Combinaison distinctive
// - DM Sans : sans-serif principale (texte courant, lisible)
// - Instrument Serif : touche éditoriale pour les accents (italique)
// - JetBrains Mono : code-like pour labels et tags
// ============================================================
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Grégoire Portevin — Dev Jeu Vidéo & Technologies Immersives',
  description:
    "Portfolio de Grégoire Portevin, étudiant en Master Développeur Jeu Vidéo. C++, Unreal Engine, Unity, VR.",
  // IMPORTANT : noindex pour ne PAS apparaître sur Google
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <CursorDot />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
