---
title: Événement exemple
description: Comment ajouter un événement au calendrier ?
date: 2023-09-10T09:00:00.0Z
duration: 50
location: online
tags:
- event
---
Voici un exemple d'événement qui sera ajouté au calendrier global accessible à l'adresse [/calendar.ics](/calendar.ics), et dont on peut télécharger l'événement de calendrier correspondant à l'adresse [/calendar/evenement-exemple-2023-09-10.ics](/calendar/evenement-exemple-2023-09-10.ics).

## Variables du template

```json
{
  "title": "string",
  "description": "string",
  "date": "date", // ex. 2001-12-15T02:59:43.1Z
  "duration": "number",
  "location": "string"
}
```

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

[Voir la section sur la fonctionnalité de calendrier](/fr/blog/fonctionnalités/#calendrier){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}
