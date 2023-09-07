---
title: "BSOC 2022 : Osmose-QA"
toc: false
---

*Contribuer à améliorer les données OpenStreetMap (OSM) en participant à [Osmose-QA](https://github.com/osm-fr?q=osmose), un service à destination de la communauté OpenStreetMap, des centaines d’analyses qualité sur les 8 milliards de données d’OSM à un rythme quotidien.*

## Présentation du logiciel

[Osmose-QA](https://github.com/osm-fr?q=osmose) est un service vérifiant la qualité des données OpenStreetMap en détectant un large éventail de types de problèmes. C'est une brique importante de l'écosystème OpenStreetMap utilisée par des particuliers comme des professionnels.

Voir [la présentation publique de la proposition](https://www.teritorio.fr/projets/proposition-pour-un-stagiaire-dans-le-cadre-de-bluehats-%f0%9f%a7%a2-semester-of-code/).

## Compétences exigées pour le stagiaire contributeur

- Compétences requises :
  - Git, Python
- Compétences souhaitables :
  - docker
- Compétences bonus :
  - OpenStreetMap, OpenData

## Missions proposées

- Il s’agira de déterminer avec la personne (en fonction de ses compétences ou souhait de compétences à développer) les orientations qui peuvent porter effectivement sur la résolution de bugs plus ou moins avancés, l’amélioration de fonctionnalités et/ou l’aide à la documentation pour faciliter l’usage. Chaque contribution étant de fait un plus pour le logiciel.
- Il existe de nombreuses « Good first issue » qui sont un moyen de rentrer dans le code des différentes composantes d’Osmose
- Améliorer l'intégration continue pour s'assurer de la qualité du code
- Pour le frontend (base de données postgres, python, Vue.js) :
  - intégrer fastAPI (python) et swagger API pour remplacer le framework python bottle
  - mettre à jour Vue.js de la version 2 à la version 3
  - mettre à jour OAuth1 à OAuth2 (passage de python à javascript)
  - remplacer tag2link par le DataItem (le WikiData d'OpenStreetMap)
  - fixer des bugs indiqués sur https://github.com/osm-fr/osmose-frontend/issues
- Pour le backend d'analyse de données :
  - permettre l'utilisation de l'analyseur Mapillary en utilisant le SDK python
  - prendre en compte les géométries de type ligne et polygone des données OpenData, en plus des points, pour mettre en correspondance avec les données d'OpenStreetMap (python, SQL/Postgres/Postgis)
  - ajouter le support des analyseurs SQL pour le compilateur MapCSS (sujet difficile, impliquant des parseurs et grammaires ANTLR)
  - fixer des bugs indiqués sur https://github.com/osm-fr/osmose-backend/issues

- Des contributions pourront également porter sur le développement d'un nouvelle fonctionnalité "Osmose-DD" (OpenData) :
  - Faciliter pour des non développeurs la mise en place d’une interface pour configurer de nouvelles analyses entre des données ouvertes et OpenStreetMap (il existe déjà par exemple : FINESS, SIRENE, Datatourisme, Mérimee... voir https://github.com/osm-fr/osmose-backend/tree/master/analysers),
  - Améliorer le suivi des analyses par la mise en place d’une interface spécifique à Osmose–OD (des pistes documentées ici https://forum.openstreetmap.fr/t/interface-utilisateur-pour-la-partie-opendata-dosmose/6494)

## Quel encadrement pour le stagiaire ?

- Encadrement de Frédéric Rodrigo pour la partie technique. Frédéric est mainteneur principal du code source d'Osmose-QA depuis 2011
- Encadrement de Vincent Bergeot pour la partie pédagogique et communauté. Vincent est contributeur à Osmose-QA depuis 2012
- Suivi régulier et visio
- Échanges sur les listes de discussion, forum, wiki.osm.org, canaux IRC et element
- D'autres personnes de la communauté pourront donner des conseils sur des thématiques spécifiques
- Documentation utilisateur : https://wiki.openstreetmap.org/wiki/Osmose
- Guide du contributeur : https://github.com/osm-fr/osmose-backend/tree/master/doc
