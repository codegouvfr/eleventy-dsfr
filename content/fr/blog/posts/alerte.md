---
title: Alerte
description: Comment intégrer une alerte dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---

Ce composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Utilisation

### Exemple d'utilisation dans un fichier Markdown `.md`

```md
:::info Test d'alerte
Contenu **Markdown**
:::
```

### Exemple d'utilisation dans un fichier Nunjucks `.njk`

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "info",
    title: "Test d'alerte",
    description: "<p>Le contenu de l'alerte</p>"
}) }}
{% endraw %}
```

**Notes :**

Le composant alerte n'inclut pas de bouton de fermeture.

Le bloc ne porte pas l'attribut `role="alert"` car il n’apparait pas dynamiquement en cours de navigation.

Les types possibles sont `info`, `warning`, `error`, `success`. En `njk` si le type est omis, le type `info` sera appliqué.

## Rendu

:::info Titre de l'information
Contenu de l'alerte
:::

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "warning",
    title: "Titre de l'avertissement",
    description: "<p>Le contenu de l'alerte</p>"
}) }}

:::success
Contenu de l'alerte seule
:::

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "error",
    title: "Titre d'une erreur simple"
}) }}

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/alerte){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}
