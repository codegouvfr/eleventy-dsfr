![build](https://img.shields.io/github/actions/workflow/status/codegouvfr/eleventy-dsfr/11ty-gh-pages.yml?label=deployed%20to%20gh-pages)

# eleventy-dsfr

Un dépôt pour démarrer un site statique au [DSFR](https://www.systeme-de-design.gouv.fr/) avec le
générateur [Eleventy](https://www.11ty.dev/).

## Fonctionnalités

- **Style** :
    - DSFR :
        - Installation et mise à jour automatique via `npm`.
        - [Voir les composants déjà implémentés](_includes/components)
    - [Voir les mises en pages déjà implémentées](_includes/layouts)
- **a11y et responsivity** : Respecte les recommandations du DSFR.
- **i18n** : Prise en charge de l'internationalisation des textes et contenus via plusieurs filtres et le [système d'i18n d'Eleventy](https://www.11ty.dev/docs/i18n/).
- **Navigation** : Utilise le [système de navigation d'Eleventy](https://www.11ty.dev/docs/plugins/navigation/) et gère la navigation de second niveau.
- **Syntaxe markdown** : Améliorée via l'ajout de [conteneurs personnalisés](./markdown-custom-containers.js).
- **Images** : Utilise l'[utilitaire d'image d'Eleventy](https://www.11ty.dev/docs/plugins/image/) pour traiter les images (par défaut pour certains composants, par exemple le composant [`card.njk`](_includes/components/card.njk)).
- **Recherche** : Utilise [pagefind](https://pagefind.app/) pour la recherche.
- **Pagination** : Utilise le [système de pagination d'Eleventy](https://www.11ty.dev/docs/pagination/) et gère la pagination de second niveau.
- **Flux RSS** : Utilise le [plugin RSS d'Eleventy](https://www.11ty.dev/docs/plugins/rss/).
- **Calendrier** : Utilise la bibliothèque [ics](https://www.npmjs.com/package/ics) pour générer un calendrier [`calendar.ics`](https://codegouvfr.github.io/eleventy-dsfr/calendar.ics) à la racine du site, à partir du fichier [`events.json`](_data/events.json) (voir aussi [son format](https://github.com/adamgibbons/ics#attributes)).
- **Mesure d'audience** : Intègre la solution [matomo](public/js/matomo.js).
- **Pages déjà générées** :
    - Pages d'accueil, À propos, section Blog (en français et en anglais).
    - Flux RSS pour Atom et JSON
    - Plan du site et `sitemap.xml`
    - Page non trouvée (404)
    - Les pages obligatoires liées aux obligations légales : “accessibilité : non/partiellement/totalement conforme”, mentions légales, données personnelles et gestion des cookies.
    
## Documentation

La documentation est disponible dans [`content/fr/blog/posts`](content/fr/blog/posts) ou directement sur le [site de démonstration](https://codegouvfr.github.io/eleventy-dsfr/fr/blog).

Commencer par l'article [Prise en main](https://codegouvfr.github.io/eleventy-dsfr/fr/blog/prise-en-main/) (ou [`prise-en-main.md`](content/fr/blog/posts/prise-en-main.md)).

## Démonstration et réutilisations

- Pour une démonstration, voir la [GitHub Pages](https://codegouvfr.github.io/eleventy-dsfr/fr/) correspondante.
- `eleventy-dsfr` est utilisé pour le site [code.gouv.fr](https://code.gouv.fr).

## Licence

Le dépôt est publié sous licence MIT pour le code et sous licence
Etalab 2.0 pour les autres contenus.

Il est maintenu par la [mission logiciels libres](https://code.gouv.fr/) de la DINUM.
