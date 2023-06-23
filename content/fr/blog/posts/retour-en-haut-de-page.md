---
title: Retour en haut de page
description: Comment intégrer un lien de retour en haut dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md` en utilisant la [syntaxe Nunjucks correspondante (Includes)](https://www.11ty.dev/docs/languages/nunjucks/#supported-features).

## Pré-requis

[Voir aussi comment utiliser des données dans eleventy](https://www.11ty.dev/docs/data/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Exemple d'utilisation

```njk
{% raw %}
{% include "components/back_to_top.njk" %}
{% endraw %}
```

## Rendu

<div>
    {% include "components/back_to_top.njk" %}
</div>

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/retour-en-haut-de-page){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}