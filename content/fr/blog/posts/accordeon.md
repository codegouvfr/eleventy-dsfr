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
{{ component("accordionsgroup", {
    items: [{
        title: "Intitulé accordéon",
        content: "<p>Contenu HTML</p>"
    }]
}) }}
{% endraw %}
```

ou

```md
:::accordionsgroup

???accordion Intitulé accordéon

Contenu **markdown** _riche_

???

:::
```

## Rendu

Un accordéon créé en njk :

{% from "components/component.njk" import component with context %}
{{ component("accordionsgroup", {
    items: [{
        title: "Intitulé accordéon",
        content: "<p>Contenu HTML</p>"
    }]
}) }}

<br>

Groupe d'accordéons créé en markdown :

:::accordionsgroup

???accordion Premier accordéon

Contenu MD

* one
* two

???

???accordion Deuxième accordéon

Contenu **markdown** _riche_

```sh
git commit
git push
```

???

:::

<br>

Un autre accordéon seul :

???accordion Accordéon seul, hors groupe

Lorem [...] elit ut.

???

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}