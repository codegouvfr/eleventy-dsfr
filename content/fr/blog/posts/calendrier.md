---
title: Calendrier
description: Comment utiliser le calendrier d'événements d'eleventy-dsfr ?
date: git Last Modified
tags:
  - fonctionnalité
---

La présence des fichiers de template dans [`content/calendar`](https://github.com/codegouvfr/eleventy-dsfr/tree/main/content/calendar) assure la création d'un fichier de calendrier global [`calendar.ics`](/calendar.ics) à la racine du site, et des fichiers de calendrier `.ics` correspondants aux événements.

Les articles libellés avec `event` sont automatiquement ajoutés au calendrier, et leurs fichiers d'événement de calendrier `.ics` correspondants sont automatiquement créés.

Il existe un composant bouton `add_to_calendar` qui contient un lien vers le téléchargement du fichier d'événement.

[Voir un exemple d'événement](/fr/blog/evenement/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}