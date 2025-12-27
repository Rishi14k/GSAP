# K72-clone ✅

A small React + GSAP demo project built with Vite that re-creates the K72 landing/portfolio animations and layout.

---

## 🚀 Quick start

**Prerequisites**

- Node.js 16+ (LTS recommended)

**Install**

```bash
npm install
```

**Run development server**

```bash
npm run dev
# opens at http://localhost:5173 by default
```

**Build for production**

```bash
npm run build
```

**Preview production build**

```bash
npm run preview
```

**Lint**

```bash
npm run lint
```

---

## 🔧 Scripts (from `package.json`)

- `dev` — start Vite dev server
- `build` — build production bundles
- `preview` — preview production build locally
- `lint` — run ESLint

---

## 📦 Main dependencies

- **React** 19
- **Vite** (dev server & bundler)
- **GSAP** (+ `@gsap/react`) — animations
- **TailwindCSS** — utility-first styling
- **react-router-dom** — routing
- **react-icons** — icons

---

## 🗂 Project structure

```
K72-clone/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ fonts/
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ components/
   │  ├─ Navbar/
   │  ├─ Home/
   │  └─ Projects/
   ├─ context/
   └─ pages/
```

---

## 💡 Notes & tips

- Drop static assets (fonts, images) inside `public/` and reference them directly from HTML/CSS.
- Tailwind is included — look for `tailwind.config.js` in the project root (if present) to tweak settings.
- Animations live in components (see `src/components/`) and use GSAP; review `@gsap/react` hooks for integration patterns.
- Keep components small and share logic through `context/` for global state like navigation.

---

## 🤝 Contributing

Contributions are welcome — open issues or PRs to improve animation fidelity, accessibility, or structure.

**Suggested workflow**

1. Fork the repo
2. Create a feature branch
3. Make changes and add relevant tests (if any)
4. Open a PR with a clear description

---

## 📜 License

MIT — feel free to use and adapt.
