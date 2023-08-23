---
title: Le SILL et code.gouv.fr font peau neuve
description: "Le SILL a fait l'objet d'une refonte complète et code.gouv.fr évolue pour exposer de nouvelles données."
date: 2022-05-11
image:
  path: ./peauneuve.png
  alt: Illustration contenant le titre de l'article
tags: ressources
---

## Le SILL nouveau est arrivé !

### Le SILL, c'est quoi ?

C'est le catalogue historique des [logiciels libres](https://fr.wikipedia.org/wiki/Logiciel_libre) recommandés par l'administration et pour tous les organismes publics.  C'est aussi et surtout une communautés de *référents* : tout agent public peut se porter référent de son administration pour un ou plusieurs logiciels libres.  En endossant ce rôle, il garantit que le ou les logiciels ont un usage significatif dans son administration et il tient à jour les fiches de ces logiciels pour les autres administrations, en précisant notamment la version minimale recommandée.

{% imageContent "./sill.png", "Capture d'écran du SILL" %}

### Les nouveautés

- **Tous les agents publics** peuvent se créer un compte sur le site [code.gouv.fr/sill](https://code.gouv.fr/sill) : si le nom de domaine de votre courriel professionnel n'est pas prévalidé, il suffit de [nous écrire](mailto:contact@code.gouv.fr).

- Une fois inscrit, un agent public peut accéder aux courriels des référents d'un logiciel libre : il peut ainsi les solliciter directement pour un avis.
  
- Si votre administration déploie un logiciel libre sur les postes des agents ou dans ses systèmes d'information, vous pouvez en devenir référent.  Il suffit pour cela de vous proposer comme référent via l'interface.  Si le logiciel existe déjà, vous devrez indiquer le cas d'usage qui en est fait dans votre administration ; s'il n'est pas encore dans le SILL, vous pourrez renseigner sa fiche.

- Les fiches sont plus riches : elles indiquent notamment si le logiciel libre est présent dans les [marchés interministériels support et expertise](https://communs.numerique.gouv.fr/utiliser/marches-interministeriels-support-expertise-logiciels-libres/), s'il y a une fiche équivalente sur le [Comptoir du Libre](https://comptoir-du-libre.org/fr/) maintenu par l'ADULLACT, s'il a fait l'objet d'un [atelier BlueHats](https://communs.numerique.gouv.fr/ateliers/) ou d'une [fiche dédiée](https://git.sr.ht/~codegouvfr/sill/tree/master/item/fiches/).

- En particulier, le SILL affiche désormais une liste de **prestataires** que vous pouvez solliciter, une information que nous collectons depuis les données exposées par le [Comptoir du Libre](https://comptoir-du-libre.org/fr/users/providers).

### Embarquement immédiat !

Vous souhaitez **tester des logiciels libres** ?  En tant qu'agent public, votre compte sur [code.gouv.fr/sill](https://code.gouv.fr/sill) vous donne la possibilité de tester certains logiciels directement depuis votre navigateur.

Voici une capture d'écran d'un navigateur donnant accès à une distribution GNU/Linux dans laquelle est affichée le navigateur web [Chromium](https://code.gouv.fr/sill/detail?name=Chromium).

La liste des logiciels que vous pouvez tester va évoluer au fil des semaines à venir.  Si vous voulez nous aider à ajouter de nouveaux logiciels, rendez-vous sur [ce dépôt](https://github.com/etalab/helm-charts-sill).

{% imageContent "./chromium.png", "Capture d'écran de Chromium tournant dans une distribution GNU/Linux" %}

## code.gouv.fr expose de nouvelles données

[code.gouv.fr](https://code.gouv.fr/public/) permet de parcourir tous les codes sources publiés par des organismes publics.  Les administrations y trouveront des applications et des bibliothèques développées par d'autres administrations ; les citoyens pourront se plonger dans les productions des administrations qui ouvrent leurs codes par souci de transparence ou de mutualisation.

{% imageContent "./codegouvfr.png", "Capture d'écran de la page d'accueil de code.gouv.fr" %}

### Les évolutions principales de code.gouv.fr

- Nous référençons désormais les [bibliothèques](https://code.gouv.fr/public/#/libs) (ou *libraries* en anglais) publiées à partir des comptes d'organisation ou groupes référencés.

- Nous avons ajouté de **nouveaux filtres de recherche** : les organisations par ministère ou autre institution de rattachement ; les dépôts selon qu'ils ont un fichier `CONTRIBUTING.md` à la racine ; les dépôts à partir desquels sont publiés des bibliothèques ; les dépendances selon leur type.

- Nous référençons désormais les codes sources hébergés sur la forge [SourceHut](https://sourcehut.org/), notamment ceux du pôles logiciels libres (par ici pour les [explications](https://man.sr.ht/~codegouvfr/logiciels-libres/pourquoi-sourcehut.md)).

- Nous avons amélioré la détection des [dépendances](https://code.gouv.fr/public/#/deps) et nous avons ajouté celles de l'écosystème [Rust](https://code.gouv.fr/public/#/repos?language=Rust) à partir des fichiers `Cargo.toml`.

- code.gouv.fr permet d'accéder rapidement au [socle interministériel de logiciels libres](https://code.gouv.fr/public/#/sill) et aux [services](https://code.gouv.fr/public/#/services) qui instancient des logiciels libres.

- Vous pouvez vous abonner à de nouveaux [flux RSS](https://code.gouv.fr/public/#/feeds) : les dernières organisations ajoutées, les dernières entrées du SILL, les dernières dépendances et bibliothèques selon leurs dates de mises à jour, ainsi que les dernières versions "taggée" publiées depuis tous les dépôts.

- Nous sommes passés à la dernière version 1.5.1 du [système de design de l'État](https://www.systeme-de-design.gouv.fr/) et le site est désormais totalement conforme au référentiel général d'amélioration de l'accessibilité 4.1.

Il se peut qu'il y ait ça et là encore un peu de peinture fraîche : si vous rencontrez le moindre souci avec le SILL ou code.gouv.fr, n'hésitez pas à [nous écrire](mailto:contact@code.gouv.fr).
