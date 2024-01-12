---
title: Événement exemple
description: Comment ajouter un événement au calendrier ?
date: git Last Modified
tags:
  - events
  - fonctionnalité
start: 2023-09-10
---
Voici un exemple d'événement qui sera ajouté au calendrier global accessible à l'adresse [/calendar.ics](/calendar.ics), et dont on peut télécharger l'événement de calendrier correspondant à l'adresse [/calendar/evenement-exemple-2023-09-10.ics](/calendar/evenement-exemple-2023-09-10.ics).

Ce calendrier est généré via le plugin `eleventy-plugin-calendar`.

[Voir la documentation du plugin](https://github.com/codegouvfr/eleventy-plugin-calendar){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## Exemple d'utilisation du composant bouton `add_to_calendar`

```njk
{% raw %}
{% include "components/add_to_calendar.njk" %}
{% endraw %}
```
## Rendu du composant bouton `add_to_calendar`

<p>
    {% include "components/add_to_calendar.njk" %}
</p>
