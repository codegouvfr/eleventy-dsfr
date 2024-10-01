---
title: "AboutCode : outils et données libres et ouvertes pour automatiser la sécurisation de la chaîne d'approvisionnement logicielle"
date: 2024-11-08
description: L'atelier présentera AboutCode, une solution libre et open source dédiée à l'automatisation de l’analyse de la composition logicielle et à la détermination de l'origine, de la licence et des problèmes de sécurité présents dans un arbre de dépendances logicielles
---
- Date : 8 novembre 2024
- Heure : De 11h à 12h30
- Intervenant : Philippe Ombredanne, Mainteneur principal chez [AboutCode](https://aboutcode.org/), une association sans but lucratif Belge, et [Stefano Zacchiroli](https://upsilon.cc/~zack/) de [Software Heritage](https://www.softwareheritage.org/)
- Visio : [Salon BlueHats](https://webinaire.numerique.gouv.fr/meeting/signin/invite/362/creator/369/hash/14eb55bd230aa1a8b8a98e0ee35b056d0196afcf)

<br/>

La gestion des composants logiciels libres ("Open Source"), en
particulier leur sécurité, leurs licences et leur provenance, est une
pratique essentielle du développement moderne de logiciels. La
technique principale est l’analyse de la composition logicielle (SCA
or "Software Composition Analysis"). L'adoption de la SCA est
désormais une condition préalable pour que les organisations modernes
productrices et consommatrices de logiciels se conforment à la
réglementation européenne sur la cyber résilience (CRA) et à d’autres
réglementations similaires en Europe et aux États-Unis. La SCA
s'appuie sur la création d'inventaires et de nomenclature de
composants et paquets logiciels ("Software Bill of Material" ou SBOM)
tels qu'utilisés dans une application. L'adoption de la SCA peut
également renforcer de manière majeure la sécurité de la chaîne
d’approvisionnement logicielle et aide à garantir l’intégrité de cette
dernière : à cette fin, la SCA permet de maintenir une connaissance
continue des composants tiers inclus et déployés dans les
applications, et quels sont les problèmes de sécurité potentiels parmi
ces composants qui requièrent l'attention des équipes de logiciel et
de sécurité.

Seule l’automatisation de ces pratiques de SCA rend cette approche
possible. Elle est impossible sans ces outils, car le volume de
composants consommés est tel qu'il est impossible de gérer
efficacement cette chaîne. Et avec les outils libres, l’automatisation
est effectivement accessible à tous les développeurs et organisations.
L’automatisation de ces processus est aussi une bonne pratique de
développement logiciel à adopter dans tous les cas. 

L'atelier présentera la "stack" AboutCode qui est une solution libre
et open source dédiée à l'automatisation de l’analyse de la
composition logicielle, et à la détermination de l'origine, de la
licence et des problèmes de sécurité présents dans un arbre de
dépendances logicielles. Cette solution comprend plusieurs outils,
librairies, standards ouverts, and données ouvertes, incluant
ScanCode, DejaCode, VulnerableCode, PurlDB, et la "Package-URL" (ou
PURL), un standard ouvert développé par AboutCode et adopté et utilisé
dans toute l'industrie comme fondation de tous les outils de SCA,
libres ou propriétaires, et par tous les formats de SBOM et VEX
(Vulnerability Exploitability eXchange) comme les standards CycloneDX,
SPDX, OASIS CSAF et OpenVex.

Après cette présentation, les participants auront acquis une meilleure
compréhension de la manière dont une solution complète d’outils et de
données libres et ouverts peut aider à sécuriser les chaînes
d'approvisionnement logicielles, garantir la conformité aux
réglementations à venir, et améliorer la posture de sécurité des
équipes logicielles et des systèmes et applications qu’elles déploient
et distribuent.
