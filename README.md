# Chandra Bhushan Chaudhary — Portfolio

Modern dark-themed personal portfolio built with **React + Vite**.

Live demo (after deploy): `https://YOUR_USERNAME.github.io/portfolio`

---

## Features

- Dark theme with indigo/purple accents
- Fully responsive (mobile + desktop)
- Smooth scroll navigation
- Detailed project cards with live links & tech tags
- Experience, Skills, Education & Contact sections
- Fast Vite build

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

---

## Deploy to GitHub Pages (same way Anand's portfolio is hosted)

### 1. Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or any name)
3. Keep it **Public**
4. Do **not** initialize with README
5. Click **Create repository**

### 2. Push your code

```bash
cd portfolio

git init
git add .
git commit -m "Initial portfolio commit"

# Replace YOUR_USERNAME with your GitHub username
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Install gh-pages & configure

Already included in `package.json`. Just install:

```bash
npm install
```

Update `vite.config.js` base path if your repo name is different:

```js
base: '/portfolio/',   // must match your repo name
```

Also update `homepage` in `package.json`:

```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

### 4. Deploy

```bash
npm run deploy
```

This builds the project and pushes the `dist` folder to the `gh-pages` branch.

### 5. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select branch: `gh-pages` and folder: `/ (root)`
3. Click **Save**
4. Wait 1–2 minutes
5. Your site will be live at:  
   `https://YOUR_USERNAME.github.io/portfolio`

---

## Alternative: Deploy with GitHub Actions (optional)

You can also use the official Vite GitHub Pages guide, but the `gh-pages` method above is the simplest and matches how many React portfolios (including the reference one) are hosted.

---

## Customize

| File | What to change |
|------|----------------|
| `src/App.jsx` | Name, bio, projects, skills, links |
| `src/index.css` | Colors, fonts, spacing |
| `vite.config.js` | `base` path for GitHub Pages |
| `package.json` | `homepage` URL |

Replace placeholder GitHub / LinkedIn links with your real profiles.

---

## Tech Stack

- React 19
- Vite 6
- Pure CSS (no Tailwind dependency for simplicity)
- Google Fonts (Inter + Space Grotesk)

Built for Chandra Bhushan Chaudhary · Laravel Developer
