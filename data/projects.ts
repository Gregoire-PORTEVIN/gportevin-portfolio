export type ProjectCategory =
  | 'stage'
  | 'moteur'
  | 'jeu'
  | 'shaders'
  | 'web';

export type ProjectVideo =
  | { kind: 'youtube'; id: string; thumbnail?: string }
  | { kind: 'vimeo'; id: string; thumbnail?: string }
  | { kind: 'file'; src: string; poster?: string };


export type ProjectImage = {
  src: string;
  caption?: string;
  alt?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: ProjectCategory;
  context: string;
  team: string;
  stack: string[];
  cover: string;
  description: string;
  highlights: string[];
  learnings?: string[];
  github?: string;
  demo?: string;
  video?: ProjectVideo;
  gallery?: ProjectImage[];
  featured?: boolean;
  demoLabel?: string;
};

export const projects: Project[] = [
  // ============================================================
  // FEATURED — Projet phare de la home
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
    cover: '/projects/Stage-Inrae/cover-Stage-Inrae.jpg',
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
    video: {
      kind: 'youtube',
      id: 'rMRIMuNRrFQ'
    },
    gallery: [
      { src: '/projects/Stage-Inrae/Stage-Inrae1.jpg', caption: 'Rendu visuel d\'une couche cellulaire modélisée sous Blender' },
      { src: '/projects/Stage-Inrae/Stage-Inrae2.jpg', caption: 'Couche cellulaire en pleine attaque de champignons, rendue sous Unreal Engine' },
      { src: '/projects/Stage-Inrae/Stage-Inrae3.jpg', caption: 'Interface du plugin Irritator intégré à Unreal Engine' },
    ],
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
    cover: '/projects/Stage-Moteur/cover-StageGC.jpg',
    description:
      "Stage axé sur le prototypage de mécaniques de jeu sous Unity3D, puis sur leur portage vers un moteur de jeu propriétaire développé en C++. Une expérience qui m'a permis de toucher aux deux extrémités du pipeline : design rapide en moteur du marché, puis intégration optimisée dans un moteur custom.",
    highlights: [
      'Prototypage et développement de mécaniques de jeu sous Unity3D',
      'Collaboration avec les pôles QA et Moteur pour aligner les besoins',
      'Portage et intégration de prototypes Unity vers le moteur maison en C++',
    ],
    video: {
      kind: 'youtube',
      id: 'ECAOnPpxfoU'
    },
    gallery: [
      { src: '/projects/Stage-Moteur/Stage-Moteur1.jpg', caption: 'Jeu de billard développé sur le moteur custom du Gaming Campus' },
      { src: '/projects/Stage-Moteur/Stage-Moteur2.jpg', caption: 'Prototype platformer sur Unity, inspiration Celeste et Hollow Knight' },
      { src: '/projects/Stage-Moteur/Stage-Moteur3.jpg', caption: 'Prototype de jeu de combat sur Unity, inspiration Super Smash Bros' },
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
    cover: '/projects/Stage-Pignat-3DVerse/cover-Pignat-3DVerse.jpg',
    demo: 'https://www.linkedin.com/posts/tbt-3dverse-edtech-ugcPost-7340835512741486592-URcf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD56ax4ByPA4otaTHt1J48w3JFY9-Tv6OmM',
    demoLabel: 'Voir la vidéo sur Linkedin',
    description:
      "Développement d'une application web permettant l'utilisation à distance de machines de travaux pratiques pour des étudiants en formation. L'interface combine simulation et contrôle réel, avec une architecture front-end pensée pour la fiabilité et la responsivité.",
    highlights: [
      "Développement d'un site en Next.js, Redux et TailwindCSS",
      "Conception d'une interface unifiée simulation + contrôle à distance",
      'Architecture front-end optimisée et responsive',
      'Collaboration avec les équipes techniques pour intégrer les besoins métier',
    ],
    gallery: [
      { src: '/projects/Stage-Pignat-3DVerse/Pignat-3DVerse1.jpg', caption: 'Panneau interactif de commande des machines, intégré sous TailwindCSS' },
      { src: '/projects/Stage-Pignat-3DVerse/Pignat-3DVerse2.jpg', caption: 'Module d\'instructions guidant l\'étudiant au fil du TP' },
      { src: '/projects/Stage-Pignat-3DVerse/Pignat-3DVerse3.jpg', caption: 'Rendu global de l\'interface combinant simulation 3D et contrôles' },
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
    cover: '/projects/Project-Moteur-C++-DirectX12/moteur-cover.jpg',
    description:
      "Projet d'envergure consistant à développer un moteur de rendu 3D à partir de zéro en 3 semaines, en utilisant DirectX 12, puis à l'exploiter pour créer un jeu jouable. L'objectif : comprendre en profondeur le pipeline graphique, la gestion mémoire GPU, et l'architecture d'un moteur de jeu moderne.",
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
    video: {
      kind: 'youtube',
      id: 'UDLwqShKZOQ'
    },
    gallery: [
      { src: '/projects/Project-Moteur-C++-DirectX12/Project-C++-Moteur-DirectX1.jpg', caption: 'Schéma architéctural du projet' },
      { src: '/projects/Project-Moteur-C++-DirectX12/Project-C++-Moteur-DirectX2.jpg', caption: 'Test du pipeline graphique : affichage de modèles 3D et ombres projetées' },
      { src: '/projects/Project-Moteur-C++-DirectX12/Project-C++-Moteur-DirectX3.jpg', caption: 'Prototype de jeu construit avec le moteur custom' },
    ],
    github: 'https://github.com/Gregoire-PORTEVIN/Moteur-3D-DirectX12',
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
    cover: '/projects/M1/cover-Master-GC.jpg',
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
    video: {
      kind: 'youtube',
      id: 'iDt3Q1NO81U'
    },
    gallery: [
      { src: '/projects/M1/Master-GC1.jpg', caption: 'Game Design, type Squid Game' },
      { src: '/projects/M1/Master-GC2.jpg', caption: 'Blueprint Solid, type Puzzle' },
      { src: '/projects/M1/Master-GC3.jpg', caption: 'Animation, expérimentation' },
      { src: '/projects/M1/Master-GC4.jpg', caption: 'Game Feel, jeu de skate' },
      { src: '/projects/M1/Master-GC5.jpg', caption: 'Level Design, type temple Zelda' },
      { src: '/projects/M1/Master-GC6.jpg', caption: 'IA, Mise en place du NavMesh + Behaviour Tree' },
      { src: '/projects/M1/Master-GC7.jpg', caption: 'Geometry Shaders, type Baldur\'s Gate' },
      { src: '/projects/M1/Master-GC8.jpg', caption: 'VFX, Hit Impact' },
      { src: '/projects/M1/Master-GC9.jpg', caption: 'VFX, Feu d\'artifice' },
      { src: '/projects/M1/Master-GC10.jpg', caption: 'VFX, Comet' },
      { src: '/projects/M1/Master-GC11.jpg', caption: 'Game Design' },
      { src: '/projects/M1/Master-GC12.jpg', caption: 'Game Design' },
      { src: '/projects/M1/Master-GC13.jpg', caption: 'Game Design' },
      { src: '/projects/M1/Master-GC14.jpg', caption: 'Shaders' },
      { src: '/projects/M1/Master-GC15.jpg', caption: 'Shaders' },
      { src: '/projects/M1/Master-GC16.jpg', caption: 'Shaders' },
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
    cover: '/projects/Project-GoJo/cover-GoJo.jpg',
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
    video: {
      kind: 'youtube',
      id: 'WKazB9Nb8Mg'
    },
    gallery: [
      { src: '/projects/Project-GoJo/Project-GoJo1.jpg', caption: 'Combat de slime' },
      { src: '/projects/Project-GoJo/Project-GoJo2.jpg', caption: 'Niveau avec mécaniques de plateforme et obstacles dynamiques' },
      { src: '/projects/Project-GoJo/Project-GoJo3.jpg', caption: 'Ambiance visuelle et direction artistique du jeu' },
    ],
    github: 'https://github.com/Gregoire-PORTEVIN/GO-JO',
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
    cover: '/projects/Project-VFX/cover-VFX.jpg',
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
    video: {
      kind: 'youtube',
      id: 'eXCWwen9TPc'
    },
    gallery: [
      { src: '/projects/Project-VFX/Project-VFX1.jpg', caption: 'Ambiance immersive Game Menu' },
      { src: '/projects/Project-VFX/Project-VFX2.jpg', caption: 'Système de particules custom pour effets d\'impact et de magie' },
      { src: '/projects/Project-VFX/Project-VFX3.jpg', caption: 'Travail sur les matériaux et le rendu artistique du personnage' },
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
    cover: '/projects/Project-Puzzle/cover-Puzzle.jpg',
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
    video: {
      kind: 'youtube',
      id: 'Iwbc_teqtP0'
    },
    gallery: [
      { src: '/projects/Project-Puzzle/Project-Puzzle1.jpg', caption: 'Énigme à résoudre pour activer le mécanisme d\'ouverture' },
      { src: '/projects/Project-Puzzle/Project-Puzzle2.jpg', caption: 'Salle de puzzle au design minimaliste guidant l\'attention du joueur' },
      { src: '/projects/Project-Puzzle/Project-Puzzle3.jpg', caption: 'Progression à travers les énigmes et les portes verrouillées' },
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