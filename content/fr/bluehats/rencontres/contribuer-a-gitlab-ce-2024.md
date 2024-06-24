---
title: "Journée BlueHats 🧢 pour contribuer à GitLab CE"
date: 2024-05-27
description: Découvrez GitLab CE et les façons d'y contribuer
image:
  path: ./forge.png
  alt: Capture d'écran de GitLab CE
tags: code
---

# Journée BlueHats 🧢 pour contribuer à GitLab CE

Le 27 mai de 9h à 17h30, le collège codes sources et logiciels du comité pour la science ouverte et la DINUM organisent une journée de présentation des opportunités et processus de contribution au logiciel libre GitLab CE, à laquelle participeront des membres de la société GitLab Inc.

{% imageContent "./bluehats-gitlab-ce-lieu.jpg", "Agenda du Lieu de la Transformation Publique" %}

L'événement est ouvert à toutes les personnes qui travaillent dans ou avec un organisme public.

## Les présentations du matin

Durant la matinée, nous avons fait le point sur l'utilisation des forges dans l'enseignement supérieur et la recherche en nous basant sur le [rapport du collège codes sources et logiciels sur le sujet](https://hal-lara.archives-ouvertes.fr/hal-04098702v5). 

{% imageContent "./bluehats-gitlab-ce-daniel.jpg", "Daniel Le Berre présente le rapport sur les forges" %}

Ensuite, Lee Tickett, ingénieur dans la *core team* de GitLab, nous a présenté la communauté des contributeurs GitLab, avec l'aide de Nick Veenhof, *Director of Contributor Success* à GitLab.

{% imageContent "./bluehats-gitlab-ce-lee.jpg", "Lee Tickett présente la communauté GitLab" %}

- [Présentation de la journée](https://gitlab.in2p3.fr/coso-college-codes-sources-et-logiciels/journee-coso-dinum-gitlab/-/blob/main/intro-journeegitlab-270524.pdf?ref_type=heads) (Daniel Le Berre, CoSO et Bastien Guerry, DINUM)
- [Présentation du rapport sur les forges de l'ESR](https://gitlab.in2p3.fr/coso-college-codes-sources-et-logiciels/journee-coso-dinum-gitlab/-/blob/main/presentation-journeegitlab-270524.pdf?ref_type=heads) (Daniel Le Berre, CoSO)
- [Présentation de la communauté des contributeurs GitLab](https://docs.google.com/presentation/d/1eaGu_QrL0dVQBiV6_Ux6LIzlUytjjKPy58ZXeLT4CAE/edit#slide=id.g2ca783ae2ec_0_311) (Lee Tickett, GitLab)

<br/>

<iframe title="27/05/2024 CoSO/DINUM/GitLab Partie 1" src="https://tube.numerique.gouv.fr/videos/embed/593d88f3-47d5-4ae9-9d8b-3c65ceb73142" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" width="560" height="315" frameborder="0"></iframe>

<br/>

<iframe title="27/05/2024 CoSO/DINUM/GitLab Partie 2" src="https://tube.numerique.gouv.fr/videos/embed/0f395dbc-f629-42e9-9e75-f2f204446e54" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" width="560" height="315" frameborder="0"></iframe>

- [Détail des discussions du matin par GitLab](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/479#note_1929561830)
  
## Les activités de l'après-midi

<iframe title="27/05/2024 CoSO/DINUM/GitLab Partie 3" src="https://tube.numerique.gouv.fr/videos/embed/91e9ffbe-67f1-4567-af24-abc56cd03425" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" width="560" height="315" frameborder="0"></iframe>

Lee Tickett a présenté les différents moyens d'installer un environnement de développement de GitLab.

Les participants se sont répartis en groupes pour travailler sur les sujets suivants :

- Escaping issue when displaying translated message [issue #460834](https://gitlab.com/gitlab-org/gitlab/-/issues/460834)
- New probable double escaping to translation string in confirmation message when deleting private token [issue #461033](https://gitlab.com/gitlab-org/gitlab/-/issues/461033)
- .well-known/openid-configuration missing supported claims [issue #428061](https://gitlab.com/gitlab-org/gitlab/-/issues/428061)
- Forked_from_project is missing from the API when logged out [issue #361952](https://gitlab.com/gitlab-org/gitlab/-/issues/361952)
- Facilitate code contribution (i.e. forks) from guest users in self hosted instances of GitLab [issue #448320](https://gitlab.com/gitlab-org/gitlab/-/issues/448320)
- Exploring the new CI/CD catalog of GitLab 17.0 for HER [Documentation](https://gitlab.com/explore/catalog)

## Ce qu'on a fait ...

- Les personnes qui ont travaillé sur des tickets ont appris à installer l'environnement de développement de GitLab et à reproduire les problèmes sur cet environnement
- Des propositions de correction (*Merge Request*) ont été proposées [MR1](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/154292), [MR2](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/154289)
- Des analyses des besoins au regard des fonctionnalités disponibles par GitLab ont été réalisées (voir par exemple [ici](https://gitlab.com/gitlab-org/gitlab/-/issues/448320#note_1928454688))


On peut aussi retrouver le [détail des résultats du hackathon proposé par GitLab](https://gitlab.com/gitlab-org/developer-relations/contributor-success/team-task/-/issues/479#note_1930386918)

## ... et que l'on prévoit pour la suite

- Continuer les échanges sur un forum dédié aux problématiques de forges : `forum-national-forges@groupes.renater.fr`
- Organiser des webinaires autour d'autres outils dans les prochains mois (à venir, SonarQube et Jenkins)
- Organiser une nouvelle journée en présentiel autour de la communauté GitLab, en 2025, pour voir l'évolution de la situation

