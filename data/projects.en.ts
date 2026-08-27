// ============================================================
// PROJETS — Version anglaise
// ============================================================

import type { Project } from './projects';

export const projectsEn: Project[] = [
  {
    slug: 'plugin-unreal-inrae',
    title: 'Unreal Plugin × INRAE',
    subtitle: "Porting a cellular simulation engine into Unreal Engine 5",
    year: '2026',
    category: 'stage',
    context: 'Internship at INRAE — Toulouse, France',
    team: 'Supervised by INRAE MIAT research team',
    stack: ['C++', 'Unreal Engine 5', 'Python', 'Blender'],
    cover: '/projects/Stage-Inrae/cover-Stage-Inrae.jpg',
    description:
      "During my internship at INRAE, I developed an Unreal Engine plugin that bridges a proprietary scientific simulation engine with real-time 3D visualization. The goal: allow researchers to visualize and interact with cellular pathogen propagation simulations in an immersive real-time environment.",
    highlights: [
      "Built an Unreal Engine 5 C++ plugin (IrritatorCore) bridging the INRAE DEVS simulator with the UE5 runtime",
      "Developed a Python + Blender pipeline to procedurally generate 3D meshes of biological cell layers from microscopic TIFF images",
      "Designed custom simulation controls (Init, Start, Pause, Step, Stop) integrated directly into the UE5 editor",
    ],
    learnings: [
      'Unreal Engine plugin architecture and native runtime integration',
      "Bridging scientific C++ code with a real-time 3D environment",
      "Python ↔ Blender ↔ Unreal modelling pipeline",
    ],
    video: { kind: 'youtube', id: 'rMRIMuNRrFQ' },
    gallery: [
      { src: '/projects/Stage-Inrae/Stage-Inrae1.jpg', caption: 'Cellular layer mesh rendered in Blender' },
      { src: '/projects/Stage-Inrae/Stage-Inrae2.jpg', caption: 'Cellular layer under fungal attack, rendered in Unreal Engine' },
      { src: '/projects/Stage-Inrae/Stage-Inrae3.jpg', caption: 'Irritator plugin interface inside Unreal Engine editor' },
    ],
    featured: true,
  },

  {
    slug: 'astral-corruption',
    title: 'Astral Corruption',
    subtitle: "3D adventure-exploration game set in an alien temple consumed by corruption",
    year: '2026',
    category: 'jeu',
    context: 'Master 1 Fil Rouge Project — Gaming Campus',
    team: 'Team of 2',
    stack: ['Unreal Engine 5', 'Blueprint', 'C++', 'Niagara'],
    cover: '/projects/Astral-Corruption/cover-Astral.jpg',
    description:
      "Astral Corruption is a third-person adventure-exploration game where the player is trapped inside an ancient alien temple overrun by an organic, energy-corrupting force. Armed with a sword and an energy bow, you must purify infected zones, solve environmental puzzles, and fight corrupted guardians to reactivate the 4 Astral Beacons and find the exit.",
    highlights: [
      "Corruption/Purification system: infected zones deal continuous damage and change visual state (materials, VFX, audio) on purification",
      "Two puzzle types: timed multi-target bow sequences (miasma) and runtime light beam redirection between emitters and receivers",
      "Dual weapon system: melee sword combos and ranged energy bow, swappable on the fly",
      "Full enemy AI via Behaviour Tree + Blackboard: patrol, multi-sense detection (sight, sound, damage), pursuit and return to patrol",
      "Level design naturally guiding the player from the tutorial section to the final boss encounter",
    ],
    learnings: [
      "Designing and implementing a complex gameplay system (corruption/purification) in Blueprint",
      "Building a full enemy AI with Behaviour Tree in Unreal Engine 5",
      "Managing a complete game project as a pair: game design, programming, level design",
    ],
    video: { kind: 'youtube', id: '' },
    gallery: [
      { src: '/projects/Astral-Corruption/1-Astral.jpg', caption: '' },
      { src: '/projects/Astral-Corruption/2-Astral.jpg', caption: '' },
      { src: '/projects/Astral-Corruption/3-Astral.jpg', caption: '' },
    ],
    github: 'https://github.com/Gregoire-PORTEVIN/Astral-Corruption',
    demo: 'https://gportevin.itch.io/astral-corruption-unreal-engine-5',
    demoLabel: 'Play on itch.io',
    gdd: 'https://drive.google.com/file/d/1QomRSK5SvbXl-7lVGQLtOC94_e2G5MCC/view?usp=sharing',
    gddLabel: 'Game Design Document',
  },

  {
    slug: 'stage-gaming-campus',
    title: 'Gameplay & Custom Engine Porting',
    subtitle: 'Unity prototyping then porting to a proprietary C++ engine',
    year: '2025',
    category: 'stage',
    context: 'Internship at Gaming Campus — Lyon, France',
    team: 'Cross-team collaboration (QA, Engine)',
    stack: ['Unity3D', 'C#', 'C++', 'Custom engine'],
    cover: '/projects/Stage-Moteur/cover-StageGC.jpg',
    description:
      "Internship focused on prototyping gameplay mechanics in Unity3D, then porting them to a proprietary C++ game engine. This gave me hands-on experience at both ends of the pipeline: rapid iteration in a commercial engine, then optimized integration into an in-house engine.",
    highlights: [
      'Prototyped and developed gameplay mechanics in Unity3D',
      'Collaborated cross-team (QA, Engine) to align requirements between Unity prototypes and the in-house engine',
      'Ported and integrated Unity prototypes into the custom C++ engine',
    ],
    video: { kind: 'youtube', id: 'ECAOnPpxfoU' },
    gallery: [
      { src: '/projects/Stage-Moteur/Stage-Moteur1.jpg', caption: 'Billiard game built on Gaming Campus custom engine' },
      { src: '/projects/Stage-Moteur/Stage-Moteur2.jpg', caption: 'Unity platformer prototype, inspired by Celeste and Hollow Knight' },
      { src: '/projects/Stage-Moteur/Stage-Moteur3.jpg', caption: 'Unity fighting game prototype, inspired by Super Smash Bros' },
    ],
  },

  {
    slug: 'stage-pignat-3dverse',
    title: 'Lab Control Interface — Pignat × 3DVerse',
    subtitle: "Next.js web app for remote simulation and control of lab machines",
    year: '2024',
    category: 'stage',
    context: 'Internship at Pignat / 3DVerse — Lyon, France',
    team: 'Technical team',
    stack: ['Next.js', 'React', 'Redux', 'TailwindCSS'],
    cover: '/projects/Stage-Pignat-3DVerse/cover-Pignat-3DVerse.jpg',
    demo: 'https://www.linkedin.com/posts/tbt-3dverse-edtech-ugcPost-7340835512741486592-URcf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD56ax4ByPA4otaTHt1J48w3JFY9-Tv6OmM',
    demoLabel: 'Watch on LinkedIn',
    description:
      "Built a web application enabling remote use of lab practical work machines for engineering students in training. The interface combines simulation and real control, with a front-end architecture designed for reliability and responsiveness.",
    highlights: [
      "Built a Next.js / Redux / TailwindCSS web interface deployed in production",
      "Designed a unified simulation + remote control interface for non-technical users",
      'Implemented an optimized, responsive front-end architecture',
      'Collaborated with technical teams to integrate business requirements',
    ],
    gallery: [
      { src: '/projects/Stage-Pignat-3DVerse/Pignat-3DVerse1.jpg', caption: 'Interactive machine control panel built with TailwindCSS' },
      { src: '/projects/Stage-Pignat-3DVerse/Pignat-3DVerse2.jpg', caption: 'Step-by-step instruction module guiding students through the lab session' },
      { src: '/projects/Stage-Pignat-3DVerse/Pignat-3DVerse3.jpg', caption: 'Overall interface combining 3D simulation and controls' },
    ],
  },

  {
    slug: 'moteur-directx12',
    title: '3D Rendering Engine & Game — DirectX 12',
    subtitle: "Building a 3D rendering engine from scratch in C++ and DirectX 12",
    year: '2024',
    category: 'moteur',
    context: 'Bachelor 2 — Gaming Campus',
    team: 'Team of 4',
    stack: ['C++', 'DirectX 12', 'HLSL'],
    cover: '/projects/Project-Moteur-C++-DirectX12/moteur-cover.jpg',
    description:
      "A major project: building a 3D rendering engine from scratch in 3 weeks using DirectX 12, then using it to create a playable game. The goal: gain a deep understanding of the graphics pipeline, GPU memory management, and the architecture of a modern game engine.",
    highlights: [
      '3D model loading and rendering',
      'Dynamic lighting and shadow casting',
      'Optimized DirectX 12 graphics pipeline',
      'Camera system and input handling',
      'Custom HLSL shaders for rendering effects',
      'Playable game prototype with movement, collision, and optimized rendering',
    ],
    learnings: [
      "Internal architecture of a modern 3D engine",
      'Low-level performance optimization with DirectX 12',
      'Teamwork and management of a complex technical project',
    ],
    video: { kind: 'youtube', id: 'UDLwqShKZOQ' },
    gallery: [
      { src: '/projects/Project-Moteur-C++-DirectX12/Project-C++-Moteur-DirectX1.jpg', caption: 'Real-time 3D scene rendering with dynamic lighting management' },
      { src: '/projects/Project-Moteur-C++-DirectX12/Project-C++-Moteur-DirectX2.jpg', caption: 'Graphics pipeline test: 3D model display and shadow casting' },
      { src: '/projects/Project-Moteur-C++-DirectX12/Project-C++-Moteur-DirectX3.jpg', caption: 'Game prototype built with the custom engine' },
    ],
    github: 'https://github.com/Gregoire-PORTEVIN/Moteur-Jeu',
  },

  {
    slug: 'unreal-master-1',
    title: 'Mastering Unreal Engine 5',
    subtitle: "A year of in-depth UE5 exploration — gameplay, AI, rendering, VFX",
    year: '2025',
    category: 'moteur',
    context: 'Master 1 — Gaming Campus',
    team: 'Solo & teams depending on the exercise',
    stack: ['Unreal Engine 5', 'C++', 'Blueprint', 'HLSL', 'Niagara'],
    cover: '/projects/M1/cover-Master-GC.jpg',
    description:
      "Throughout my first Master's year, I deepened my Unreal Engine 5 skills through a series of targeted projects covering every facet of the engine. Rather than a single monolithic project, this series allowed me to build a comprehensive understanding of UE5, from gameplay programming to rendering.",
    highlights: [
      'Gameplay programming: Blueprint, Event Dispatcher, SOLID principles, engine fundamentals',
      'AI & navigation: Behaviour Tree, NavMesh',
      "Animation & level design: animation systems, level creation, game feel",
      'Rendering & VFX: geometry shaders, custom shaders, Niagara VFX',
    ],
    learnings: [
      "Broad mastery of Unreal Engine 5",
      "Understanding of an AAA engine across all its layers",
      'Targeted exercise-based approach to consolidate each skill',
    ],
    video: { kind: 'youtube', id: 'iDt3Q1NO81U' },
    gallery: [
      { src: '/projects/M1/Master-GC1.jpg', caption: 'Dynamic combat with hit VFX — game feel exercise' },
      { src: '/projects/M1/Master-GC2.jpg', caption: 'Offensive ability: projectile with Niagara particles' },
      { src: '/projects/M1/Master-GC3.jpg', caption: 'Metallic material test on Unreal mannequin' },
      { src: '/projects/M1/Master-GC4.jpg', caption: 'AI combat — block and melee attack management' },
      { src: '/projects/M1/Master-GC5.jpg', caption: 'Animation exercise: transitions and state machine' },
      { src: '/projects/M1/Master-GC6.jpg', caption: 'NavMesh setup for AI navigation' },
      { src: '/projects/M1/Master-GC7.jpg', caption: 'Behaviour Tree: enemy decision logic' },
      { src: '/projects/M1/Master-GC8.jpg', caption: 'Level creation — composition and level design' },
      { src: '/projects/M1/Master-GC9.jpg', caption: 'Procedural shader applied to an environment' },
      { src: '/projects/M1/Master-GC10.jpg', caption: 'Geometry shader: real-time mesh deformation' },
      { src: '/projects/M1/Master-GC11.jpg', caption: 'Niagara VFX: custom particle system' },
      { src: '/projects/M1/Master-GC12.jpg', caption: 'Dynamic post-process lighting effect' },
      { src: '/projects/M1/Master-GC13.jpg', caption: 'Blueprint exercise: modular interaction system' },
      { src: '/projects/M1/Master-GC14.jpg', caption: 'SOLID principles applied to Unreal architecture' },
      { src: '/projects/M1/Master-GC15.jpg', caption: 'Gameplay test: visual feedback and juiciness' },
      { src: '/projects/M1/Master-GC16.jpg', caption: 'Compilation of renders produced throughout the year' },
    ],
  },
  {
    slug: 'go-jo',
    title: 'GO/JO — 2D Platformer',
    subtitle: "A slime that splits in two to solve cooperative puzzles",
    year: '2024',
    category: 'jeu',
    context: 'Bachelor 2 — Gaming Campus',
    team: 'Team of 3',
    stack: ['Unity', 'C#'],
    cover: '/projects/Project-GoJo/cover-GoJo.jpg',
    description:
      "GO/JO is a 2D platformer featuring a small slime that can split into two independently controllable entities. This core mechanic opens the door to cooperative puzzles where both halves must work together to overcome obstacles and reach the exit.",
    highlights: [
      'Character splitting into two independently controllable entities',
      'Cooperative puzzle-solving requiring coordination between both halves',
      'Jump, movement and puzzle mechanics built around the splitting mechanic',
      'Design of 3 levels tailored to the character abilities',
    ],
    learnings: [
      'Getting hands-on with Unity and C# development',
      'Designing original gameplay mechanics from scratch',
      "Managing a team-based game project",
    ],
    video: { kind: 'youtube', id: 'WKazB9Nb8Mg' },
    gallery: [
      { src: '/projects/Project-GoJo/Project-GoJo1.jpg', caption: 'The slime and its double in a cooperative puzzle' },
      { src: '/projects/Project-GoJo/Project-GoJo2.jpg', caption: 'Level with platforming mechanics and dynamic obstacles' },
      { src: '/projects/Project-GoJo/Project-GoJo3.jpg', caption: 'Visual style and art direction of the game' },
    ],
    github: 'https://github.com/Maquereauu/Go-jo',
  },

  {
    slug: 'shaders-vfx-unity',
    title: 'Shaders & VFX Experimentation',
    subtitle: "Deep exploration of shaders, VFX and particles in Unity",
    year: '2025',
    category: 'shaders',
    context: 'Bachelor 3 — Gaming Campus',
    team: 'Team of 3',
    stack: ['Unity', 'Shader Graph', 'HLSL'],
    cover: '/projects/Project-VFX/cover-VFX.jpg',
    description:
      "Rather than a traditional game, this project aimed to push Unity's graphical capabilities to their limits. We designed a visual experience featuring a 3D character evolving in a world filled with carefully crafted visual effects, with a strong artistic focus.",
    highlights: [
      'Advanced use of Shader Graph and HLSL',
      'Dynamic lighting effects and post-processing',
      'Particle systems: explosions, flames, lightning',
      'Distortion effects, reflections and special materials',
      "Art direction focused on maximizing visual impact",
    ],
    learnings: [
      "Creating and optimizing advanced shaders",
      'Managing VFX and particle systems in Unity',
      'Team collaboration on an artistically-driven development approach',
    ],
    video: { kind: 'youtube', id: 'eXCWwen9TPc' },
    gallery: [
      { src: '/projects/Project-VFX/Project-VFX1.jpg', caption: 'Immersive atmosphere: dynamic lighting and post-process in a closed environment' },
      { src: '/projects/Project-VFX/Project-VFX2.jpg', caption: 'Custom particle system for impact and magic effects' },
      { src: '/projects/Project-VFX/Project-VFX3.jpg', caption: 'Material work and artistic character rendering' },
    ],
  },

  {
    slug: 'puzzle-game-unreal',
    title: 'Puzzle Game — Unreal Engine 5',
    subtitle: "First exploration of UE5 Blueprints through a puzzle game",
    year: '2025',
    category: 'jeu',
    context: 'Bachelor 3 — Gaming Campus',
    team: 'Team of 2',
    stack: ['Unreal Engine 5', 'Blueprint'],
    cover: '/projects/Project-Puzzle/cover-Puzzle.jpg',
    description:
      "First real contact with Unreal Engine 5, developed with a teammate. A puzzle game where the player must solve three enigmas to activate door mechanisms and progress through a level designed to guide them naturally.",
    highlights: [
      "Blueprint-based interaction system",
      'Door triggering after puzzle completion',
      'Level design guiding the player naturally',
      "Event and animation management in UE5",
    ],
    learnings: [
      'Getting started with Blueprints and event-driven logic',
      "Designing interactive puzzle mechanics",
      "Structuring a project in Unreal Engine 5",
    ],
    video: { kind: 'youtube', id: 'Iwbc_teqtP0' },
    gallery: [
      { src: '/projects/Project-Puzzle/Project-Puzzle1.jpg', caption: 'Enigma to solve to activate the unlocking mechanism' },
      { src: '/projects/Project-Puzzle/Project-Puzzle2.jpg', caption: 'Minimalist puzzle room focusing the player attention' },
      { src: '/projects/Project-Puzzle/Project-Puzzle3.jpg', caption: 'Progression through enigmas and locked doors' },
    ],
  },
];

export function getProjectEnBySlug(slug: string): Project | undefined {
  return projectsEn.find((p) => p.slug === slug);
}

export const featuredProjectEn = projectsEn.find((p) => p.featured);
export const otherProjectsEn = projectsEn.filter((p) => !p.featured);
