![build](https://img.shields.io/github/actions/workflow/status/codegouvfr/eleventy-dsfr/11ty-gh-pages.yml?label=deployed%20to%20gh-pages)

# eleventy-dsfr

Un dépôt pour démarrer un site statique au [DSFR](https://www.systeme-de-design.gouv.fr/) avec le
générateur [Eleventy](https://www.11ty.dev/).

## Prise en main

1. Cloner le dépôt :

```
git clone https://github.com/codegouvfr/eleventy-dsfr.git my-site-name
```

2. Naviguer dans le dossier :

```
cd my-site-name
```

3. Installer les dépendances :

```
npm install
```

4. Exécuter Eleventy :

Générer un livrable pour la production :

```
npx @11ty/eleventy
```

Ou construire un livrable sur le serveur de développement local :

```
npx @11ty/eleventy --serve
```

Ou exécuter un [mode de débogage](https://www.11ty.dev/docs/debugging/).

## Réutilisation

- Modifier le fichier `_data/metadata.js` pour renseigner les informations du site.
- Compléter les pages obligatoires : `content/fr/accessibilite`, `content/fr/donnees-personnelles`, `content/fr/mentions-legales`
- Ajouter du contenu dans le dossier `content` :
  - Voir `content/fr/about/index.md` pour un exemple de page standard en Markdown.
  - Nommer la page ou le dossier en anglais et réécrire l'url en français via le mot-clé `slugOverride` :
    ```markdown
    ---
    title: À propos
    slugOverride: a propos
    ---
    ```
  - Utiliser l'une des mises en page via le mot-clé `layout` :
    - `_includes/layouts/page.njk` pour une page standard
    - `_includes/layouts/post.njk` pour un article de blog
    ```markdown
    ---
    layout: page.njk
    title: Un exemple de page
    ---
    # {{ title }}
    ```
  - Inclure un composant :
    - **Accordéon** : renseigner des `accordionItems` et inclure le composant `acccordionsgroup`
    ```html
      {% set accordionItems = [{
          title: "Intitulé accordéon",
          content: "<p>Contenu</p>"
      }] %}
      {% include "components/accordionsgroup.njk" %}
      ```
    - **Fil d'Ariane** : renseigner les `segments` et inclure le composant `breadcrumb`
      ```markdown
      ---
      segments:
        - url: /blog/
          title: Blog
      ---
      {% include "components/breadcrumb.njk" %}
      ```
    - **Carte** : renseigner une `card` et inclure le composant `card`
      ```html
      {% set card = {
          url: "/blog/firstpost/",
          title: "Mon article",
          description: "Un article comme ça",
          tags: ["random"],
          date: "2018-05-01",
          imagePath: "[OPTIONNEL]",
          imageAlt: "[OPTIONNEL si pas d'image]"
      } %}
      {% include "components/card.njk" %}
      ```
    - **Contenu image** : renseigner une `image` et inclure le composant `imagecontent`
      ```html
      {% set image = { path: "./possum.png", alt: "A possum" } %}
      {% include "components/imagecontent.njk" %}
      ```
    - **Pagination** : mettre en place la `pagination` et inclure le composant `pagination`
      ```md
      ---
      pagination:
        data: collections.posts
        size: 4
      permalink: "different/{{ page_prefix }}{{ pagination.pageNumber }}/index.html"
      ---
      {% include "components/pagination.njk" %}
      ```
    - **Groupe de tags** : renseigner des `tags` et inclure l'un des composants `taggroup`
      ```markdown
      {% set tags = collections.all | getAllTags %}
      {% include "components/taggroup.njk" %}
      ```
- Ajouter un nouvel article au blog :
  - Ajouter un nouveau fichier dans `content/blog/[lang]/blog/posts`.
  - Activer le drapeau `draft` pour éviter de le publier :
  ```markdown
  ---
  draft: true
  ---
  ```
  - Renseigner `image` pour afficher une bannière en haut de l'article :
  ```markdown
   ---
   image:
     src: ./possum.png
     alt: A possum
   ---
   ```
- Ajouter une page au menu de navigation (gérée via le plugin `eleventy-navigation`) : renseigner le mot-clé `eleventyNavigation`
  ```markdown
   ---
   eleventyNavigation:
     key: Accueil
     order: 1
   ---
   ```
  - Pour une navigation de niveau 2, utiliser le mot-clé `parent`.

### HOW-TOs

### Ajouter une nouvelle traduction pour le blog

- Dupliquer le dossier `content/fr/blog` dans le répertoire de la nouvelle traduction.
- Vider le sous-dossier `posts` sauf `posts.11tydata.js`.
- Remplacer les appels aux collections `posts_fr` et `tags_fr_4x4` dans les fichiers `index.njk`, `tags.njk` et `tags_index.njk`
par des appels aux nouvelles collections localisées automatiquement créées `posts_[lang]` et `tags_[lang]_4x4`.

### Développement

- Modifier le fichier `eleventy.config.js` pour configurer les paramètres d'Eleventy différemment.
- Ajouter des composants du DSFR dans le dossier `_includes/components` et des [mises en page](https://www.11ty.dev/docs/layouts/) dans le
  dossier `_includes/layouts`.
  - Indiquer les données nécessaires au composant dans un commentaire en début de fichier.
- Ajouter des chaînes de caractères localisées dans le dossier `_data/i18n/[lang]/index.js`.
  - Pour ajouter une nouvelle traduction, ajouter un dossier `[lang]` dans `content`, un nouveau fichier `_data/i18n/[lang]/index.js` et l'inclure dans `_data/i18n/index.js`.
- Ajouter des styles personnalisés et des images dans le dossier `/public`.
    - Celui-ci sera copié dans le dossier de sortie (via `addPassthroughCopy` dans le fichier `eleventy.config.js`).
      Cela signifie que `./public/css/*` persistera dans `./_site/css/*` après la construction du livrable.
- Compléter le README. :)

## Fonctionnalités

- DSFR :
  - Installation et mise à jour automatique via `npm`.
  - Composants déjà implémentés :
    - [Accordéon](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon)
    - [Fil d'Ariane](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane)
    - [Carte](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte)
    - [Paramètres d'affichage](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/parametre-d-affichage)
    - [Pied de page](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pied-de-page)
    - [En-tête](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete)
    - [Contenu image](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/contenu-medias)
    - [Navigation principale](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/navigation-principale)
    - [Lettre d'information et réseaux sociaux](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lettre-d-information-et-reseaux-sociaux)
    - [Pagination](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pagination)
    - [Groupe de tags](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tag)
    - [Sélecteur de langue](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/selecteur-de-langue)
- a11y et responsivity : Respecte les recommandations du DSFR.
- i18n :
  - Prise en charge de l'internationalisation des textes et contenus.
- Pages déjà générées :
    - Pages d'accueil, À propos, Contact (en français et en anglais).
    - [Flux RSS pour Atom et JSON](https://www.11ty.dev/docs/plugins/rss/)
    - Plan du site et `sitemap.xml`
    - Page non trouvée (404)
    - Les pages obligatoires liées aux obligations légales : “accessibilité : non/partiellement/totalement conforme”, mentions légales, données personnelles et gestion des cookies.

## Démos

Voir la [GitHub Pages](https://codegouvfr.github.io/eleventy-dsfr/fr/) correspondante.

## Déploiement

- [Configurer la redirection](https://www.11ty.dev/docs/i18n/#distinct-urls-using-implied-default-language)
  de toutes les pages des URLs dont la langue est celle par défaut.
- Read more about [Deploying an Eleventy project](https://www.11ty.dev/docs/deployment/) to the web.

  _TODO_

### GitHub Pages

En cas d'erreur lors du build :
```
Error: Get Pages site failed
Error: HttpError: Not Found
```
Essayer [cette configuration](https://stackoverflow.com/a/73967433).
