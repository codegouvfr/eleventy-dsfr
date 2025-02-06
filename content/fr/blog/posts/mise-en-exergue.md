---
title: Mise en exergue
description: Comment intégrer une mise en exergue dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Utilisation

### Exemple d'utilisation dans un fichier Markdown `.md`

Seule la description est disponible.

```md
:::highlight
Contenu **Mardown**
:::
```

### Exemple d'utilisation dans un fichier Nunjucks `.njk`

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("highlight", {
    description: "Contenu <strong>HTML</strong>"
}) }}
{% endraw %}
```

## Rendu

:::highlight
Contenu **Mardown**
:::

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/mise-en-exergue){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}