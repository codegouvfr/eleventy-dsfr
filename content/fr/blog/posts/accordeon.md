---
title: Accordéon
description: Comment intégrer un accordéon dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md` en utilisant la [syntaxe Nunjucks correspondante (Includes)](https://www.11ty.dev/docs/languages/nunjucks/#supported-features).

## Pré-requis

[Voir aussi comment utiliser des données dans eleventy](https://www.11ty.dev/docs/data/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Utilisation

Requiert la déclaration d'un **objet `accordionItems`** (tableau), au format :
```json
[
  {
    "title": "string",
    "content": "HTML string"
  }
]
```

### Exemple d'utilisation

```njk
{% raw %}
{% set accordionItems = [{
  title: "Intitulé accordéon",
  content: "<p>Contenu</p>"
}] %}
{% include "components/accordionsgroup.njk" %}
{% endraw %}
```

## Rendu

{% set accordionItems = [{
    title: "Intitulé accordéon",
    content: "<p>Contenu</p>"
}] %}
<div>
    {% include "components/accordionsgroup.njk" %}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}