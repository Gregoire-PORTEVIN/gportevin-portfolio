// ============================================================
// TRADUCTIONS UI
// Usage : const { t } = useLanguage()
//         t('Texte français', 'English text')
// ============================================================

export const ui = {
  // Navigation
  nav: {
    projects:   { fr: 'Projets',    en: 'Projects' },
    experience: { fr: 'Parcours',   en: 'Experience' },
    about:      { fr: 'À propos',   en: 'About' },
    contact:    { fr: 'Contact',    en: 'Contact' },
    available:  { fr: 'Dispo Sept. 2026', en: 'Avail. Sept. 2026' },
  },

  // Hero
  hero: {
    label:      { fr: 'Portfolio · 2026', en: 'Portfolio · 2026' },
    line1:      { fr: 'Je crée des',      en: 'I build' },
    highlight:  { fr: 'expériences interactives', en: 'interactive experiences' },
    line2:      { fr: 'et immersives.',   en: 'and immersive worlds.' },
    pitch:      {
      fr: "Étudiant en Master Développeur Jeu Vidéo, rendu 3D temps réel et technologies immersives au Gaming Campus. Je m'intéresse particulièrement à la VR, à la simulation et aux moteurs de jeu — du gameplay au rendu, du temps réel à l'optimisation.",
      en: "Master's student in Video Game Development, Real-Time 3D Rendering & Immersive Technologies at Gaming Campus (Lyon). I focus on VR, simulation and game engines — from gameplay to rendering, from real-time performance to low-level optimization.",
    },
    status:     { fr: 'Recherche alternance · Septembre 2026', en: 'Seeking apprenticeship · September 2026' },
    stack:      { fr: 'Stack', en: 'Stack' },
    stackCount: { fr: 'technologies', en: 'technologies' },
    cta:        { fr: 'Voir mes projets', en: 'See my projects' },
    contact:    { fr: 'Me contacter',    en: 'Get in touch' },
    scroll:     { fr: 'Scroll',          en: 'Scroll' },
  },

  // Section Projects
  projects: {
    label:       { fr: '02 / Travaux',    en: '02 / Work' },
    title1:      { fr: 'Une sélection de', en: 'A selection of' },
    titleItalic: { fr: 'projets.',         en: 'projects.' },
    subtitle:    {
      fr: "De la conception de moteurs bas-niveau à la création d'expériences immersives — voici un aperçu de ce sur quoi j'ai travaillé.",
      en: "From low-level engine development to immersive experience creation — here's an overview of what I've worked on.",
    },
    featuredLabel: { fr: '★ Projet phare', en: '★ Featured project' },
    discover:      { fr: 'Découvrir le projet', en: 'View project' },
    filters:       { fr: 'FILTRES :', en: 'FILTERS:' },
    filterAll:     { fr: 'Tous', en: 'All' },
    empty:         { fr: 'Aucun projet dans cette catégorie pour le moment.', en: 'No projects in this category yet.' },
  },

  // Categories
  categories: {
    stage:   { fr: 'Stage',         en: 'Internship' },
    moteur:  { fr: 'Moteur & Tech', en: 'Engine & Tech' },
    jeu:     { fr: 'Jeu vidéo',     en: 'Game' },
    shaders: { fr: 'Shaders & VFX', en: 'Shaders & VFX' },
    web:     { fr: 'Web',           en: 'Web' },
  },

  // Project detail
  projectDetail: {
    back:        { fr: '← Tous les projets', en: '← All projects' },
    description: { fr: 'Description',        en: 'Description' },
    highlights:  { fr: 'Réalisations',       en: 'Highlights' },
    learnings:   { fr: "Ce que j'ai appris", en: 'What I learned' },
    context:     { fr: 'Contexte',           en: 'Context' },
    team:        { fr: 'Équipe',             en: 'Team' },
    year:        { fr: 'Année',              en: 'Year' },
    stack:       { fr: 'Stack',              en: 'Stack' },
    gallery:     { fr: 'Galerie',            en: 'Gallery' },
    galleryTitle:{ fr: 'Aperçus du projet',  en: 'Project screenshots' },
    galleryNav:  { fr: '← → pour naviguer', en: '← → to navigate' },
    next:        { fr: 'Suite',              en: 'Next' },
    nextCta:     { fr: 'Voir les autres projets →', en: 'See other projects →' },
  },

  // Section Experience
  experience: {
    label:       { fr: '03 / Parcours',         en: '03 / Experience' },
    title1:      { fr: 'Mon',                    en: 'My' },
    titleItalic: { fr: 'parcours',               en: 'journey' },
    title2:      { fr: ', étape par étape.',     en: ', step by step.' },
    expLabel:    { fr: '→ Expérience',           en: '→ Experience' },
    eduLabel:    { fr: '◇ Formation',            en: '◇ Education' },
  },

  // Section About
  about: {
    label:       { fr: '04 / À propos',          en: '04 / About' },
    title1:      { fr: 'Curieux,',               en: 'Curious,' },
    titleItalic: { fr: 'rigoureux',              en: 'rigorous' },
    title2:      { fr: ', et toujours partant.', en: ', and always up for a challenge.' },
    p1: {
      fr: "Je suis étudiant en Master au Gaming Campus de Lyon, spécialisé dans le développement de jeux vidéo, le rendu 3D temps réel et les technologies immersives.",
      en: "I'm a Master's student at Gaming Campus (Lyon), specializing in video game development, real-time 3D rendering and immersive technologies.",
    },
    p2: {
      fr: "Ce qui me motive ? Donner vie à des univers, résoudre des problèmes techniques exigeants, et explorer la frontière entre code et expérience. J'aime aussi bien plonger dans l'architecture d'un moteur que peaufiner le ressenti d'un gameplay.",
      en: "What drives me? Bringing worlds to life, solving challenging technical problems, and exploring the boundary between code and experience. I enjoy diving into engine architecture just as much as polishing gameplay feel.",
    },
    p3fr: "Aujourd'hui, je cherche une",
    p3bold: { fr: "alternance d'un an à partir de septembre 2026", en: "1-year apprenticeship starting September 2026" },
    p3end: {
      fr: " pour rejoindre une équipe et contribuer à des projets ambitieux — particulièrement en VR, simulation, ou jeu vidéo.",
      en: " to join a team and contribute to ambitious projects — particularly in VR, simulation, or game development.",
    },
    skillsLabel: { fr: 'Stack technique', en: 'Tech stack' },
    langLabel:   { fr: 'Langues',         en: 'Languages' },
  },

  // Section Contact
  contact: {
    label:       { fr: '05 / Contact',              en: '05 / Contact' },
    title1:      { fr: 'Discutons de votre',         en: "Let's talk about your" },
    titleItalic: { fr: 'prochain projet.',            en: 'next project.' },
    subtitle:    {
      fr: "Que vous ayez une offre d'alternance, une question sur mon travail, ou simplement envie d'échanger — n'hésitez pas à me contacter.",
      en: "Whether you have an apprenticeship offer, a question about my work, or just want to chat — feel free to reach out.",
    },
    emailLabel:  { fr: 'Email',        en: 'Email' },
    phoneLabel:  { fr: 'Téléphone',    en: 'Phone' },
    locationLabel:{ fr: 'Localisation', en: 'Location' },
    linkedinCta: { fr: 'LinkedIn ↗',   en: 'LinkedIn ↗' },
    githubCta:   { fr: 'GitHub ↗',     en: 'GitHub ↗' },
    statusText:  { fr: "En recherche d'alternance — Septembre 2026", en: "Open to apprenticeship — September 2026" },
    statusSub:   { fr: "N'hésitez pas à me contacter, je réponds rapidement.", en: "Feel free to reach out, I reply quickly." },
  },

  // Footer
  footer: {
    contact:   { fr: 'Contact',  en: 'Contact' },
    links:     { fr: 'Liens',    en: 'Links' },
    status:    { fr: 'Statut',   en: 'Status' },
    statusText:{ fr: "En recherche d'alternance — Septembre 2026", en: "Open to apprenticeship — September 2026" },
    statusSub: { fr: "N'hésitez pas à me contacter, je réponds rapidement.", en: "Feel free to reach out, I reply quickly." },
    rights:    { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
    builtWith: { fr: 'Conçu et développé avec Next.js', en: 'Designed & built with Next.js' },
  },

  // Gallery
  gallery: {
    zoom:  { fr: 'Agrandir',         en: 'Zoom in' },
    play:  { fr: '▶ Lancer la démo', en: '▶ Watch demo' },
    close: { fr: 'Fermer',           en: 'Close' },
    prev:  { fr: 'Image précédente', en: 'Previous image' },
    next:  { fr: 'Image suivante',   en: 'Next image' },
  },
} as const;
