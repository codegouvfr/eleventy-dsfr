---
title: Citation
description: Comment intégrer une citation dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Utilisation

### Exemple d'utilisation dans un fichier Markdown `.md`

Seul le texte est disponible.

```md
:::quote
« Lorem [...] elit ut. »
:::
```

### Exemple d'utilisation dans un fichier Nunjucks `.njk`

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component('quote', {
    sourceUrl: "/",
    text: "Lorem [...] elit ut.",
    author: "Auteur",
    source: "Ouvrage"
}) }}
{% endraw %}
```

## Rendu

{% from "components/component.njk" import component with context %}
{{ component('quote', {
    sourceUrl: "/",
    text: "Lorem [...] elit ut.",
    author: "Auteur",
    source: "Ouvrage"
}) }}

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/citation){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}