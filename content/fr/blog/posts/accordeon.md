---
title: Accordéon
description: Comment intégrer un accordéon dans une page du site ?
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
{{ component('accordionsgroup', {
    items: [{
        title: "Intitulé accordéon",
        content: "<p>Contenu HTML</p>"
    }]
}) }}
{% endraw %}
```

## Rendu

{% from "components/component.njk" import component with context %}
{{ component('accordionsgroup', {
    items: [{
        title: "Intitulé accordéon",
        content: "<p>Contenu HTML</p>"
    }]
}) }}

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}