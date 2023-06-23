---
title: Fil d'Ariane
description: Comment intégrer un fil d'Ariane dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md` en utilisant la [syntaxe Nunjucks correspondante (Includes)](https://www.11ty.dev/docs/languages/nunjucks/#supported-features).

## Pré-requis

[Voir aussi comment utiliser des données dans eleventy](https://www.11ty.dev/docs/data/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Utilisation

Requiert la déclaration d'un **objet `segments`** (tableau), au format :
```json
[
  {
    "url": "string",
    "title": "string"
  }
]
```

### Exemple d'utilisation

```njk
{% raw %}
{% set segments = [{
  url: "/blog/",
  title: "Blog"
}] %}
{% include "components/breadcrumb.njk" %}
{% endraw %}
```

## Rendu

{% set segments = [{
    url: "/blog/",
    title: "Documentation"
}] %}
<div>
    {% include "components/breadcrumb.njk" %}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}