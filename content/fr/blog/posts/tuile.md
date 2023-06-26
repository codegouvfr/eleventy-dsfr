---
title: Tuile
description: Comment intégrer une tuile dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md` en utilisant la [syntaxe Nunjucks correspondante (Includes)](https://www.11ty.dev/docs/languages/nunjucks/#supported-features).

## Pré-requis

[Voir aussi comment utiliser des données dans eleventy](https://www.11ty.dev/docs/data/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Utilisation

Requiert la déclaration d'un **objet `tile`**, au format :
```json
{
  "url": "string",
  "externalUrl": "string",
  "title": "string",
  "description": "string",
  "imageSrc": "string"
}
```

Si `tile.externalUrl` est utilisé, `tile.url` doit être `null`.

### Exemple d'utilisation

```njk
{% raw %}
{% set tile = {
  url: "/",
  title: "Titre MD bold",
  description: "Description."
} %}
{% include "components/tile.njk" %}
{% endraw %}
```

## Rendu

{% set tile = {
    url: "/",
    title: "Titre MD bold",
    description: "Description."
} %}
<div>
    {% include "components/tile.njk" %}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tuile){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}