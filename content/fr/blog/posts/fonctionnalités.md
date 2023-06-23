---
title: Fonctionnalités
description: Comment utiliser certaines des fonctionnalités d'eleventy-dsfr ?
date: git Last Modified
tags:
  - contenu
  - i18n
  - navigation
  - pagination
---
## i18n

[Voir le système d'i18n d'Eleventy](https://www.11ty.dev/docs/i18n/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

Pour traduire une chaîne de caractères localisée dans une page, utiliser le filtre `i18n` :

```njk
{% raw %}
{{ "filter_by_tag" | i18n }}
{% endraw %}
```

Pour internationaliser une page : la nommer de la même manière dans toutes les langues, et positionner la variable `slugOverride` du cartouche si besoin.

```yaml
---
slugOverride: a propos
---
```

Par exemple, pour la page [À propos](/fr/a-propos), le fichier en français est [`content/fr/about/index.md`](content/fr/about/index.md), le fichier en anglais est [`content/en/about/index.md`](content/en/about/index.md).
L'url en français est [/fr/a-propos](/fr/a-propos), l'url en anglais est [/en/about](/en/about).

## Navigation

[Voir le système de navigation d'Eleventy](https://www.11ty.dev/docs/plugins/navigation/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

Pour mettre en place une navigation de niveau 2, positionner la variable `parent` avec la valeur de la `key` du parent.
Par exemple, dans le fichier [`content/fr/about/index.md`](content/fr/about/index.md) :

```yaml
---
eleventyNavigation:
  key: Présentation
  parent: À propos
  order: 1
---
```

Et dans le fichier [`content/fr/about.md`](content/fr/about.md) :

```yaml
---
eleventyNavigation:
  key: À propos
  order: 3
permalink: false
---
```

**Note :** Cette page n'est pas référencée pour la génération (`permalink: false`) car dans ce cas, elle ne sert que de conteneur de premier niveau pour la navigation.

## Pagination

[Voir le système de pagination d'Eleventy](https://www.11ty.dev/docs/pagination/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

Pour mettre en place la pagination pour les tags, utiliser le filtre `paginateCollectionTags` dans une fonction de [callback `before`](https://www.11ty.dev/docs/pagination/#the-before-callback) dans un cartouche Javascript.
Par exemple, dans le fichier [`content/fr/blog/tags.njk`](content/fr/blog/tags.njk) :

```javascript
---js
  {
    pagination: {
      data: "collections.posts",
      size: 1,
      alias: "tag",
      before: function(paginationData, fullData) {
        return this.paginateCollectionTags(this.filterCollectionLang(paginationData, fullData.lang), 6);
      }
    }
  }
---
```