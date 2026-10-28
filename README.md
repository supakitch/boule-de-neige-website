# Site Boule2neige

Site statique, dix pages, sans étape de build. Ce qui est dans ce dossier est ce qui est servi.

## Structure

- `index.html` et les neuf autres pages à la racine
- `assets/site.css` la feuille unique
- `assets/site.js` la boule de neige au scroll, le bouton vivant, le menu mobile
- `assets/husky-*.webp` les quatre expressions de la mascotte
- `assets/logo-*.svg` le logo horizontal, version claire et sombre
- `assets/og.png` l'image de partage, 1200 par 630
- `robots.txt` et `sitemap.xml`

## Déploiement

Aucune commande de build. L'hébergeur sert la racine telle quelle.
Sur Vercel ou Netlify : framework "Other", build command vide, output directory `.`

## Modifier

Les dix pages partagent le même en-tête, le même pied de page et la même feuille de style.
Une modification de texte se fait dans la page concernée. Une modification de style ou de
navigation se répercute sur les dix.
