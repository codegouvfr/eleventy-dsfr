# eleventy-dsfr

Un dépôt pour démarrer un site statique au [DSFR](https://www.systeme-de-design.gouv.fr/) avec le
générateur [Eleventy](https://www.11ty.dev/).

## Prise en main

1. Cloner le dépôt :

```
git clone https://github.com/TODO.git my-site-name
```

2. Naviguer dans le dossier :

```
cd my-site-name
```

3. Installer les dépendances :

```
npm install
```

4. Modifier le fichier `_data/metadata.js` pour renseigner les informations du site.
    - Ansi que le fichier `_data/navigationLinks.js` pour remplacer et/ou compléter les liens du menu de navigation.
    - Compléter les pages obligatoires : `content/fr/accessibilite`, `content/fr/donnees-personnelles`, `content/fr/mentions-legales`
5. Exécuter Eleventy :

Générer un livrable pour la production :

```
npx @11ty/eleventy
```

Ou construire un livrable sur le serveur de développement local :

```
npx @11ty/eleventy --serve
```

Ou exécuter un [mode de débogage](https://www.11ty.dev/docs/debugging/).

## Implémentation et développement

- Ajouter du contenu dans le dossier `content`.
    - `content/fr/about/index.md` est un exemple de page.
- Modifier le fichier `eleventy.config.js` pour configurer les paramètres d'Eleventy différemment.
- Ajouter des composants du DSFR dans le dossier `_includes/components` et des mises en page dans le
  dossier `_includes/layouts`.
  - Ce projet utilise trois [mises en page Eleventy](https://www.11ty.dev/docs/layouts/):
    - `_includes/layouts/base.njk` : la structure HTML de plus haut niveau
    - `_includes/layouts/home.njk` : le modèle de la page d'accueil (englobé dans `base.njk`)
    - `_includes/layouts/post.njk` : un modèle d'article de blog (englobé dans `base.njk`)
- Ajouter des chaînes de caractères localisées dans le dossier `_data/i18n`.
- Ajouter des styles personnalisés et des images dans le dossier `/public`.
    - Celui-ci sera copié dans le dossier de sortie (via `addPassthroughCopy` dans le fichier `eleventy.config.js`).
      Cela signifie que `./public/css/*` persistera dans `./_site/css/*` après la construction du livrable.

## Fonctionnalités

- DSFR :
  - Installation et mise à jour automatique via `npm`.
  - Composants déjà implémentés :
    - [Fil d'Ariane](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane)
    - [Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/parametre-d-affichage)
    - [Pied de page](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pied-de-page)
    - [En-tête](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete)
    - [Navigation principale](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/navigation-principale)
    - [Lettre d'information et réseaux sociaux](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lettre-d-information-et-reseaux-sociaux)
    - [Sélecteur de langue](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/selecteur-de-langue)
- a11y et responsivity : Respecte les recommandations du DSFR.
- i18n :
  - Prise en charge de l'internationalisation des contenus et des textes.
- Pages déjà générées :
    - Pages d'accueil, À propos, Contact (en français et en anglais).
    - [Flux RSS pour Atom et JSON](https://www.11ty.dev/docs/plugins/rss/)
    - Plan du site et `sitemap.xml`
    - Page non trouvée (404)
    - Les pages obligatoires liées aux obligations légales : “accessibilité : non/partiellement/totalement conforme”, mentions légales, données personnelles et gestion des cookies.

## Demos

_TODO_

## Déploiement

- [Configurer la redirection](https://www.11ty.dev/docs/i18n/#distinct-urls-using-implied-default-language)
  de toutes les pages des URLs dont la langue est celle par défaut.
  
_TODO_

- Read more about [Deploying an Eleventy project](https://www.11ty.dev/docs/deployment/) to the web.
