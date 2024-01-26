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

**Notes :**

Le composant alerte n'inclut pas de bouton de fermeture.

Le bloc ne porte pas l'attribut `role="alert"` car il n’apparait pas dynamiquement en cours de navigation.

Les types possibles sont `info`, `warning`, `error`, `success`. Si le type est omis, le type `info` sera appliqué.

## Rendu

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "info",
    title: "Titre de l'information",
    description: "<p>Le contenu de l'alerte</p>"
}) }}

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "warning",
    title: "Titre de l'avertissement",
    description: "<p>Le contenu de l'alerte</p>"
}) }}

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "success",
    description: "<p>Contenu de l'alerte seul</p>"
}) }}

{% from "components/component.njk" import component with context %}
{{ component("alert", {
    type: "error",
    title: "Titre d'une erreur simple"
}) }}
