---
title: Carte
description: Comment intégrer une carte dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md` en utilisant la [syntaxe Nunjucks correspondante (Includes)](https://www.11ty.dev/docs/languages/nunjucks/#supported-features).

## Pré-requis

[Voir aussi comment utiliser des données dans eleventy](https://www.11ty.dev/docs/data/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Utilisation

Requiert la déclaration d'un **objet `card`**, au format :
```json
{
  "url": "string",
  "externalUrl": "string",
  "urlDescription": "string",
  "title": "string",
  "description": "string",
  "tags": "string[]",
  "date": "Date",
  "badges": "string[]",
  "imagePath": "string",
  "imageAlt": "string",
  "orientation": "horizontal | vertical"
}
```

Si `card.externalUrl` est utilisé, `card.url` doit être `null`. `card.urlDescription` peut alors être utilisé pour nommer le lien.
`imagePath` est le chemin de l'image dans le système de fichier (et non pas son url dans le site).


### Exemple d'utilisation

```njk
{% raw %}
{% set card = {
  url: "/",
  title: "Qu'est-ce que le Pass Culture et comment l’obtenir ?",
  description: "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
  tags: ["label tag"],
  date: "2023-06-21" | jsDateObject,
  badges: ["label badge"],
  imagePath: "../../../../public/img/placeholder.16x9.png",
  imageAlt: "",
  orientation: "horizontal"
} %}
{% include "components/card.njk" %}
{% endraw %}
```

## Rendu

{% set card = {
    url: "/",
    title: "Qu'est-ce que le Pass Culture et comment l’obtenir ?",
    description: "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
    tags: ["label tag"],
    date: "2023-06-21" | jsDateObject,
    badges: ["label badge"],
    imagePath: "../../../../public/img/placeholder.16x9.png",
    imageAlt: "",
    orientation: "horizontal"
} %}
<div>
    {% include "components/card.njk" %}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}