# Browser Extension Manager UI

## 📖 À propos du projet

Ce projet a initialement été créé dans le cadre de ma formation à **React** et **TypeScript**. L'objectif était de construire une interface de gestion d'extensions de navigateur pour mettre en pratique les concepts fondamentaux de React (composants, hooks, gestion d'état) ainsi que le typage avec TypeScript.

Par la suite, j'ai enrichi le projet en y intégrant :
- ✅ **Tests unitaires et d'intégration** avec Vitest et React Testing Library
- ✅ **Tests end-to-end** avec Playwright
- ✅ **Pipeline CI/CD** avec GitHub Actions pour exécuter automatiquement les tests à chaque push

## 🚀 Technologies utilisées

- **React** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **Vitest** - Tests unitaires
- **Playwright** - Tests end-to-end
- **pnpm** - Gestionnaire de packages

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build de production
pnpm build
```

## 🧪 Tests

```bash
# Lancer les tests unitaires
pnpm test

# Lancer les tests end-to-end
pnpm test:e2e

# Générer un rapport de tests
pnpm playwright show-report
```

