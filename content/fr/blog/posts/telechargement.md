---
title: Téléchargement de fichier
description: Comment intégrer un lien de téléchargement de fichier dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Exemples d'utilisation

### Lien

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("download", {
    title: "Nom du fichier",
    href: "/data/dossier/fichier.ext",
    detail: "Format ou extension - 850Ko"
}) }}
{% endraw %}
```

### Carte

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("download", {
    type: "card",
    title: "Nom du fichier",
    description: "Description du fichier"
    href: "/data/dossier/fichier.ext",
    detail: "Format ou extension - 850Ko"
}) }}
{% endraw %}
```

### Tuile

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("download", {
    type: "tile",
    title: "Nom du fichier",
    href: "/data/dossier/fichier.ext",
    detail: "Format ou extension - 850Ko",
    pictogram: "buildings/city-hall.svg"
}) }}
{% endraw %}
```

## Rendu

### Lien

{% from "components/component.njk" import component with context %}
{{ component("download", {
    title: "monde.gpkg",
    href: "#",
    detail: "Geopackage - 11,4Mo"
}) }}

### Carte

{% from "components/component.njk" import component with context %}
<div>
{{ component("download", {
    type: "card",
    title: "monde.gpkg",
    description: "Pays et régions écologiques mondiales",
    href: "#",
    detail: "Geopackage - 11,4Mo"
}) }}
</div>

<br>

### Tuile

{% from "components/component.njk" import component with context %}
<div>
{{ component("download", {
    type: "tile",
    title: "monde.gpkg",
    description: "Pays et régions écologiques mondiales",
    href: "#",
    detail: "Geopackage - 11,4Mo",
    pictogram: "map/map.svg"
}) }}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/telechargement-de-fichier){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}
