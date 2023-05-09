---
title: Gazette BlueHats 🧢 n°12
date: 2021-08-24
---

Pour cette gazette estivale, nous vous proposons deux « focus tech », une surprise, deux offres d'emploi pour travailler sur des logiciels libres dans l'administration publique, une belle série d'événements (vous ne pourrez pas participer à tous) et notre habituelle revue de presse.

## Focus tech

### Trombi, un trombinoscope simple connecté à un LDAP

Théo Lechémia, développeur au [Parc national des Écrins](https://github.com/PnEcrins), a réalisé une application web en Python + VueJS qui permet de mettre en place facilement un trombinoscope basé sur un LDAP.  L'application est générique et publiée sous licence libre GPLv3.

-   Elle doit être connectée à un serveur LDAP pour lister les utilisateurs, leur description, leur service, leurs téléphones et leur email.
-   Elle permet aussi d'afficher l'agenda de chaque utilisateur en se connectant à un agenda compatible iCalendar/CALDAV.
-   Les photos de chaque utilisateur ne sont pas stockées dans l'AD, mais dans les répertoires de l'application.
-   Par défaut, tous les utilisateurs peuvent ajouter ou modifier la photo d'un utilisateur directement depuis sa fiche, pour faciliter l'administration de l'outil.

`>>` Détails, documentation et code source disponibles sur <https://github.com/PnEcrins/Trombi>.


### La DGFiP développe une version libre d'Hortonworks

*Une contribution de Su Yang, responsable du pôle données chez Direction générale des Finances publiques.*

Le « Pôle de données » de la DGFIP, créé depuis janvier 2021, a pour ambition d'industrialiser la valorisation des données.  Pour ce faire il est organisé en quatre verticales d'activités : il met en place un lac de données avec des données métiers provenant de différents silos.  Ce lac de données s'appuie sur une distribution Hadoop : la version
Hortonworks 3.1.4, qui est en production depuis mars 2021.

Le pôle accompagne et participe à des projets data (datascience, dataviz, etc.) et anime les profils données qui y contribuent ; il met en place la gouvernance des données qui contribue à la connaissance et la qualité des données et la conformité réglementaire des projets associés ; et il gère l'échange des données via des APIs (internes ou externes) ou en Open Data.

Le rachat par Cloudera de la distribution libre Hortonworks, et par la suite l'annonce de la fin de l'évolution de la solution Open Source font émerger un choix, entre (1) acheter une solution Cloudera au prix élevé, potentiellement en millions d'euros annuels ou (2) développer sa propre solution libre en s'associant à d'autres acteurs.

C'est cette dernière option qui a été retenue par la DGFIP, qui, pour ce faire, a recruté des spécialistes pointus.  Cette démarche s'effectue en commun avec d'autres grands groupes et les 2 premiers lots prévus pour T4 2021 et T1 2022 permettront un premier niveau d'indépendance.

Ce retour d'expérience répond notamment aux questions concernant le besoin à couvrir, les raisons du choix de développer une solution propre, le soutien de l'éco-système Open source, les avantages de la solution retenue en fonction des critères de la DGFIP.


## BlueHats Summer of Code 2022

Vous êtes une administration ?  Vous utilisez un logiciel libre auquel vous souhaitez contribuer ?  Vous êtes prête à accueillir *gratuitement* un étudiant d'une grande école d'ingénieurs pour qu'il travaille sur cette contribution avec la communauté du projet libre ?  Écrivez-nous à [bluehats@etalab.gouv.fr](mailto:bluehats@etalab.gouv.fr) en indiquant en quelques lignes le projet que vous envisagez !  La DINUM lancera un appel à projet public dans les semaines qui viennent, mais il n'est pas trop tôt pour nous faire part de vos idées.

## Offres d'emploi

La [Fabrique des mobilités](https://lafabriquedesmobilites.fr/) recrute une ou un développeur front sur le sujet du Coach CO2.  Il s'agit de construire un logiciel libre qui complétera le logiciel [Tracemob](https://forge.grandlyon.com/pocs/cozy/tracemob) pour en visualiser les données sous l'angle de l'empreinte climat de notre mobilité. Tout le code sera libre.

`>>` Plus d'infos ici : <https://pad.fabmob.io/fiche-poste-coach-co2>

Le projet [Archifiltre](https://archifiltre.fabrique.social.gouv.fr/) recrute un développeur pour se charger de mettre en place l’outillage pour l’extraction et le traitement des archives de messagerie au format [.pst](https://fr.wikipedia.org/wiki/.pst), en vue de leur analyse dans Archifiltre.

`>>` Plus d'infos ici : <https://beta.gouv.fr/recrutement/2021/07/28/dev-archifiltre.html​>

## Événements

-   En **septembre 2021**, retrouvez [les ateliers BlueHats](https://github.com/blue-hats/ateliers/blob/main/ateliers.org), avec notamment la présentation de la messagerie collaborative de l'État, les outils [Framasoft](https://framasoft.org) dans l’administration publique ainsi qu'une présentation de framaforms/Yakforms, et la présentation du Standard pour un code informatique public ([lien en anglais](https://standard.publiccode.net/)).

-   **9 septembre 2021** : Intervention de la DGFiP à la [journée annuelle *open source* du CRIP](https://www.crip-asso.fr/crip/event/detail.html/idConf/966).  « Lac de données et distribution Hadoop : suite au rachat d’Hortonworks par Cloudera, motivations et démarche de la DGFIP », par Su YANG, Responsable du pôle données DGFIP.

-   **4 et 5 novembre 2021** : Organisation du premier [Matomocamp](https://matomocamp.org) !

-   **14 et 15 octobre 2021** : le **B-Boost**, le salon du logiciel libre à La Rochelle : plus de 30 exposants, 30 conférences, et [plus encore](https://b-boost.fr/).

-   **14 et 15 octobre 2021** : Les rencontres [Geotrek](https://geotrek.fr/) à Aix-en-Provence.  Voir [le programme](https://groups.google.com/u/3/g/geotrek-fr/c/k3IxyRHEdsE).  L'après-midi du premier jour sera consacrée aux échanges de données entre Geotrek et d'autres outils, mais aussi à la diffusion libre des données.

-   **18, 19 et 20 octobre 2021** : Comme chaque année, l'association Scenari organise ses **Rencontres Scenari**.

    Scenari, c'est un ensemble de logiciels dédiés à la création collaborative structurée, et publication/diffusion de contenus multimédias et multisupports. Ils sont très utilisés dans le domaine de la formation et de la documentation, mais servent aussi pour l'audiovisuel, la qualité, ou les clés de déterminations, &#x2026;

    Les Télé-Rencontres Scenari 2021, c'est l'occasion de découvrir ces outils et comment ils peuvent améliorer vos contenus et vous faire gagner du temps dans leur création. C'est aussi l'occasion de connaître de nouvelles fonctionnalités et de nouveaux usages grâce à des ateliers et des conférences.

    Comme l'année dernière, raisons sanitaires obligent, les Télé-Rencontres Scenari 2021 se déroulement principalement en ligne : les contenus seront disponibles courant octobre et des sessions de visioconférence seront organisées les 18-19-20 octobre.

    Toutes les informations sont ou seront disponibles sur le site des Rencontres 2021 : <https://scenari.org/rencontres2021/>

-   **9 novembre 2021** : *Save the date* pour une journée BlueHats lors du salon [Open Source Experience](https://www.opensource-experience.com/).  Tenez-vous prêts à répondre à l'appel que nous enverrons pour des présentations courtes, sur le même format qu'en [2019](https://forum.etalab.gouv.fr/t/journee-bluehats-lors-du-paris-open-source-summit-le-11-decembre-2019/4614) !  Si vous avez déjà des propositions, n'hésitez pas à nous [écrire](mailto:bluehats@etalab.gouv.fr).


## Revue de presse

### Échos de l'administration

-   [Webinaire de l'État](https://www.numerique.gouv.fr/outils-agents/webinaire-etat/) : Un service dédié aux agents de l’État pour leurs séminaires en ligne, formations, présentations, conférences virtuelles, jusqu’à 350 participants.  Sur numerique.gouv.fr, juin 2021.
-   [tresthor: le nouvel outil de la DG Trésor pour réaliser des prévisions macroéconomiques](https://www.tresor.economie.gouv.fr/Articles/2021/06/30/tresthor-le-nouvel-outil-de-la-dg-tresor-pour-realiser-des-previsions-macroeconomiques), www.tresor.economie.gouv.fr, juin 2021.
-   [Emission « Libre à vous » de l'April](https://april.org/111-matomo) : L'analyse d'audience de sites web et Matomo avec Alexandre Bulté directeur technique d'Etalab et Ronan Chardonneau, formateur indépendant sur Matomo.  Sur april.org, juin 2021.
-   [Le gouvernement dégaine un nouveau plan d'action pour la science ouverte](https://www.acteurspublics.fr/articles/le-gouvernement-degaine-un-nouveau-plan-daction-pour-la-science-ouverte), acteurspublics.fr, juillet 2021.

### Sur le rapport parlementaire sur la souveraineté numérique

-   [Bâtir et promouvoir une souveraineté numérique nationale et européenne](https://www.assemblee-nationale.fr/dyn/15/rapports/souvnum/l15b4299-t1_rapport-information), assemblee-nationale.fr, juillet 2021
-   [Logiciel libres et Health Data Hub au menu du rapport sur la souveraineté du numérique](https://www.nextinpact.com/article/47722/logiciel-libres-et-health-data-hub-au-menu-rapport-sur-souverainete-numerique), nextinpact.com, juillet 2021
-   [Le rapport parlementaire sur la souveraineté du numérique](https://www.nextinpact.com/lebrief/47745/le-rapport-parlementaire-sur-souverainete-numerique), nextinpact.com, juillet 2021
-   [Administration: un rapport parlementaire prône le recours systématique au logiciel libre](https://www.zdnet.fr/blogs/l-esprit-libre/administration-un-rapport-parlementaire-prone-le-recours-systematique-au-logiciel-libre-39926175.htm), zdnet.fr, juillet 2021
-   [Souveraineté numérique : des administrations invitées à l'exemplarité](https://www.banquedesterritoires.fr/souverainete-numerique-des-administrations-invitees-lexemplarite), banquedesterritoires.fr, juillet 2021.
-   [Le CNLL salue les propositions de la mission parlementaire sur la souveraineté numérique](https://cnll.fr/news/mission-parlementaire-souverainete-numerique/), cnll.fr, juillet 2021
-   [Les propositions clés de la mission sur la souveraineté numérique de la France](https://www.acteurspublics.fr/articles/les-propositions-cles-de-la-mission-sur-la-souverainete-numerique-de-la-france), acteurspublics.fr, juillet 2021.

### D'Europe et d'ailleurs

-   [23 European Cloud Technology Companies form the European Cloud Industrial Alliance (EUCLIDIA)](https://www.euclidia.eu/publications/EUCLIDIA-Press.Release.Launch.Announcement), euclidia.eu, juillet 2021.
-   [OpenUK Report. State of Open: The UK in 2021](https://openuk.uk/stateofopen/)
-   [Open source in government: creating the conditions for success](https://public.digital/2021/06/21/open-source-in-government-creating-the-conditions-for-success), public.digital, juin 2021.
-   [$1.3M in grants go toward making the web's open-source infrastructure more equitable](https://techcrunch.com/2021/03/03/1-3m-in-grants-go-towards-making-the-webs-open-source-infrastructure-more-equitable/), techcrunch.com, mars 2021.
-   [Ford foundation. Major Philanthropies Tackle Inequality by Strengthening How Open Source Code is Developed and Maintained](https://www.fordfoundation.org/the-latest/news/major-philanthropies-tackle-inequality-by-strengthening-how-open-source-code-is-developed-and-maintained/), fordfoundation.org, mars 2021.

### Études et opinions

-   [Framasoft : de la plateforme à l'archipel](https://hal.archives-ouvertes.fr/hal-03177060/), archives-ouvertes.fr, mars 2021.
-   [Communs numériques : une nouvelle forme d'action collective ?](https://journals.openedition.org/terminal/7793) Revue Terminal, juin 2021
-   [OpenStreetMap n'est pas une communauté, c'est un mouvement politique](http://florian.lainez.fr/2021/05/12/openstreetmap-nest-pas-une-communaute-cest-un-mouvement-politique/), florian.lainez.fr, mai 2021.
-   [Henri Verdier: « Si les GAFAM font partie du problème, ils doivent faire partie de la solution »](https://actu.ionis-group.com/henri-verdier/), ionis-group.com, 2021.
-   [Rapport Latombe : systématiser le recours au logiciel libre dans les administrations, un enjeu de souveraineté numérique](https://www.april.org/rapport-latombe-systematiser-le-recours-au-logiciel-libre-dans-les-administrations-un-enjeu-de-souve), april.org, août 2021.

