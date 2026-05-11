// ============================================================
// 📦 DONNÉES DES PROJETS
// ============================================================
// C'est ICI que tu modifies tes projets.
// Pour ajouter un projet : copie un bloc existant et adapte-le.
// Pour le mettre en avant sur la home : passe "featured: true".
// ============================================================

export type ProjectCategory =
  | 'stage'
  | 'moteur'
  | 'jeu'
  | 'shaders'
  | 'web';

/**
 * Type pour une vidéo :
 * - YouTube/Vimeo : kind: 'youtube' + l'ID de la vidéo (la partie après v=)
 *   Ex: pour https://www.youtube.com/watch?v=dQw4w9WgXcQ, l'id est "dQw4w9WgXcQ"
 * - Fichier local : kind: 'file' + chemin dans /public/projects/
 *   Ex: '/projects/ma-video.mp4'
 */
export type ProjectVideo =
  | { kind: 'youtube'; id: string; thumbnail?: string }
  | { kind: 'vimeo'; id: string; thumbnail?: string }
  | { kind: 'file'; src: string; poster?: string };

/**
 * Type pour une image de galerie.
 * - src : chemin de l'image (dans /public/projects/)
 * - caption : légende optionnelle affichée en bas
 */
export type ProjectImage = {
  src: string;
  caption?: string;
  alt?: string;
};

export type Project = {
  slug: string;              // URL du projet (ex: "moteur-directx12")
  title: string;
  subtitle: string;          // 1 ligne d'accroche
  year: string;              // Affichage : "2026", "2025", etc.
  category: ProjectCategory;
  context: string;           // Ex: "Stage INRAE", "Bachelor 3 — École", "Projet personnel"
  team: string;              // Ex: "Solo", "Équipe de 4", "Avec Gaming Campus"
  stack: string[];           // Tags affichés
  cover: string;             // Image de couverture (mettre dans /public/projects/)
  description: string;       // Paragraphe principal
  highlights: string[];      // Points clés (3-5 max)
  learnings?: string[];      // Ce que tu as appris (optionnel)
  github?: string;           // Lien GitHub (optionnel)
  demo?: string;             // Lien démo externe (optionnel, sera remplacé par video pour les nouveaux projets)
  video?: ProjectVideo;      // 🎬 Vidéo intégrée (YouTube, Vimeo ou fichier local)
  gallery?: ProjectImage[];  // 🖼️ Galerie d'images (carousel avec navigation)
  featured?: boolean;        // True = mis en avant sur la home
};

export const projects: Project[] = [
  // ============================================================
  // ⭐ FEATURED — Projet phare de la home
  // ============================================================
  {
    slug: 'plugin-unreal-inrae',
    title: 'Plugin Unreal × INRAE',
    subtitle: "Portabilité d'un moteur de simulation cellulaire vers Unreal Engine",
    year: '2026',
    category: 'stage',
    context: 'Stage à l\'INRAE — Toulouse',
    team: 'Encadré par l\'équipe recherche INRAE',
    stack: ['C++', 'Unreal Engine 5', 'Python', 'Blender'],
    cover: '/projects/inrae-cover.jpg',
    description:
      "Dans le cadre de mon stage à l'INRAE, je développe un plugin Unreal Engine permettant la portabilité d'un moteur de simulation propriétaire développé en interne. L'objectif : permettre aux chercheurs de visualiser et d'interagir avec leurs simulations de couches cellulaires dans un environnement temps réel et immersif.",
    highlights: [
      "Développement d'un plugin Unreal Engine en C++ assurant le pont entre le moteur de simulation interne et le runtime UE5",
      "Modélisation procédurale de couches cellulaires via scripts Python et Blender",
      "Travail sur la portabilité, l'architecture du plugin et l'optimisation des performances temps réel",
    ],
    learnings: [
      'Architecture de plugin Unreal Engine et exposition de fonctionnalités natives au moteur',
      "Bridge entre code C++ scientifique et environnement temps réel",
      "Pipeline de modélisation Python ↔ Blender ↔ Unreal",
    ],
    // 🎬 EXEMPLE — Décommente quand tu auras une vidéo YouTube de ton projet
    // video: {
    //   kind: 'youtube',
    //   id: 'TON_ID_YOUTUBE_ICI', // ex: 'dQw4w9WgXcQ'
    // },
    // 🖼️ EXEMPLE — Décommente quand tu auras des screenshots dans /public/projects/
    // gallery: [
    //   { src: '/projects/inrae-1.jpg', caption: 'Vue du plugin dans Unreal Engine' },
    //   { src: '/projects/inrae-2.jpg', caption: 'Simulation de couche cellulaire' },
    //   { src: '/projects/inrae-3.jpg', caption: 'Architecture du plugin' },
    // ],
    featured: true,
  },

  // ============================================================
  // STAGES
  // ============================================================
  {
    slug: 'stage-gaming-campus',
    title: 'Gameplay & Portage moteur custom',
    subtitle: 'Prototypage Unity puis portage vers un moteur maison en C++',
    year: '2025',
    category: 'stage',
    context: 'Stage au Gaming Campus — Lyon',
    team: 'Collaboration inter-pôles (QA, Moteur)',
    stack: ['Unity3D', 'C#', 'C++', 'Moteur custom'],
    cover: '/projects/gaming-campus-cover.jpg',
    description:
      "Stage axé sur le prototypage de mécaniques de jeu sous Unity3D, puis sur leur portage vers un moteur de jeu propriétaire développé en C++. Une expérience qui m'a permis de toucher aux deux extrémités du pipeline : design rapide en moteur du marché, puis intégration optimisée dans un moteur custom.",
    highlights: [
      'Prototypage et développement de mécaniques de jeu sous Unity3D',
      'Collaboration avec les pôles QA et Moteur pour aligner les besoins',
      'Portage et intégration de prototypes Unity vers le moteur maison en C++',
    ],
  },
  {
    slug: 'stage-pignat-3dverse',
    title: 'Interface de contrôle de TP — Pignat × 3DVerse',
    subtitle: "Web app Next.js de simulation et contrôle à distance de machines",
    year: '2024',
    category: 'stage',
    context: 'Stage chez Pignat / 3DVerse — Lyon',
    team: 'Équipe technique',
    stack: ['Next.js', 'React', 'Redux', 'TailwindCSS'],
    cover: '/projects/pignat-cover.jpg',
    description:
      "Développement d'une application web permettant l'utilisation à distance de machines de travaux pratiques pour des étudiants en formation. L'interface combine simulation et contrôle réel, avec une architecture front-end pensée pour la fiabilité et la responsivité.",
    highlights: [
      "Développement d'un site en Next.js, Redux et TailwindCSS",
      "Conception d'une interface unifiée simulation + contrôle à distance",
      'Architecture front-end optimisée et responsive',
      'Collaboration avec les équipes techniques pour intégrer les besoins métier',
    ],
  },

  // ============================================================
  // PROJETS MOTEUR & TECH
  // ============================================================
  {
    slug: 'moteur-directx12',
    title: 'Moteur 3D & Jeu — DirectX 12',
    subtitle: 'Création from scratch d\'un moteur de rendu en C++ et DirectX 12',
    year: '2024',
    category: 'moteur',
    context: 'Bachelor 2 — Gaming Campus',
    team: 'Équipe de 4',
    stack: ['C++', 'DirectX 12', 'HLSL'],
    cover: '/projects/moteur-cover.jpg',
    description:
      "Projet d'envergure consistant à développer un moteur de rendu 3D à partir de zéro, en utilisant DirectX 12, puis à l'exploiter pour créer un jeu jouable. L'objectif : comprendre en profondeur le pipeline graphique, la gestion mémoire GPU, et l'architecture d'un moteur de jeu moderne.",
    highlights: [
      'Chargement et affichage de modèles 3D',
      'Gestion des lumières et ombres dynamiques',
      'Pipeline graphique optimisé avec DirectX 12',
      'Système de caméras et gestion des entrées',
      'Shaders personnalisés HLSL pour le rendu',
      'Prototype de jeu intégrant déplacement, collisions et rendu optimisé',
    ],
    learnings: [
      "Architecture interne d'un moteur 3D moderne",
      'Optimisation des performances avec DirectX 12',
      'Travail en équipe et gestion de projet technique complexe',
    ],
    github: 'https://github.com/Gregoire-PORTEVIN/Moteur-Jeu',
  },
  {
    slug: 'unreal-master-1',
    title: 'Maîtrise Unreal Engine 5',
    subtitle: "Une année d'exploration approfondie d'Unreal — gameplay, IA, rendu, FX",
    year: '2025',
    category: 'moteur',
    context: 'Master 1 — Gaming Campus',
    team: 'Solo & équipes selon les exercices',
    stack: ['Unreal Engine 5', 'C++', 'Blueprint', 'HLSL', 'Niagara'],
    cover: '/projects/unreal-m1-cover.jpg',
    description:
      "Au cours de mon Master 1, j'ai approfondi Unreal Engine 5 à travers une série de projets ciblés explorant chaque facette du moteur. Plutôt qu'un projet monolithique, cette série m'a permis de construire une compréhension globale du moteur, de la programmation gameplay au rendu.",
    highlights: [
      'Programmation gameplay : Blueprint, Event Dispatcher, principes SOLID, bases du moteur',
      'IA & navigation : Behaviour Tree, NavMesh',
      "Animation & level design : systèmes d'animation, création de niveau, game feel",
      'Rendu & FX : geometry shaders, shaders custom, VFX Niagara',
    ],
    learnings: [
      "Maîtrise transversale d'Unreal Engine 5",
      "Compréhension d'un moteur AAA dans ses différentes couches",
      'Approche par exercices ciblés pour consolider chaque compétence',
    ],
  },

  // ============================================================
  // JEUX & SHADERS
  // ============================================================
  {
    slug: 'go-jo',
    title: 'GO/JO — Jeu de plateforme 2D',
    subtitle: 'Un slime capable de se séparer en deux pour résoudre des énigmes',
    year: '2024',
    category: 'jeu',
    context: 'Bachelor 2 — Gaming Campus',
    team: 'Équipe de 3',
    stack: ['Unity', 'C#'],
    cover: '/projects/gojo-cover.jpg',
    description:
      "GO/JO est un jeu de plateforme 2D mettant en scène un petit slime capable de se séparer en deux entités contrôlables. Cette mécanique de base ouvre la voie à des énigmes coopératives où il faut faire collaborer les deux moitiés du personnage pour franchir les obstacles.",
    highlights: [
      'Séparation du personnage en deux entités contrôlables',
      'Coopération entre les deux parties du slime pour résoudre les puzzles',
      'Mécaniques de saut, déplacement et puzzles basés sur la division',
      'Design de 3 niveaux adaptés aux capacités du personnage',
    ],
    learnings: [
      'Prise en main de Unity et développement en C#',
      'Conception de mécaniques de jeu originales',
      "Gestion d'un projet de jeu vidéo en équipe",
    ],
    github: 'https://github.com/Maquereauu/Go-jo',
  },
  {
    slug: 'shaders-vfx-unity',
    title: 'Expérimentation Shaders & VFX',
    subtitle: 'Exploration approfondie des shaders, VFX et particules sous Unity',
    year: '2025',
    category: 'shaders',
    context: 'Bachelor 3 — Gaming Campus',
    team: 'Équipe de 3',
    stack: ['Unity', 'Shader Graph', 'HLSL'],
    cover: '/projects/shaders-cover.jpg',
    description:
      "Plutôt qu'un jeu classique, ce projet visait à explorer au maximum les capacités graphiques d'Unity. Nous avons conçu une expérience visuelle mettant en scène un personnage 3D évoluant dans un monde rempli d'effets graphiques travaillés, avec un parti pris artistique fort.",
    highlights: [
      'Utilisation avancée de Shader Graph et HLSL',
      'Effets de lumière dynamiques et post-processing',
      'Systèmes de particules : explosions, flammes, éclairs',
      'Effets de distorsion, reflets et matériaux spéciaux',
      "Mise en scène pour maximiser l'impact visuel",
    ],
    learnings: [
      "Création et optimisation de shaders avancés",
      'Gestion des VFX et des particules sous Unity',
      'Travail en équipe sur une approche artistique du développement',
    ],
  },
  {
    slug: 'puzzle-game-unreal',
    title: 'Puzzle Game — Unreal Engine 5',
    subtitle: 'Première exploration des Blueprints UE5 sur un jeu de puzzle',
    year: '2025',
    category: 'jeu',
    context: 'Bachelor 3 — Gaming Campus',
    team: 'Équipe de 2',
    stack: ['Unreal Engine 5', 'Blueprint'],
    cover: '/projects/puzzle-cover.jpg',
    description:
      "Premier vrai contact avec Unreal Engine 5, en collaboration avec un coéquipier. Un puzzle game où le joueur doit résoudre trois énigmes pour actionner des portes et progresser à travers un niveau pensé pour le guider naturellement.",
    highlights: [
      "Système d'interaction via Blueprint",
      'Déclenchement de portes après résolution des puzzles',
      'Level design pensé pour guider le joueur',
      "Gestion des événements et animations dans UE5",
    ],
    learnings: [
      'Prise en main des Blueprints et logique événementielle',
      "Création de mécaniques de puzzle interactives",
      "Structuration d'un projet sous Unreal Engine 5",
    ],
  },
];

// ============================================================
// Helpers
// ============================================================
export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categoryLabels: Record<ProjectCategory, string> = {
  stage: 'Stage',
  moteur: 'Moteur & Tech',
  jeu: 'Jeu vidéo',
  shaders: 'Shaders & VFX',
  web: 'Web',
};
