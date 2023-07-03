---
title: Mise en avant
description: Comment intégrer une mise en avant dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Utilisation

### Exemple d'utilisation dans un fichier Markdown `.md`

Seuls le titre et la description sont disponibles.

```md
:::callout Titre mise en avant
Contenu **Mardown**
:::
```

### Exemple d'utilisation dans un fichier Nunjucks `.njk`

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("callout", {
    title: "Titre mise en avant",
    description: "Contenu <strong>HTML</strong>",
    link: {
        url: "/",
        title: "Label bouton MD"
  }
}) }}
{% endraw %}
```

## Rendu

{% from "components/component.njk" import component with context %}
{{ component("callout", {
    title: "Titre mise en avant",
    description: "Contenu <strong>HTML</strong>",
    link: {
        url: "/",
        title: "Label bouton MD"
    }
}) }}

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/mise-en-avant){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}