---
title: "Retour sur l’utilisation de LibreOffice dans l’administration"
date: 2023-03-20
---

Le 20 mars 2023, à l'initiative d'un
[#BlueHats](https://code.gouv.fr/fr/bluehats/) du ministère de
l'Intérieur, la mission logiciels libres a organisé une rencontre sur
la question de l'utilisation de
[LibreOffice](https://code.gouv.fr/sill/detail?name=LibreOffice) dans
l'administration. Ce compte-rendu revient sur l'histoire de cette
utilisation de la suite collaborative libre dans les ministères.

{% imageContent "./libreoffice-notes.jpg", "Notes prises lors de la rencontre BlueHats autour de LibreOffice - crédit photo: Matthieu Faure" %}

## StarOffice, OpenOffice, LibreOffice

L'intérêt pour LibreOffice dans l'administration date d'avant...
LibreOffice. Peu après le début du millénaire, la suite bureautique
[StarOffice](https://fr.wikipedia.org/wiki/StarOffice) se fait
remarquer comme alernative aux outils de la suite Microsoft. Et, peu
après que StarOffice ne devienne
[OpenOffice](https://fr.wikipedia.org/wiki/OpenOffice.org), le
ministère de l'intérieur décide, à la demande de la police judiciaire
de Versailles, d'en déployer des instances dans les commissariats.

En décembre 2005, avec l'intérêt croissant des ministères pour la
suite OpenOffice, un groupe de travail interministériel est constitué
autour des outils de bureautique libres, le groupe « MIMO » pour
« Mutualisation InterMinistérielle Office ». Quand OpenOffice tombe
entre les mains d'Oracle, un *fork* est créé, LibreOffice, et c'est ce
projet toujours développé par [The Document
Foundation](https://www.documentfoundation.org/) qui donne son nom à
la suite « LibreOffice MIMO », l'adaptation de LibreOffice par ce
groupe MIMO.

## LibreOffice « MIMO » ?

### Pourquoi un empaquetage spécifique ?

Pourquoi développer une version « MIMO » de LibreOffice à destination des
agents publics ? Pour deux raisons principales : proposer un choix de
modules pré-installés et intégrer des correctifs faits via le marché
de support avant même, parfois, qu'ils ne soient intégrés en amont à
LibreOffice. Un exemple de fonctionnalité qui fut longtemps propre à
la version MIMO : la signature électroniques de fichiers. En plus de
ces raisons, il était utile d'avoir un logo, de la documentation, de
changer certains paramètres de base et de tester à fond la version
stable de LibreOffice pour éviter toute régression.

### Qui a assuré cet empaquetage ?

Il fut mis en oeuvre pendant plusieurs années par le ministère de
l'intérieur, qui continue de proposer une version MIMO basé sur
LibreOffice, avec l'appui de l'entreprise responsable de LibreOffice
dans le [marché de support logiciels
libres](https://code.gouv.fr/fr/utiliser/marches-interministeriels-support-expertise-logiciels-libres/).

À noter aussi les efforts fournis par plusieurs ministères pour
produire de la documentation en français à une époque où celle-ci
manquait encore, le résultat de ces efforts étant en ligne sur [ce
dépôt](https://github.com/codegouvfr/documentation-libreoffice).

Le groupe MIMO, fortement interministériel, avait donc pour rôle de
produire une version LibreOffice de référence pour l'administration,
incluse dans le socle interministériel de logiciels libres, tournée
vers les besoins des agents publics.

## L'usage de LibreOffice aujourd'hui

Au fil des ans, grâce à ces efforts du groupe MIMO et grâce aux
évolutions du logiciel lui-même, LibreOffice a gagné en nombre
d'utilisateurs à différents endroits de l'administration.

Une version LibreOffice MIMO est toujours préparée et mise à
disposition des organismes publics. Vous pouvez la télécharger depuis
[code.gouv.fr/mimo](https://code.gouv.fr/mimo). Mais le groupe MIMO
n'est plus aussi actif que par le passé.

Il est difficile de suivre les utilisations réelles de LibreOffice
MIMO et même de LibreOffice. Parmi les ministères et organismes
publics utilisateurs on compte aujourd'hui la Direction générale des
Finances publiques, le ministère de l'Intérieur, le ministère de
l'Écologie, l'INSEE, la caisse d'allocations familiales et des
collectivités territoriales -- et sûrement beaucoup d'autres.

En tout, on estime à environ 500000 le nombre d'installations de
LibreOffice dans la sphère publique, avec par exemple 20000 au
ministère de la transition écologique, 200 000 postes "MIMO" Windows
et 100 000 postes LibreOffice Ubuntu au Ministère de l'Intérieur.

## Indépendance et intéropérabilité

Les raisons qui ont poussé à encourager l'utilisation de LibreOffice
dans l'administration sont l'*indépendance* vis-à-vis des éditeurs de
solutions propriétaires et l'*intéropérabilité* des documents
échangés.

En 2015, la DINSIC publie le [référentiel général
d'intéropérabilité](https://www.numerique.gouv.fr/publications/interoperabilite/)
(RGI) qui incite notamment les administrations à utiliser les formats
[OpenDocument](https://fr.wikipedia.org/wiki/OpenDocument), comme le
*Open Document Text* (`.odt`), format par défaut pour lire et écrire
des textes sous LibreOffice. N'oublions pas que c'est la montée en
popularité de LibreOffice qui soulève la question des formats de
document intéropérables et motive en grande partie certains aspects du
RGI.

Le sujet de l'intéropérabilité des documents échangés est toujours
d'actualité, même quand ces documents sont de plus en plus souvent
rédigés via des applications en ligne plutôt qu'avec des logiciels
installés sur les postes des agents - on s'échange encore des pièces
jointes pour relire, annoter, écrire à plusieurs. Sans compter que
LibreOffice continue d'évoluer, avec [LibreOffice
online](https://code.gouv.fr/sill/detail?name=LibreOffice%20(Collabora)%20online)
et ses versions déployables en ligne.

Le sujet de l'indépendance reste, lui aussi, entier.

## Et maintenant ?

Suite à cette journée de mars 2023, « LibreOffice MIMO » a été renommé
en « MIMO basé sur LibreOffice® » (ou « MIMO » en version courte) pour
respecter les conditions d'utilisation de la marque LibreOffice,
détenue par The Document Foundation. Un espace de téléchargement
public a aussi été mis en place sur
[code.gouv.fr/mimo](https://code.gouv.fr/mimo).

À l'avenir, la mission logiciels libres de la DINUM va relancer le
groupe MIMO autour des outils de bureautique installables sur les
postes de travail, au-delà du seul LibreOffice.

L'une des missions de ce groupe sera de faire connaître MIMO et
l'offre de service disponible via le marché de support et de relancer
les travaux autour de la sélection des modules de MIMO, pour notamment
finaliser et bien documenter le processus d'empaquetage.

Une autre mission importante sera de faire un point sur la
documentation de MIMO: quels sont les usages actuels et les besoins
des utilisateurs ? Quels sont les modules à documenter ? Quelles
parties de la documentation actuelle sont à mettre à jour ?

