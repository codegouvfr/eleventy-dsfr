---
title: Tableau
description: Comment intégrer un tableau dans une page du site ?
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
{{ component("table", {
    title: "Titre du tableau",
    headers: ["Titre", "Titre", "Titre", "Titre", "Titre"],
    data: [
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"]
    ]
}) }}
{% endraw %}
```

## Rendu

{% from "components/component.njk" import component with context %}
{{ component("table", {
    title: "Titre du tableau",
    headers: ["Titre", "Titre", "Titre", "Titre", "Titre"],
    data: [
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
        ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"]
    ]
}) }}

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}