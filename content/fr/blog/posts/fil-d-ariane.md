---
title: Fil d'Ariane
description: Comment intégrer un fil d'Ariane dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Utilisation

### Exemple d'utilisation dans un fichier Nunjucks `.njk`

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("breadcrumb", {
    segments: [{
        url: "/blog/",
        title: "Blog"
    }]
}) }}
{% endraw %}
```

### Exemple d'utilisation dans un article de blog ou une page

```yaml
{% raw %}
---
segments:
    - url: "/blog/"
    - title: "Blog"
showBreadcrumb: true
---
{% endraw %}
```

[Voir aussi comment utiliser des données dans Eleventy](https://www.11ty.dev/docs/data/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Rendu

{% from "components/component.njk" import component with context %}
{{ component("breadcrumb", {
    segments: [{
        url: "/blog/",
        title: "Blog"
    }]
}) }}

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}