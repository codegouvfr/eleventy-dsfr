---
title: Retour en haut de page
description: Comment intégrer un lien de retour en haut dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

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