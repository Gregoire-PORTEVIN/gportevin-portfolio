# 🎮 Portfolio — Grégoire Portevin

Portfolio personnel — développeur jeu vidéo & technologies immersives.

**Stack :** Next.js 14 (App Router) · TypeScript · TailwindCSS · Framer Motion

---

## 🚀 Démarrage rapide

### 1. Prérequis

Installer **Node.js 18+** : [https://nodejs.org/](https://nodejs.org/) (prends la version LTS).

Pour vérifier que c'est bon, ouvre un terminal :

```bash
node --version
# Doit afficher v18.x.x ou supérieur
```

### 2. Installation

Ouvre un terminal dans le dossier du projet :

```bash
# Installer les dépendances (la première fois, ça prend ~1 min)
npm install
```

### 3. Lancer en local

```bash
npm run dev
```

Puis ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur. Toute modification de fichier est rechargée automatiquement.

### 4. Build de production

```bash
npm run build   # Crée la version optimisée
npm start       # Lance le site en mode prod
```

---

## ✏️ Personnaliser le contenu

### 🎯 Tes projets (le plus important)

Tout est dans **`data/projects.ts`**.

- Pour **modifier un projet** existant : édite-le directement
- Pour **ajouter un projet** : copie un bloc et remplis-le
- Pour **mettre un projet en vedette** sur la home : ajoute `featured: true`
- Pour **changer la couverture** d'un projet : mets une image dans `public/projects/` et mets son chemin dans `cover: '/projects/ton-image.jpg'`

```ts
{
  slug: 'mon-projet',
  title: 'Mon Projet',
  // ...
}
```

### 👤 Tes infos perso

Dans **`data/profile.ts`** : nom, tagline, contact, réseaux, compétences, langues.

### 📅 Ton parcours

Dans **`components/Experience.tsx`**, en haut du fichier, la constante `items` contient toutes les étapes de ton parcours (stages, formations). Ajoute, modifie, retire à volonté.

### 🎨 Couleurs et style

- Couleurs : **`tailwind.config.ts`** (variable `accent` = orange `#FF5C39`)
- Polices : **`app/layout.tsx`** (3 polices chargées via `next/font/google`)
- Styles globaux : **`app/globals.css`**

---

## 🖼️ Ajouter tes images et vidéos

### Images de projets (cover)

1. Dépose tes images dans `public/projects/` (formats : `.jpg`, `.png`, `.webp`)
2. Dans `data/projects.ts`, mets le chemin dans `cover`. Exemple :
   ```ts
   cover: '/projects/inrae-cover.jpg'
   ```
3. **Tailles recommandées** : 1600 × 1000 px, format paysage, sous 500 Ko (utilise [tinypng.com](https://tinypng.com) pour compresser)

### 🎬 Ajouter une vidéo à un projet

3 options selon ce que tu as :

**Option A — Vidéo YouTube (recommandé)**

1. Upload ta vidéo sur YouTube en mode "non répertorié" (`Unlisted` en anglais)
2. Récupère l'ID dans l'URL : pour `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, l'ID est `dQw4w9WgXcQ`
3. Dans `data/projects.ts`, ajoute :
   ```ts
   video: {
     kind: 'youtube',
     id: 'dQw4w9WgXcQ',
   },
   ```

**Option B — Vidéo Vimeo**

Pareil que YouTube, l'ID est le nombre à la fin de l'URL :
```ts
video: {
  kind: 'vimeo',
  id: '123456789',
},
```

**Option C — Fichier vidéo local**

1. Dépose ta vidéo dans `public/projects/` (format `.mp4` recommandé)
2. Ajoute dans `data/projects.ts` :
   ```ts
   video: {
     kind: 'file',
     src: '/projects/ma-video.mp4',
     poster: '/projects/ma-video-poster.jpg', // image affichée avant lecture (optionnel)
   },
   ```
3. ⚠️ **Garde tes vidéos sous 10 Mo** sinon ton site sera lent. Pour compresser : [handbrake.fr](https://handbrake.fr) (gratuit, Windows/Mac)

**Pourquoi YouTube/Vimeo > fichier local ?**
- Pas de stockage sur Vercel (limite 100 Mo par déploiement)
- YouTube optimise automatiquement la qualité selon la connexion
- Lecture plus rapide pour le visiteur

### 🖼️ Ajouter une galerie d'images à un projet

1. Dépose tes screenshots dans `public/projects/`
2. Dans `data/projects.ts`, ajoute le champ `gallery` :
   ```ts
   gallery: [
     {
       src: '/projects/inrae-1.jpg',
       caption: 'Vue du plugin dans Unreal Engine',
     },
     {
       src: '/projects/inrae-2.jpg',
       caption: 'Simulation de couche cellulaire',
     },
     {
       src: '/projects/inrae-3.jpg',
       caption: 'Architecture du plugin',
     },
   ],
   ```

**La galerie offre automatiquement :**
- Une grande image principale + vignettes en bas
- Flèches gauche/droite pour naviguer
- Clic = lightbox plein écran avec zoom
- Navigation au clavier (← → Escape)
- Légendes optionnelles sous chaque image

**Tailles recommandées** : 1600 × 1000 px, sous 400 Ko chacune.

---

## ☁️ Déployer en ligne (Vercel — gratuit)

### Première fois

1. Crée un compte sur [vercel.com](https://vercel.com) (avec ton GitHub)
2. Push ton projet sur GitHub (repo public ou privé, peu importe) :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   # Crée un repo vide sur GitHub puis :
   git remote add origin https://github.com/TON_PSEUDO/portfolio.git
   git push -u origin main
   ```
3. Sur Vercel : "New Project" → sélectionne ton repo → "Deploy"
4. C'est en ligne ! L'URL est du type `ton-portfolio.vercel.app`

### Mises à jour

À chaque `git push`, Vercel redéploie automatiquement. Magie.

### Domaine perso (optionnel, plus tard)

Si tu veux `gregoireportevin.dev` au lieu de `xxx.vercel.app` :

1. Achète un domaine sur [Namecheap](https://namecheap.com) ou [OVH](https://ovh.com) (~12€/an)
2. Dans Vercel → ton projet → Settings → Domains → Ajoute ton domaine
3. Suis les instructions DNS qu'ils donnent (5 min de config)

---

## 🔒 Indexation Google : DÉSACTIVÉE

Ton portfolio **n'apparaît PAS sur Google** par défaut. C'est configuré dans :
- `next.config.js` (header `X-Robots-Tag`)
- `public/robots.txt`
- `app/layout.tsx` (metadata `robots: { index: false }`)

Si un jour tu veux qu'il apparaisse sur Google :
1. Supprime le bloc `async headers()` dans `next.config.js`
2. Vide le fichier `public/robots.txt` ou mets `Allow: /`
3. Dans `app/layout.tsx`, change `index: false` en `index: true`

---

## 🛠️ Commandes utiles

```bash
npm run dev      # Mode développement (rechargement auto)
npm run build    # Build de production
npm start        # Lance le build de production
npm run lint     # Vérifie le code
```

---

## 📂 Structure du projet

```
gportevin-portfolio/
├── app/
│   ├── layout.tsx          ← Layout global (polices, metadata, nav, footer)
│   ├── page.tsx            ← Page d'accueil
│   ├── globals.css         ← Styles globaux
│   └── projects/
│       └── [slug]/
│           └── page.tsx    ← Page détail d'un projet
├── components/             ← Composants réutilisables
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── FeaturedProject.tsx
│   ├── Experience.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── CursorDot.tsx
├── data/                   ← ⭐ Tes données (à modifier souvent)
│   ├── projects.ts         ← Tes projets
│   └── profile.ts          ← Tes infos perso
├── public/
│   ├── robots.txt          ← Blocage Google
│   └── projects/           ← Tes images de projets
├── tailwind.config.ts      ← Couleurs, polices
├── next.config.js          ← Config Next.js (noindex)
└── package.json
```

---

## 💡 Conseils

- **Garde des images compressées** (< 500 Ko chacune) pour un site rapide
- **Teste sur mobile** en ouvrant ton site sur ton téléphone (Vercel donne une URL accessible partout)
- **Mets à jour ton portfolio régulièrement** — un projet ajouté = `data/projects.ts` modifié, c'est tout
- **Le code est tien** : modifie ce que tu veux, casse, expérimente. Tout est dans Git, tu peux toujours revenir en arrière.

---

## 🆘 En cas de souci

- **Erreur au `npm install`** : supprime le dossier `node_modules` et le fichier `package-lock.json`, puis relance `npm install`
- **Le site ne se charge pas** : vérifie que tu es bien en `http://localhost:3000` (pas https)
- **Erreur TypeScript** : c'est probablement une typo dans `data/projects.ts` — vérifie que toutes les virgules et accolades sont bien là
- **Vercel ne déploie pas** : vérifie les logs Vercel, c'est souvent une erreur de build qui apparaît clairement

---

**Bonne candidature ! 🚀**
