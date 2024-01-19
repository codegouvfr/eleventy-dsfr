---
title: Tuile
description: Comment intégrer une tuile dans une page du site ?
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
{{ component("tile", {
    url: "/",
    title: "Intitulé de la tuile",
    description: "Lorem [...] elit ut.",
    pictogram: "buildings/city-hall.svg"
}) }}
{% endraw %}
```

Le format complet de l'objet en paramètre est le suivant :

```json
{
  "url": "string",
  "externalUrl": "string",
  "title": "string",
  "description": "string",
  "pictogram": "string"
}
```

Si `tile.externalUrl` est utilisé, `tile.url` doit être `false`.

## Rendu

{% from "components/component.njk" import component with context %}
<div>
{{ component("tile", {
    url: "/",
    title: "Intitulé de la tuile",
    description: "Lorem [...] elit ut.",
    pictogram: "buildings/city-hall.svg"
}) }}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tuile){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}