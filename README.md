# Sport Fit Quiz

A React + Vite web app that recommends a sport based on your personality, physical traits, and goals — and delivers a personalized beginner guide to get started.

## What it does

- 6 quick questions covering social preference, intensity, budget, and competition style
- Matches against 35+ activities including team sports, solo fitness, martial arts, and outdoor pursuits
- Shows a primary match with a match-quality badge and reason
- Shows a runner-up pick when scores are close
- Generates a sport-specific beginner guide: rules, drills, equipment, common mistakes, and a 4-week starter plan

## Stack

- React 18
- Vite 4
- Plain CSS (no framework)
- No external runtime dependencies beyond React

## Local development

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`. Files:
- `dist/index.html` — entry point
- `dist/assets/` — hashed JS and CSS bundles

## Deploy

### Netlify (recommended)

**Option A — drag and drop:**
1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com) → Sites → drag the `dist/` folder onto the drop zone

**Option B — Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --dir dist --prod
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

Vercel auto-detects Vite. No extra config needed.

### GitHub Pages

1. Set `base` in `vite.config.js` to your repo name if deploying to a subdirectory:
   ```js
   base: '/your-repo-name/'
   ```
   (Already set to `'./'` which works for custom domains and root deploys.)
2. Run `npm run build`
3. Deploy the `dist/` folder to the `gh-pages` branch using `gh-pages`:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

### Any static host

Upload the contents of `dist/` to any static file host (S3, Firebase Hosting, Cloudflare Pages, etc.). No server-side configuration required — the app uses no client-side routing.

## Project structure

```
quiz-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx              # Screen state machine (home → quiz → results → detail)
    ├── index.css            # All styles
    ├── tokens.js            # Design token constants
    ├── components/
    │   ├── HomeScreen.jsx
    │   ├── QuizScreen.jsx
    │   ├── ResultsScreen.jsx
    │   ├── SportDetail.jsx
    │   ├── SpotlightSearch.jsx
    │   ├── DiscoveryCard.jsx
    │   ├── FloatingBackground.jsx
    │   ├── BobRock.jsx
    │   └── AboutModal.jsx
    ├── data/
    │   ├── questions.js     # 6 questions with tags
    │   ├── sports.js        # 35+ sport/activity profiles with guides
    │   └── sportMeta.js     # Gradient colors and action bridges
    └── logic/
        ├── scoring.js       # Tag-based scoring and discovery categories
        └── storage.js       # LocalStorage persistence
```
