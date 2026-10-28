# Site Boule2neige

Site vitrine de l'agence. Dix pages statiques, aucune étape de build.
Ce qui est dans ce dossier est exactement ce qui est servi en ligne.

## L'agence en une phrase

Boule2neige fait de l'acquisition B2B et rien d'autre : cold email, LinkedIn,
cold calling, ads. Pas de site web, pas de branding, pas de community management.
Tagline : « On remplit ton agenda plus vite qu'une descente de piste noire. »
Maxime Comptier et Camille, cofondateurs.

## Conviction centrale, à ne jamais diluer

Le futur de l'outbound, ce sont les signaux. Rassembler la donnée coûtait trop de
temps, ce verrou a sauté. On scrape, on trie, on enrichit, et le message part au
moment où le besoin naît. **L'IA trouve la donnée, c'est le copywriting qui la
transforme en rendez-vous.** Cette phrase est le coeur du positionnement.

## Charte graphique

| Token | Hex | Usage |
| --- | --- | --- |
| Rose | `#FF93CF` | Couleur de marque, fil rouge, jamais diluée |
| Aubergine | `#311C39` | Texte, fonds sombres. Jamais de noir pur |
| Crème | `#FFF6EB` | Fond clair principal |
| Blush | `#FFE3F2` | Sections alternées |
| Orange | `#E86D2A` | Accents, chiffres, numéros. Avec parcimonie |

Typographies : **Faustina** pour les titres, **Jost** pour le corps,
**Caveat** pour les annotations manuscrites (remplace Just Note, absente de Google Fonts).

## Règles de design, apprises à force de corrections

- **Aucun trait en pointillés**, nulle part. Les séparations entre sections sont
  des cassures de couleur en diagonale, nues. Les filets de tableau sont pleins.
- **Aucun dégradé**, sauf un : le bouton `.btn--live`, dont le centre du dégradé
  radial suit le curseur. C'est une reprise volontaire du site précédent.
- Aucune icône de bibliothèque. À la place, des fragments d'interface réelle.
- Aucune rangée de KPI alignés. Les chiffres sont empilés, de largeurs différentes,
  chacun avec son contexte client.
- Aucune ombre portée floue. Les ombres sont des aplats décalés et nets.
- Les hauteurs de section varient franchement. Jamais tout centré.
- Le husky n'est jamais posé dans un rond sans intention. Quatre expressions
  existent dans `assets/`, chacune a son rôle : clin d'oeil pour accueillir,
  sourire à côté des preuves, sceptique en face des objections, langue tirée sur les CTA.
- Pas de pattes de chien en filigrane. Le sol, c'est de la neige.

## L'élément signature : la boule de neige

Chaque séparation entre deux sections est une pente en diagonale, et une boule de
neige roule dessus, **poussée par le scroll et pas par un minuteur**. Elle grossit
d'une pente à la suivante et avale au passage une étiquette du pipeline :
ICP, Signaux, Listes, Séquence, Réponses, RDV posé, Client signé.
C'est l'effet boule de neige rendu littéral. Ne pas y toucher sans raison.

Le code est dans `assets/site.js`. Chaque pente est un `<div class="slope" data-slope>`
avec trois variables : `--from`, `--to`, `--size`, plus `--catch` pour la position
de l'étiquette. Le triangle de `.slope__fill` déborde d'un pixel en haut et en bas,
sinon l'anticrénelage laisse une couture visible sur toute la largeur.

## Structure

- Dix fichiers `.html` à la racine, un par page
- `assets/site.css`, la feuille unique, partagée par les dix
- `assets/site.js`, la boule au scroll, le bouton vivant, le menu mobile
- `assets/husky-*.webp`, `assets/logo-*.svg`, `assets/og.png`, `assets/favicon.svg`
- `robots.txt`, `sitemap.xml`

En-tête, pied de page et feuille de style sont dupliqués dans les dix pages.
**Une modification de navigation, de pied de page ou de bandeau doit être répercutée
sur les dix fichiers.** Un `sed -i` sur `*.html` fait le travail.

## Pages

| Fichier | Intention |
| --- | --- |
| `index.html` | Synthèse, renvoie vers les pages profondes |
| `agenda-vide.html` | Le carnet se vide, rien pour le remplir |
| `prospection-sans-resultat.html` | On envoie déjà, rien ne vient. Six causes |
| `pas-de-base-de-donnees.html` | L'objection la plus fréquente, la moins bloquante |
| `recruter-ou-externaliser.html` | Comparatif honnête, y compris quand recruter gagne |
| `signaux.html` | La page pilier, la conviction |
| `methode.html` | Quatre étapes, avec les livrables |
| `resultats.html` | Trois cas, avec ce qui a raté en chemin |
| `a-propos.html` | Métier étroit, convictions, ce qu'on ne fera pas |
| `audit.html` | Le calendrier Cal ID en haut, à droite du titre |

Le principe du sitemap : **une page par phrase que le prospect prononce en réunion**,
pas une page par ligne de prestation.

## Calendrier Cal ID

Embed inline sur `audit.html`, lien `maxime-comptier/reunion-30-minutes`,
origine `https://cal.id`. Thème forcé en `light`, `hideEventTypeDetails` à true
parce que la colonne de gauche dit déjà la durée et le format.

`cal-brand` en light doit rester sur `#311C39`. Avec le crème, le bouton Confirmer
devient invisible. Le bloc `cssVarsPerTheme` complet n'est pas généré par Cal,
il a été écrit à la main : ne pas le remplacer par un code fraîchement généré.

Un repère statique s'affiche tant que Cal n'a pas injecté son iframe,
et disparaît tout seul dès qu'elle arrive.

## À remplacer avant de retirer le bandeau

Le bandeau aubergine en haut des dix pages signale que le contenu est d'exemple.
**Il ne doit pas être retiré tant que ces trois blocs n'ont pas de vrai contenu :**

1. Les trois cas clients de `resultats.html`
2. Les réponses LinkedIn de la section preuve sur `index.html`
3. Les chiffres des pages problème

Les publier tels quels reviendrait à afficher de faux témoignages.

Autre trou : le paragraphe de Camille sur `a-propos.html` contient une consigne
et non un texte.

## Déploiement

Aucune commande de build. Framework « Other », build command vide,
output directory `.`

`./deploy.sh "ce que j'ai changé"` ajoute, commit et pousse.

## Façon d'écrire de Maxime

Direct et concret, métaphores ski et montagne, chaleureux mais orienté résultats.
Jamais de tiret long. Jamais les mots « galère », « trucs », « bosse ».
Les nombres s'écrivent sans décimale.
