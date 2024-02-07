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
{{ component("card", {
    url: "/",
    title: "Intitulé carte",
    description: "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
    tags: ["label tag"],
    date: "2023-06-21" | jsDateObject,
    badges: ["label badge"],
    image: {
        src: "/img/placeholder.16x9.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
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
  "date | detail": "Date | string",
  "detailEnd": "string",
  "badges": "string[]",
  "image": {
    "src | path": "string",
    "alt": "string"
  },
  "addClass": "string"
}
```

**Notes :**

Si `card.externalUrl` est utilisé, `card.url` doit être `false`. `card.urlDescription` peut alors être utilisé pour nommer le lien.

`image.src` est le chemin de l'image dans le site. `image.path` peut être utilisé à la place de `image.src` en spécifiant le chemin relatif du fichier depuis l'emplacement de la page dans le dépôt (ex. `path : "../../../../public/img/placeholder.16x9.png"`). Cela permet de bénéficier du [plugin Image d'Eleventy](https://www.11ty.dev/docs/plugins/image/).

`date` et `detail` ne peuvent pas être renseignés simultanément car les deux utilisent la même zone de détail (haute).

## Rendu

{% from "components/component.njk" import component with context %}
<div>
{{ component("card", {
    url: "/",
    title: "Intitulé carte",
    description: "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
    tags: ["label tag"],
    date: "2023-06-21" | jsDateObject,
    badges: ["label badge"],
    image: {
        src : "/img/placeholder.16x9.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}