# PNIA - Prix Néerlandais de l’Innovation Agricole
NuxtJS website for prix national de l'agriculture

## Description
Ce projet est un site web pour le Prix Néerlandais de l’Innovation Agricole, développé avec Nuxt 3. Il comprend une page d'accueil avec une vidéo YouTube et une intégration Facebook, ainsi qu'une interface d'administration pour gérer les textes du site.

## Fonctionnalités
- Page d'accueil avec vidéo YouTube et intégration Facebook
- Page d'inscription avec intégration du formulaire Google Forms
- Interface d'administration protégée par mot de passe pour gérer les textes du site
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
- `pages/` - Contient les pages du site (index.vue, admin.vue, inscription.vue, login.vue)
- `components/` - Composants réutilisables (AdminForm.vue, LoginForm.vue)
- `layouts/` - Layouts pour les pages (default.vue)
- `public/` - Fichiers statiques et données JSON
- `server/` - API endpoints pour la gestion des données
- `assets/` - Styles CSS et autres ressources

## Gestion des textes
Les textes du site sont stockés dans le fichier `public/data/site-data.json` et peuvent être modifiés via l'interface d'administration accessible à l'URL `/admin` après authentification.

## Système de feedback utilisateur
Le site intègre un système de feedback permettant aux utilisateurs de soumettre des commentaires, signaler des bugs ou suggérer des améliorations. Ce système inclut une fonctionnalité de capture d'écran.

### Configuration du système de feedback
1. Créez un fichier `.env` à la racine du projet en vous basant sur `.env.example`
2. Configurez les paramètres SMTP pour l'envoi d'emails:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=votre-email@gmail.com
   SMTP_PASS=votre-mot-de-passe-d-application
   ```
   
   > **Note**: Pour Gmail, vous devrez utiliser un "mot de passe d'application" plutôt que votre mot de passe normal.

3. Les feedbacks seront envoyés à l'adresse jeanluc@houedanou.com avec les captures d'écran en pièce jointe.

## Accès à l'administration
L'interface d'administration est protégée par un mot de passe. Pour y accéder :
1. Cliquez sur le bouton "Administration" dans la navigation
2. Entrez le mot de passe requis
3. Vous serez redirigé vers l'interface d'administration où vous pourrez modifier les textes du site
