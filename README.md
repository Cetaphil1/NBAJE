# Sport Fit Quiz

A React + Vite web app that recommends a sport based on your personality, physical traits, and goals — and delivers a personalized beginner guide to get started.

## What it does

- 12 questions covering speed, endurance, strength, coordination, teamwork, and more
- Scores 10 sports (basketball, soccer, football, baseball, track, tennis, swimming, volleyball, wrestling, boxing)
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
    ├── App.jsx              # Screen state machine (home → quiz → results)
    ├── index.css            # All styles
    ├── components/
    │   ├── HomeScreen.jsx
    │   ├── QuizScreen.jsx
    │   ├── ResultsScreen.jsx
    │   ├── ProgressBar.jsx
    │   ├── SportBadge.jsx
    │   └── SportGuide.jsx
    ├── data/
    │   ├── questions.js     # 12 questions with trait weights per sport
    │   └── sports.js        # 10 sport profiles with guides
    └── logic/
        ├── scoring.js       # Tallies answer weights into sport scores
        └── recommendation.js # Picks top sport and generates match reason
```
