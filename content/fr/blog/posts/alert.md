---
title: Alerte
description: Comment intégrer une alerte dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---

Ce composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Exemple d'utilisation

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

```md
:::info Test d'alerte
Contenu **Mardown**
:::
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
