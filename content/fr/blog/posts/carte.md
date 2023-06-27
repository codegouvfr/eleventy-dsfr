---
title: Carte
description: Comment intégrer une carte dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Exemple d'utilisation

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component('card', {
    url: "/",
    title: "Intitulé carte",
    description: "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
    tags: ["label tag"],
    date: "2023-06-21" | jsDateObject,
    badges: ["label badge"],
    image: {
        path : "../../../../public/img/placeholder.16x9.png",
        alt: ""
    },
    orientation: "horizontal"
}) }}
{% endraw %}
```

Le format complet de l'objet en paramètre est le suivant :

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
  "image": {
    "path": "string",
    "alt": "string"
  },
  "orientation": "horizontal | vertical"
}
```

Si `card.externalUrl` est utilisé, `card.url` doit être `null`. `card.urlDescription` peut alors être utilisé pour nommer le lien.
`imagePath` est le chemin de l'image dans le système de fichier (et non pas son url dans le site).

## Rendu

{% from "components/component.njk" import component with context %}
<div>
{{ component('card', {
    url: "/",
    title: "Intitulé carte",
    description: "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
    tags: ["label tag"],
    date: "2023-06-21" | jsDateObject,
    badges: ["label badge"],
    image: {
        path : "../../../../public/img/placeholder.16x9.png",
        alt: ""
    },
    orientation: "horizontal"
}) }}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}