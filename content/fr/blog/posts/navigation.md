---
title: Navigation
description: Comment utiliser le système de navigation d'eleventy-dsfr ?
date: git Last Modified
tags:
- fonctionnalité
---

`eleventy-dsfr` utilise le [système de navigation d'Eleventy](https://www.11ty.dev/docs/plugins/navigation/).

## Navigation de niveau 2

Pour mettre en place une navigation de niveau 2, positionner la variable `parent` avec la valeur de la `key` du parent.
Par exemple, dans le fichier [`content/fr/about/index.md`](https://github.com/codegouvfr/eleventy-dsfr/tree/main/content/fr/about/index.md) :

```yaml
---
eleventyNavigation:
  key: Présentation
  parent: À propos
  order: 1
---
```

Et dans le fichier [`content/fr/about.md`](https://github.com/codegouvfr/eleventy-dsfr/tree/main/content/fr/about.md) :

```yaml
---
eleventyNavigation:
  key: À propos
  order: 3
permalink: false
---
```

**Note :** Cette page n'est pas référencée pour la génération (`permalink: false`) car dans ce cas, elle ne sert que de conteneur de premier niveau pour la navigation.
