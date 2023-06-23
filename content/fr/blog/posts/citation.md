---
title: Citation
description: Comment intégrer une citation dans une page du site ?
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

Seul le texte est disponible.

```md
:::quote
« Lorem [...] elit ut. »
:::
```

### Dans un fichier Nunjucks `.njk`

Requiert la déclaration d'un **objet `quote`**, au format :
```json
{
  "sourceUrl": "string",
  "text": "string",
  "author": "string",
  "source": "string"
}
```

### Exemple d'utilisation :

```njk
{% raw %}
{% set quote = {
  sourceUrl: "/",
  text: "Lorem [...] elit ut.",
  author: "Auteur",
  source: "Ouvrage"
} %}
{% include "components/quote.njk" %}
{% endraw %}
```

## Rendu :

{% set quote = {
sourceUrl: "/",
text: "Lorem [...] elit ut.",
author: "Auteur",
source: "Ouvrage"
} %}
<div>
    {% include "components/quote.njk" %}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/citation){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}