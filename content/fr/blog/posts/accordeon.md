---
title: Accordéon
description: Comment intégrer un accordéon dans une page du site ?
date: git Last Modified
tags:
  - DSFR
  - composant
---
Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Utilisation

### Exemple d'utilisation dans un fichier Markdown `.md`

```md
????accordionsgroup

??? Intitulé accordéon

Contenu **markdown** _riche_

???

????
```

### Exemple d'utilisation dans un fichier Nunjucks `.njk`

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

## Rendu

Un accordéon créé en Nunjucks :

{% from "components/component.njk" import component with context %}
{{ component("accordionsgroup", {
    items: [{
        title: "Intitulé accordéon",
        content: "<p>Contenu HTML</p>"
    }]
}) }}

<br>

Groupe d'accordéons créé en Markdown :

????accordionsgroup

??? Premier accordéon

Contenu MD

* one
* two

???

??? Deuxième accordéon

Contenu **markdown** _riche_

```sh
git commit
git push
```

???

????

<br>

Un autre accordéon seul :

??? Accordéon seul, hors groupe

Lorem [...] elit ut.

???

<br>

[Voir aussi la page du composant sur le site du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}