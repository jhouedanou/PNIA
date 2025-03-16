# PNIA - Prix National d'Excellence 2025
NuxtJS website for prix national de l'agriculture

## Description
Ce projet est un site web pour le Prix National d'Excellence 2025, développé avec Nuxt 3. Il comprend une page d'accueil avec une vidéo YouTube et une intégration Facebook, ainsi qu'une interface d'administration pour gérer les textes du site.

## Fonctionnalités
- Page d'accueil avec vidéo YouTube et intégration Facebook
- Interface d'administration pour gérer les textes du site
- Stockage des données dans des fichiers JSON
- Responsive design avec Bootstrap 5

## Prérequis
- Node.js 16.x ou supérieur
- npm ou yarn

## Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## Structure du projet
- `pages/` - Contient les pages du site (index.vue, admin.vue)
- `components/` - Composants réutilisables (AdminForm.vue)
- `layouts/` - Layouts pour les pages (default.vue)
- `public/` - Fichiers statiques et données JSON
- `server/` - API endpoints pour la gestion des données
- `assets/` - Styles CSS et autres ressources

## Gestion des textes
Les textes du site sont stockés dans le fichier `public/data/site-data.json` et peuvent être modifiés via l'interface d'administration accessible à l'URL `/admin`.
