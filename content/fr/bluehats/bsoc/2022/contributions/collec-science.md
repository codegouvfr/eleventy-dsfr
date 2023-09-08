---
title: "BSOC 2022 : Collec-Science"
toc: false
---

*[Collec-Science](https://www.collec-science.org), un logiciel OpenSource récent dédié à la gestion des échantillons, plébiscité par les labos de recherche de tous horizons (biologie, chimie, structure des matériaux, sciences de l'environnement, archéologie, etc.) : rejoignez-nous pour ajouter des briques manquantes mais essentielles pour les utilisateurs (saisie sur le terrain, amélioration du magasinage, documentation) !*

## Présentation du logiciel

Les scientifiques récoltent des échantillons lors de leurs expérimentations, que ce soit des plantes, des animaux, des fossiles, des prélèvements d'eau, etc. Collec-Science a été créé pour faciliter leur gestion : d'où proviennent-ils, où sont-ils rangés, que deviennent-ils ? Largement configurable, il s'adapte à de nombreuses situations, et permet de suivre le devenir des échantillons et leur stockage.

## Compétences exigées pour le stagiaire contributeur

- Compétences techniques : 
  - PHP (compétences de base)
  - PostgreSQL (être capable de faire des requêtes et de comprendre la structure de la base de données)
  - Développement Android - Javascript pour la seconde partie du projet.
  - Au minimum, si pas de compétences PHP, savoir développer en Java ou des langages équivalents. 
  - Des connaissances de base dans les langages web (html, Javascript et Jquery) sont nécessaires. 
  - Connaissance de base en SQL (qu'est-ce qu'une base de données, comment on construit des requêtes, etc.). 
- Compétences autres : 
  - Capacité à rédiger des documentations pour les utilisateurs
  - Capacité à proposer et explorer des solutions, à les défendre et les amender après discussions avec l'équipe

## Missions proposées

1. Interfacer Collec-science avec ODK :
   - De nombreux scientifiques souhaitent pouvoir saisir les informations concernant les échantillons directement sur le terrain, au moment de la récolte. L'application, développée en technologie web, nécessite de disposer d'une connexion permanente, ce qui n'est pas toujours possible. Une solution, basée sur l'encapsulation de l'application dans un Raspberry et des containers Docker a été mise en place, mais elle est lourde à mettre en œuvre, et de fait, peu utilisée. Nous souhaitons élargir la palette des possibilités en faisant interagir l'application avec ODK (https://getodk.org/) : les formulaires de saisie seraient générés depuis Collec-Science, et les saisies réalisées depuis le client Android seraient intégrés directement dans la base de données. 
2. Créer une application Android pour faciliter les opérations de magasinage :
   - Les contenants des échantillons sont étiquetés avec un QRCode. Les mouvements d'entrée et de sortie peuvent être traités automatiquement avec des douchettes optiques du commerce (modèles du type de celles utilisées en supermarchés). Toutefois, dans les entrepôts ou les salles de stockage, des ordinateurs ne sont pas forcément disponibles, et la connexion au réseau peut être absente. Si l'application peut fonctionner dans le navigateur d'un terminal Android, les capacités d'interfaçage avec les caméras restent limitées, et la connectivité au réseau peut être pénalisante.
   - La création d'une application Android permettra d'utiliser les terminaux mobiles de façon plus aisée, à la fois pour générer les mouvements d'entrée et de sortie, y compris en mode déconnecté, et pour consulter les informations sur les échantillons, soit en interrogeant directement la base de données si la connexion réseau est présente, soit en lisant les données encapsulées dans les QRcodes.
3. Rédiger la documentation pour les utilisateurs. Celle-ci est très partielle. Quelques pages, au format markdown, sont intégrées dans le logiciel. La documentation mériterait largement d'être complétée.

## Quel encadrement pour le stagiaire ?

- Encadrement réalisé par Éric Quinton, ingénieur divisionnaire de l'agriculture et de la forêt. 
- Collec-Science, pour la partie développement, est porté par un groupement d'informaticiens d'INRAE (CATI GEDEOP - https://gedeop.cati.inrae.fr/). Deux nouveaux contributeurs participent au projet, dont un est plus spécialisé dans la réalisation des applications Android ; il sera mobilisé pour cet aspect du projet. 
- Concernant ODK, au sein de GEDEOP, un groupe de travail étudie les potentialités du logiciel et cherche à le diffuser au sein de notre institut de recherche ; des collaborations avec les personnes compétentes pourront être recherchées sur ce sujet.
- Echanges principalement réalisés par visio-conférence (BigBlueButton) et, si c'est réalisable techniquement, via Mattermost pour les échanges hors visio (une instance hébergée à INRAE).
