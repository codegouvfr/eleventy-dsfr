---
title: Glossaire de la mission logiciels libres
layout: layouts/post.njk
segments:
  - url: /doc/
    title: Documentation
showBreadcrumb: true
permalink: /fr/doc/glossaire/
---

*Pour proposer une amélioration, écrivez à [contact@code.gouv.fr](mailto:contact@code.gouv.fr).*

<a id="algo"></a>
## Algorithme

Un algorithme est la description d'une suite d'étapes permettant
d'obtenir un résultat à partir d'éléments fournis en entrée
(cf. [définition de la
CNIL](https://www.cnil.fr/fr/definition/algorithme)).

En informatique, cette suite d'étape est une suite d'opérations
formelles traitant et produisant des informations.

<a id="public-algo"></a>
## Algorithme public

Un algorithme *public* est un suite opératoire (formelle ou non,
informatisée ou non, automatisée ou non) sollicitée pour une décision
administrative individuelle envers des personnes physiques ou morales,
de droit public ou privé nommément désignées.

Voir le [guide des algorithmes publics](https://guides.etalab.gouv.fr/algorithmes/) à l'usage des administrations.

<a id="lib"></a>
## Bibliothèque

Dans [code.gouv.fr](https://code.gouv.fr/public/#/libs), une bibliothèque est
un ensemble de fonctions distribuées sous forme de paquetage via une
plateforme dédiée, par exemple https://npmjs.com.

Pour ajouter une bibliothèque dans
[code.gouv.fr](https://code.gouv.fr/public/#/libs), il suffit que le compte
d'organisation depuis lequel vous publiez cette bibliothèque soit
ajouté à [ce
fichier](https://git.sr.ht/~codegouvfr/codegouvfr-sources/tree/main/item/comptes-organismes-publics.yml).

Vous pouvez écrire à
[contact@code.gouv.fr](mailto:contact@code.gouv.fr)
pour nous indiquer un compte à ajouter.

<a id="source-code"></a>
## Codes sources

Le code source d'un programme informatique est ce qu'écrit une
programmeuse ou un programmeur.  Il peut s'agir de programmes
complexes ou de quelques lignes.  Ce code source peut être partagé
sous licence libre pour permettre aux autres programmeurs de
l'étudier, de le modifier, de le diffuser et de partager leurs
améliorations.

<a id="digital-common"></a>
## Commun numérique

Un commun numérique est une ressource disponible sous format
numérique, gérée par une communauté qui définit, pour cette ressource,
des règles d'utilisation et de contribution, et pour la communauté,
des règles de participation.

[Voir la page sur les communs](/fr/communs/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

<a id="dep"></a>
## Dépendances logicielles

Un logiciel intègre souvent des briques logicielles publiées sous
licence libre. Celles-ci sont appelées « dépendances ». Ce site permet
de parcourir la liste des dépendances de *mise en production*, non les
dépendances de *développement* ; d'autre part, seules sont comprises
les dépendances sollicitées par au moins deux dépôts.

Les dépendances listées dans
[code.gouv.fr](https://code.gouv.fr/public/#/deps) sont automatiquement
identifiées à partir des dépôts référencés sur cette même plateforme.
Ne sont prises en compte que les dépendances de premier niveau.

<a id="repo"></a>
## Dépôt de code source

Un « dépôt » est un espace dans lequel sont publiés les fichiers de
code source. C'est ce que vous voyez lorsque vous visitez un lien vers
un code source hébergé sur une forge. C'est aussi ce que vous pouvez
copier sur votre machine pour l'explorer localement.

Pour ajouter un dépôt dans
[code.gouv.fr](https://code.gouv.fr/public/#/repos), envoyez-nous le compte
d'organisation GitHub ou le groupe GitLab depuis lequel vous le
publiez, nous l'ajouterons dans [ce
fichier](https://git.sr.ht/~codegouvfr/codegouvfr-sources/tree/main/item/comptes-organismes-publics.yml).

Vous pouvez écrire à
[contact@code.gouv.fr](mailto:contact@code.gouv.fr)
pour nous indiquer un compte à ajouter.

<a id="stars"></a>
## Étoiles (dans GitHub ou GitLab)

Les « étoiles » (« stars » en anglais) sont un moyen pour les
utilisateurs des plates-formes de mettre un dépôt en favori. Pour
l'instant, nous collectons cette information sur GitHub, GitLab et les
instances de GitLab. Ce n'est pas une mesure de la qualité du code
source.

<a id="fork"></a>
## Fork

Un dépôt « forké » en franglais est un dépôt de code source qui a été
développé à partir d'un autre.

<a id="license"></a>
## Licence

Une licence logicielle est un contrat passé entre les auteurs d'un
logiciel et ses réutilisateurs. Les licences dites « libres »
accordent aux utilisateurs le droit de réutiliser le code source d'un
logiciel.

## Logiciel libre

Un logiciel libre est un logiciel dont le code source est publié sous
l'une des licences reconnues libres par la [Free Software
Foundation](https://www.gnu.org/licenses/licenses.en.html) ou "open
source" par l'[Open Source
Initiative](https://opensource.org/licenses).  

Ces licences ont toutes en commun d'octrayer aux utilisateurs quatre
libertés : celle d'*utiliser* le programme informatique comme on le
souhaite, pour toute finalité ; celle d'*étudier et de modifier* le
programme à loisir ; celle de redistribuer des copies du programme à
d'autres ; celle de redistribuer des versions modifiées du programme à
d'autres.

<a id="orga"></a>
## Organisation et groupe (dans GitHub ou GitLab)

GitHub permet d'avoir des comptes personnels pour y héberger du code
et des « comptes d'organisation ». Un « groupe » est la notion plus ou
moins équivalent sur les instance de GitLab. Un organisme remplissant
une mission de service public peut avoir un ou plusieurs organisations
et/ou groupes sur une ou plusieurs forges.

Pour ajouter une organisation dans
[code.gouv.fr](https://code.gouv.fr/public/#/groups), il suffit que le compte
d'organisation GitHub ou le groupe GitLab soit ajouté dans [ce
fichier](https://git.sr.ht/~codegouvfr/codegouvfr-sources/tree/main/item/comptes-organismes-publics.yml).

Vous pouvez écrire à
[contact@code.gouv.fr](mailto:contact@code.gouv.fr)
pour nous indiquer un compte à ajouter.

<a id="reuse"></a>
## Réutilisations

GitHub permet de connaître le nombre de dépôts qui en utilisent un
autre : le nombre de ces dépôts est présenté ici dans la colonne
"Réutilisations" de la liste des dépôts.

<a id="public-sector"></a>
## Secteur public

Les codes sources développés dans le cadre de missions de service
public ont vocation à être publiés, dans certains conditions. Ce site
propose de chercher dans l'ensemble des codes sources aujourd'hui
identifiés comme provenant d'un organisme remplissant une mission de
service public. Il a été développé par
[Etalab](https://www.etalab.gouv.fr).

<a id="sill"></a>
## Socle interministériel de logiciels libres

Le socle interministériel de logiciels libres (SILL) est le catalogue
de référence des logiciels libres recommandés par l'Etat pour toute
l'administration.

Voir [cette page](/fr/doc/sill/).

<a id="swh"></a>
## Software Heritage

[Software Heritage](https://www.softwareheritage.org) est un projet
dont le but est d'archiver tous les codes sources disponibles. Pour
chaque dépôt référencé sur ce site, nous donnons le lien vers la
version archivée sur Software Heritage.

<a id="tag"></a>
## Tag

Dans un dépôt de code source géré avec Git, un tag est un label
associé à un commit.  Ce label peut être annoté ou non.  Un tag
correspond en général à une nouvelle version du logiciel.

[code.gouv.fr](https://code.gouv.fr/public/#/tags) recense les tags des
dépôts qui possèdent un fichier `publiccode.yml`, un fichier
`CONTRIBUTING.md` ou qui sont à l'origine de la publication de
[bibliothèques](https://code.gouv.fr/public/#/libs).
