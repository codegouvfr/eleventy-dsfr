---
title: Pagination
description: Comment utiliser le système de pagination d'eleventy-dsfr ?
date: git Last Modified
tags:
- fonctionnalité
---

`eleventy-dsfr` utilise le [système de pagination d'Eleventy](https://www.11ty.dev/docs/pagination/), par exemple pour les articles de blog.

## Pagination de niveau 2 pour les tags

Pour mettre en place la pagination des articles de blog pour chaque tag, utiliser le filtre `paginateCollectionTags` dans une [fonction de callback `before`](https://www.11ty.dev/docs/pagination/#the-before-callback) dans un cartouche Javascript.
Par exemple, dans le fichier [`content/fr/blog/tags.njk`](https://github.com/codegouvfr/eleventy-dsfr/tree/main/content/fr/blog/tags.njk) :

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
