---
title: "BSOC 2022 : Esup-Pod"
toc: false
---

*Contribuez à Esup-Pod : plateforme opensource de gestion de vidéo pour l'éducation nationale, l'enseignement supérieur et la recherche.*

## Présentation du logiciel

La plateforme [Esup-Pod](https://github.com/EsupPortail/Esup-Pod) a
été à l’origine initiée pour répondre au besoin de l'université
Lille1, sciences et technologies, dès 2014.

L'objectif de cette plateforme était de rendre visible la production
vidéo étudiante, de proposer un lieu de dépôt pour toute vidéo
étudiante et enseignante qu'elle soit institutionnelle, personnelle ou
associative et ainsi permettre de les rendre accessibles et
affichables par l’intermédiaire d'autres services numériques notamment
la plateforme pédagogique Moodle et les sites Web institutionnels.
Esup-Pod est une plateforme de podcast qui permet à toute personne
identifiée de déposer des fichiers audio et vidéo. Ces fichiers, que
l'on appellera “vidéo”, sont ensuite encodés par la plateforme dans un
format adaptatif pour la diffusion Web afin d’être visualisables sur
différents terminaux (ordinateur, tablette, téléphone).

Le développement de la première version est effectué en avril 2013
pour une mise en production un an après. La première présentation a eu
lieu lors des journées Anstia à Aix-en-Provence en décembre 2014. Et
en 2015, le projet a intégré le consortium Esup-Portail.  Aujourd’hui,
plus de 50 instances sont déployées à travers la France. Des
universités mais également des académies, des instituts et des
ministères ont installé eux-mêmes une instance au sein de leur
infrastructure.

Les usages sont principalement pédagogiques : de l'enseignant vers
l'étudiant mais également de l'étudiant vers l'enseignant. Toutefois,
ils peuvent être également institutionnels (Colloque, conférence,
communication) ou pour toute autre production audiovisuelle comme des
tutoriels, des reportages, etc.

## Compétences exigées pour le stagiaire contributeur

La plateforme Esup-Pod est développée en python (V3.X) à l'aide du
framework Django (V3).

La diffusion de la video s’effectue en HTML5 (HLS et MP4) et utilise
le player videojs.

Ce dernier a été enrichi à l'aide de plugins tiers pour permettre
l'affichage d'une vignette de

prévisualisation de la vidéo, la gestion des chapitres, la qualité de
la vidéo (Auto ou 240p, 480p, 720p et 1080p) et l'affichage des
enrichissements en plus des sous-titres.

L’interface du frontal de la plateforme Pod est développée en
respectant les normes RGAA à l'aide du framework Bootstrap5 et
s'adapte aux différents types de terminaux web (Responsive Web
Design). La plateforme est également prévue pour être multilingue

## Missions proposées

Nous avons déployé les solutions Vosk et Coqui.ai pour transcrire et
sous-titrer automatiquement les vidéos postées sur la plateforme.

Dans le cadre de la diffusion en direct, le stagiaire recruté devra
proposer une solution pour sous-titrer les flux diffusée en direct. Il
devra proposer une solution fonctionnelle et que l'on peut mettre à
l'échelle.

Dans le cadre du sous-titrage des vidéos en VOD, le stagiaire étudiera
également les solutions open-source de traduction pour proposer des
sous-titres en différentes langues et préciser la qualité de la
traduction.

## Quel encadrement pour le stagiaire ?

La solution Esup-pod est proposée par l'association Esup-portail qui
regroupe 80 établissements de l'enseignement supérieur et de la
recherchge. Elle est gérée et maintenue par un ensemble
d'établissement coordonné par l'université de Lille. L'encadrement se
fera à distance principalement via des visioconférences plusieurs fois
par semaine. Les méthodes agiles seront mises en places avec le
stagiaire. Toutefois des déplacements et entrevues en présentielles
seront également envisagés.
