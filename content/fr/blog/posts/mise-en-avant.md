---
title: Mise en avant
description: Comment intégrer une mise en avant dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md` en utilisant la [syntaxe Nunjucks correspondante (Includes)](https://www.11ty.dev/docs/languages/nunjucks/#supported-features).

## Pré-requis

[Voir aussi comment utiliser des données dans eleventy](https://www.11ty.dev/docs/data/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Utilisation

### Exemple d'utilisation dans un fichier Markdown `.md`

Seuls le titre et la description sont disponibles.

```md
:::callout Titre mise en avant
Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent <strong>automatiquement</strong> l’ARS aux familles déjà allocataires qui remplissent les conditions.
:::
```

### Dans un fichier Nunjucks `.njk`

Requiert la déclaration d'un **objet `callout`**, au format :
```json
[{
  "title": "string",
  "description": "HTML string",
  "link": {
    "url": "string",
    "title": "string"
  }
}]
```

### Exemple d'utilisation :

```njk
{% raw %}
{% set callout = {
  title: "Titre mise en avant",
  description: "Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent <strong>automatiquement</strong> l’ARS aux familles déjà allocataires qui remplissent les conditions.",
  link: {
    url: "/",
    title: "Label bouton MD"
  }
} %}
{% include "components/callout.njk" %}
{% endraw %}
```

## Rendu :

{% set callout = {
    title: "Titre mise en avant",
    description: "Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent <strong>automatiquement</strong> l’ARS aux familles déjà allocataires qui remplissent les conditions.",
    link: {
        url: "/",
        title: "Label bouton MD"
    }
} %}
<div>
    {% include "components/callout.njk" %}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/mise-en-avant){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}