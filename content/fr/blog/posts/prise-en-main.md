---
title: Prise en main
description: Comment réutiliser eleventy-dsfr et l'adapter à ses besoins ?
tags:
  - HOWTO
---
## Installation

**Cloner le dépôt** :

```bash
git clone https://github.com/codegouvfr/eleventy-dsfr.git my-site-name
```

**Naviguer dans le dossier** :

```bash
cd my-site-name
```

**Installer les dépendances** :

```bash
npm install
```

**Exécuter Eleventy** :

Construire un livrable, indexé avec pagefind pour la recherche :

```bash
npm run build
```

L'exécuter sur le serveur de développement local :

```bash
npm start
```

Ou exécuter un [mode de débogage](https://www.11ty.dev/docs/debugging/).

## Réutilisation

- Modifier les fichiers [`_data/metadata.js`](_data/metadata.js) et [`_data/data.js`](_data/data.js) pour renseigner les informations du site.
- Modifier le fichier [`package.json`](package.json) pour modifier les informations du dépôt.
- Compléter les pages obligatoires : [`content/fr/accessibility`](content/fr/accessibility/index.md), [`content/fr/personal-data`](content/fr/personal-data/index.md), [`content/fr/legal`](content/fr/legal/index.md).

## Développement

- Modifier le fichier [`eleventy.config.js`](./eleventy.config.js) pour configurer les paramètres d'Eleventy différemment.
- Ajouter des composants du DSFR dans le dossier [`_includes/components`](_includes/components) et des [mises en page](https://www.11ty.dev/docs/layouts/) dans le
  dossier [`_includes/layouts`](_includes/layouts).
  - Ajouter de nouveaux conteneurs markdown dans le fichier [`markdown-custom-containers.js`](./markdown-custom-containers.js).
    
[Voir aussi la documentation des composants](/fr/blog/tags/composant/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

- Ajouter des chaînes de caractères localisées dans le dossier `_data/i18n/[lang]/index.js`.
    - Pour ajouter une nouvelle traduction, ajouter un dossier `[lang]` dans [`content`](content), un nouveau fichier `_data/i18n/[lang]/index.js` et l'inclure dans [`_data/i18n/index.js`](_data/i18n/index.js).
- Ajouter des styles personnalisés et des images dans le dossier [`public`](public).
    - Celui-ci sera copié tel quel dans le dossier de sortie. Cela signifie que `./public/css/*` persistera dans `./_site/css/*` après la construction du livrable.
- Compléter le [README](README.md) et la [documentation](content/fr/blog/posts). 😀

## Ajout de contenu

[Voir la documentation des fonctionnalités et du Markdown](/fr/blog/tags/contenu/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

[Voir les tutoriels](/fr/blog/tags/howto/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Déploiement

- Voir un [exemple de worklow de déploiement sur GitHub Pages](.github/workflows/11ty-gh-pages.yml) sur la branche `gh-pages`.
    - En cas d'erreur lors du build :
```bash
Error: Get Pages site failed
Error: HttpError: Not Found
```
Essayer [cette configuration](https://stackoverflow.com/a/73967433).
- _[OPTIONNEL]_ [Configurer la redirection](https://www.11ty.dev/docs/i18n/#distinct-urls-using-implied-default-language)
  de toutes les URLs des pages dont la langue est celle par défaut.
