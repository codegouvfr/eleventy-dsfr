---
title: Gazette BlueHats 🧢 n°3
date: 2019-10-17
---

## Focus sur la Gendarmerie nationale et le logiciel libre

### L'exemple d'une migration à grande échelle vers le libre

Le lieutenant-colonel Stéphane Dumond, chef de bureau IT du [Service des Technologies et des Systèmes d'Information de la Sécurité Intérieure (ST(SI)²)](https://fr.wikipedia.org/wiki/Service_des_technologies_et_des_syst%C3%A8mes_d%27information_de_la_S%C3%A9curit%C3%A9_int%C3%A9rieure), était l'invité de l'émission de l'April [« Libre à vous ! »](https://april.org/libre-a-vous) sur la [radio Cause Commune](https://cause-commune.fm/). Stéphane Dumond a notamment conduit le projet d'industrialisation de la migration vers un système libre sur le poste de travail des gendarmes. Dans cette émission, il relate l'histoire de la migration (serveurs Debian, système de gestion de bases de données MySQL, Ubuntu sur les postes de travail, etc.) et explique les conditions de son succès :

> « La migration vers le logiciel libre en Gendarmerie est intervenue [&#x2026;] au début des années 2000, parce qu'on a eu la convergence de trois éléments qui sont intervenus de manière simultanée et qui ont conduit à cette migration à grande échelle : tout d'abord une contrainte budgétaire ; ensuite, il faut une prise de conscience que continuer à rester dans le domaine du monde propriétaire conduit inévitablement, à partir du moment où on n'a plus suffisamment d'argent, à une perte de dépendance, une perte de souveraineté [&#x2026;] ; enfin, [&#x2026;] il faut que les grands chefs, à commencer par le DSI (le Directeur des systèmes d'information), [&#x2026;] ainsi que le Directeur général, soient à la fois promoteurs, sponsors et [viennent] en soutien des équipes techniques pour que la migration continue à bien se passer au fil des années, parce que vous verrez qu'une migration vers le logiciel libre c'est [un travail] de très longue haleine. »

`>>` Réécoutez [le podcast](https://april.org/libre-a-vous-diffusee-mardi-3-septembre-2019-sur-radio-cause-commune) est disponible sur le site de l'APRIL.

### LemonLDAP::NG : un Web-SSO pour l'administration

[LemonLDAP::NG](https://lemonldap-ng.org/welcome/) est un [Web-SSO](https://fr.wikipedia.org/wiki/Authentification_unique) qui implémente de nombreux protocoles de fédération d'identités tels que [SAML](https://fr.wikipedia.org/wiki/Security_assertion_markup_language), [CAS](https://fr.wikipedia.org/wiki/Central_Authentication_Service) ou encore [OpenID-Connect](https://fr.wikipedia.org/wiki/OpenID_Connect), protocole implémenté dans le cadre du dispositif [FranceConnect](https://fr.wikipedia.org/wiki/FranceConnect).

Au début des années 2000, la Gendarmerie nationale et le ministère des Finances décident concomitamment de déployer un SSO. Le ministère des Finances développe à cet effet un logiciel libre nommé LemonLDAP. La Gendarmerie nationale, ayant des besoins plus complexes, adopte dans un premier temps un logiciel propriétaire. Face au coût et au manque de souplesse engendrés par la solution propriétaire, elle abandonne cette solution pour se saisir du code source de LemonLDAP et le réécrire afin de l'adapter à ses besoins. En 2005, la première version complète de LemonLDAP::NG (fork de LemonLDAP) est publiée en *open source*.

Hébergée par la [fondation OW2](https://www.ow2.org/), la communauté LemonLDAP::NG associe le Service des technologies et des systèmes d'information de la Sécurité intérieure (ou [ST(SI)²](https://fr.wikipedia.org/wiki/Service_des_technologies_et_des_syst%C3%A8mes_d%27information_de_la_S%C3%A9curit%C3%A9_int%C3%A9rieure)) et plusieurs entreprises parmi lesquelles [Worteks](https://www.worteks.com/fr/), [Linagora](https://linagora.com/) ou encore Openside. Reposant initialement sur des financements publics, le projet perçoit également des financements privés d'[Orange](https://www.orange.fr/portail) (qui est également client de Worteks), et d'autres. Aujourd'hui, les deux principaux contributeurs au SSO sont le ST(SI)² ainsi que Worteks.

LemonLDAP::NG s'est progressivement diffusé dans l'administration, faisant ainsi réaliser plusieurs dizaines de millions d'euros d'économies par an, en comparaison avec le leader du marché, [Forgerock](https://www.forgerock.com/platform/access-management/sso).  Aujourd'hui, LemonLDAP::NG est utilisé par l'ensemble des ministères français (à une exception près) ainsi que par de nombreuses collectivités territoriales.

## Nouveaux services, nouveaux outils, nouveaux codes sources

### Etalab lance le site code.etalab.gouv.fr

Dans le cadre de la politique de contribution de l'État aux logiciels libres, la DINSIC collecte la liste des comptes d'organisation et des forges via lesquelles des organismes publics partagent des codes sources.

Etalab a lancé le site [code.etalab.gouv.fr](https://code.gouv.fr/sources) qui permet de parcourir la liste de ces comptes et des dépôts de codes sources publiés.

[Lire le blogpost d'Etalab](https://www.etalab.gouv.fr/code-etalab-gouv-fr-les-codes-sources-de-logiciels-publies-par-des-organismes-publics) et [relayez le tweet d'annonce](https://twitter.com/Etalab/status/1181857984030351360).

La presse en parle : sur [Nextinpact](https://www.nextinpact.com/brief/--code-etalab-gouv-fr----portail-officiel-des-codes-sources-publics-9927.htm), [lemondeinformatique](https://www.lemondeinformatique.fr/actualites/lire-les-codes-sources-des-logiciels-du-secteur-public-publies-76714.html), [silicon.fr](https://www.silicon.fr/etalab-codes-sources-secteur-public-263325.html), [Acteurs publics](https://www.acteurspublics.fr/articles/letat-ouvre-son-portail-unique-pour-recenser-tous-les-logiciels-libres-du-secteur-public), [developpez.com](https://www.developpez.com/actu/280332/France-Code-etalab-gouv-fr-est-le-nouveau-portail-officiel-des-codes-sources-publics-lance-par-la-mission-Etalab-pour-consolider-ses-efforts-dans-l-application-des-directives-de-l-Open-Data/), [linuxfr.org](https://linuxfr.org/news/une-plate-forme-recensant-les-codes-sources-de-logiciels-publies-par-des-organismes-publics-francais) et [les-infostrateges.com](https://www.les-infostrateges.com/actu/une-plateforme-qui-recence-les-codes-sources-ouverts-par-des-organismes-publics).

### La webconférence interministérielle avec l'outil libre Jitsi

Le [nouveau système interministériel de webconférence](https://webconf.numerique.gouv.fr) est proposé par la DINSIC, hébergé et opéré par le ministère de la Transition écologique et solidaire, officiellement mis en production depuis mi-septembre.

Cette solution de webconférence s'appuie sur la solution libre [Jitsi](https://jitsi.org/) pour proposer un service accessible avec un simple navigateur web, permettant à tous les agents de l'État d'ouvrir des conférences et d'inviter des partenaires extérieurs (opérateurs, collectivités, citoyens, entreprises).

`>>` [Accéder à la webconférence interministérielle.](https://webconf.numerique.gouv.fr/)

### DFIR ORC : un outil de collecte libre pour l'analyse forensique

Conçu en 2011 pour répondre aux missions opérationnelles de l'agence nationale de sécurité des systèmes d'information (ANSSI) en matière d'investigation et de réponse à un incident, le logiciel DFIR ORC (pour Outil de recherche de compromission) n'a cessé d'évoluer pour regrouper un ensemble d'outils qui permettent la recherche, l'extraction et la mise à disposition de données forensiques dans un environnement Microsoft Windows&#x2026; à l'échelle d'un parc entier !  L'outil, intégralement libre, est aujourd'hui publié par l'agence à l'usage des acteurs et des professionnels de la communauté.

Pour plus d'information, [consultez la note d'actualité de l'ANSSI](https://www.ssi.gouv.fr/actualite/decouvrez-dfir-orc-un-outil-de-collecte-libre-pour-lanalyse-forensique/) ainsi que le [dépôt GitHub](https://github.com/dfir-orc) du logiciel.

### OpenCTI : un outil libre pour traiter et partager la connaissance en matière de cybermenace

Le projet OpenCTI (Open Cyber Threat Intelligence) a été initié en septembre 2018 par l'ANSSI et co-développé avec le CERT-EU en l'absence de solutions complètement appropriées pour structurer, stocker, organiser, visualiser et partager la connaissance de l'ANSSI en matière de cybermenace, à tous les niveaux.

Ces informations sont exploitées par l'agence pour mener à bien ses activités de cyberdéfense. Elles sont également diffusées aux interlocuteurs privilégiés de l'agence (CSIRT, agences de cybersécurité, etc.) à l'échelle nationale et internationale.

La mise à disposition de l'outil OpenCTI, en *open source* (licence GNU Affero v3) et prêt à l'emploi, permet aujourd'hui de faire bénéficier tous les intéressés de l'ensemble des fonctionnalités de cette application, qui respecte les standards en matière de modèle de menace.

`>>` Pour plus d'information, [consultez la note d'actualité](https://www.ssi.gouv.fr/actualite/opencti-la-solution-libre-pour-traiter-et-partager-la-connaissance-de-la-cybermenace/) publiée par l'ANSSI, ainsi que le [dépôt GitHub](https://github.com/OpenCTI-Platform/opencti).


### Une application libre sur les énergies renouvelables de réseaux

L'Observatoire de la Transition Écologique et la DREAL des Pays de la Loire publient une nouvelle [application libre de visualisation et de téléchargement](http://apps.datalab.pays-de-la-loire.developpement-durable.gouv.fr/enr_reseaux_teo/) de données relatives aux énergies renouvelables de réseaux.

`>>` Les scripts de collecte et de datavisualisation sont disponibles dans le [dépôt GitLab](https://gitlab.com/dreal-datalab/poc-enr-teo) du DREAL datalab.


### CARTElette : Création de couches cartographiques à partir du code officiel géographique (COG) et des couches IGN

Le package CARTElette vient en complément du package R [antuki/COGugaison](https://github.com/antuki/COGugaison) qui a pour objectifs de manipuler des données communales produites à différents millésimes et de les agréger à différents niveaux supra-communaux.

Il s'agit désormais de créer des couches cartographiques (communales et supra-communales) qui correspondent à la situation du découpage des territoires français (communes et niveaux supra-communaux, France et Outre-mer) au 1er janvier de chaque année (date de référence du code officiel géographique).

`>>` Pour plus d'information, consultez [la note publiée sur data.gouv.fr](https://www.data.gouv.fr/fr/reuses/cartelette-creation-de-couches-cartographiques-a-partir-du-code-officiel-geographique-cog-et-des-couches-ign/), ainsi que le [dépôt GitHub](https://github.com/antuki/CARTElette).


### Bercy ouvre le code source de la taxe foncière

La direction générale des finances publiques (DGFiP) a publiée le code source utilisé pour le calcul de la taxe foncière.  Pour en savoir plus, consultez l'annonce sur [impots.gouv.fr](https://www.impots.gouv.fr/portail/ouverture-des-donnees-publiques-de-la-dgfip) ainsi que le [dépôt de code source sur GitHub](https://github.com/etalab/taxe-fonciere).


## Retour utilisateur sur la solution Proxmox

Dans son article de blog « [Une balade du coté de&#x2026; Proxmox](https://si.ecrins-parcnational.com/blog/2019-03-proxmox.html) », le SI du Parc national des Écrins revient sur la migration vers [Proxmox](https://www.proxmox.com/en/), une plate‐forme de gestion de virtualisation libre.

> « Le Parc national des Ecrins disposait depuis 2014 de 2 hyperviseurs VMware ESXI 5.5 hébergés chez OVH. Ces 2 machines accueillaient une quinzaine de serveurs linux sous forme de machines virtuelles.
>
> Le choix de fonctionner avec une licence VMware gratuite présentait certaines limitations. Notamment l'impossibilité de sauvegarder ou de cloner à chaud les VM. L'outil vSphere (5.5) permettant de gérer l'hyperviseur ne fonctionne que sous windows ; une difficulté supplémentaire pour notre petite équipe qui a migré ses postes de travail sous Linux.
>
> À l'occasion du renouvellement de ces machines vieillissantes, nous nous sommes posé la question de rester sous ESXI ou de tenter une autre aventure. Notre petite équipe n'ayant pas beaucoup de temps à consacrer aux serveurs, il fallait une solution éprouvée et nous permettant de remonter les VM existantes telles quelles. Migrer l'ensemble de notre architecture hébergée n'est pas une mince affaire.
>
> La technologie Proxmox est mûre. Elle est libre (licence AGPLv3) et basée sur l'hyperviseur Linux KVM. Elle propose également une solution de containers LXC qui était en cours d'évaluation sur nos postes de travail. »

`>>` Retrouvez [l'intégralité du blogpost](https://si.ecrins-parcnational.com/blog/2019-03-proxmox.html).


## Candidatez au label « Territoire Numérique Libre »

Le label Territoire Numérique Libre est une initiative de l'ADULLACT, en partenariat avec d'autres associations et institutions reconnues pour leur action en faveur du logiciel libre et la promotion du numérique citoyen dans les collectivités territoriales : [AFUL](https://aful.org/), [APRIL](https://april.org/), [Pôle Aquinetic](https://pole-aquinetic.fr/) et la DINSIC.  Le label Territoire Numérique Libre encourage les usages numériques libres, citoyens et collaboratifs, et s'adresse à toutes les collectivités territoriales françaises : villes et villages, mais aussi établissements publics de collaboration intercommunale (EPCI), départements et régions.

`>>` [En savoir plus et canditatez avant le 20 octobre à minuit](https://territoire-numerique-libre.org/candidature-2019/)

## Événements

### 24 octobre : COMET-CNES (Toulouse) Comment valoriser par l'open source ?

Dans un contexte d'acteurs du spatial, cette journée se propose d'éclairer les relations entre *open source*, valorisation, recherche et mutualisation en s'appuyant sur la présentation d'une étude réalisée pour le CNES sur la valorisation des Logiciels Libres, des retours d'acteurs publics et privés impliqués dans des écosystèmes ouverts et des retours d'expérience de projets *open source* du CNES.

> [Détails et inscriptions](https://www.comet-cnes.fr/evenements/comment-valoriser-par-lopensource)

### 7 et 8 novembre : Rencontres Geotrek (Nîmes)

Dans la continuité des précédentes Rencontres, le Comité de pilotage de [Geotrek](https://geotrek.fr/) ([dépôt de code](https://github.com/GeotrekCE?language=html)) - une suite logicielle de webmapping, composée d'un outil métier SIG, d'un site internet et d'une application mobile - propose aux utilisateurs et aux partenaires intéressés par l'outil de se réunir pour partager des retours d'expérience, découvrir les nouveautés et participer à des ateliers.

`>>` [Lire le \*programme en PDF](https://geotrek.ecrins-parcnational.fr/rencontres/2019/Rencontres-Geotrek-2019-Programme.pdf)\* et rendez-vous sur [la page d'inscription](https://framaforms.org/inscription-rencontres-geotrek-2019-1569231468) avant le 22 octobre\*.

### 19 et 20 novembre : Sprint *open source* #BlueHats (Paris)

Venez contribuer aux logiciels libres de l'État et rejoignez le mouvement #BlueHats !

Le Lab 110 bis et la DINSIC organisent un « Sprint *open source* » les 19 et 20 novembre 2019.  Deux jours pour découvrir et contribuer à des projets ouverts de l'administration et d'ailleurs.

`>>` [Inscrivez-vous via ce formulaire](https://framaforms.org/sprint-open-source-du-lab-110bis-et-de-la-dinsic-les-19-et-20-novembre-2019-1571036385) ! Entrée libre et gratuite, mais les places sont limitées.

### 26 novembre : Le libre sur la Place 2019 (Nancy)

Dans le cadre de la semaine de l'innovation, le logiciel libre est à l'honneur le 26 novembre 2019 : venez écouter les retours d'administrations qui ont fait le pari du libre !

`>>` [Inscription via ce site](https://www.eventbrite.fr/e/inscription-le-libre-sur-la-place-2019-73282775755).

### 10 et 11 décembre : Paris Open Source Summit et #BlueHats

Le grand rendez-vous européen des innovations et des technologies *open source* est de retour pour une 5e édition.  Associant experts internationaux, entreprises, startups et PME leaders de leur domaine et des communautés emblématiques, le Paris Open Source Summit (POSS) devient cette année le hub *open source* de l'intelligence artificielle, des infrastructures distribuées, de la cybersécurité, de l'embarqué pour deux journées de conférences inédites.

`>>` [Plus d'information sur le site de l'événement](https://2019.opensourcesummit.paris/)

Le POSS 2018 a été l'occasion pour la DINSIC de [lancer le mouvement #BlueHats](https://www.numerique.gouv.fr/agenda/lancement-rejoignez-la-communaute-blue-hats-hackers-dinteret-general/).  Cette année, la DINSIC envisage une nouvelle participation à travers des « conférences éclair » et des ateliers contributifs autour de compétences et technologies spécifiques.

`>>` [Proposez des interventions](https://pad.etalab.studio/IOTFNnlGR_uyRZTIGQmVVg#) et [indiquez les domaines techniques](https://pad.etalab.studio/eYURdv_LS0y1s_oNPWkHPw#) sur lesquels vous voulez échanger !


## Brèves

-   La licence CeCiLL v2.1, figurant parmi les [licences homologuées](https://www.data.gouv.fr/fr/licences) lorsqu'une administration veut publier du code source, est entrée dans la liste. Cette licence a intégré la liste des licences présentées par [choosealicense.com](https://choosealicense.com) - voir sa description [ici](https://choosealicense.com/licenses/cecill-2.1/) et [ce tableau comparatif](https://choosealicense.com/appendix/) de l'ensemble des licences libres.

-   [EU FOSSA 2](https://ec.europa.eu/info/departments/informatics/eu-fossa-2_en) est une initative de la commission européenne pour soutenir des logiciels libres critiques. Elle a été lancée sur l'impulsion du Parlement européen après la découverte de bug de sécurité Heartbleed en 2014. EU FOSSA 2 lance un questionnaire en anglais autour de l'*open source*. Cela vous prendra dix minutes environ : [voir le questionnaire](https://ec.europa.eu/eusurvey/runner/EUFOSSA2-Survey).

-   Dans le cadre des travaux autour des prestations d’expertise et de développements d’évolutions de logiciels libres existants, la DINSIC souhaite interroger les écosystèmes du logiciel libre, autant les fournisseurs que les autres clients/utilisateurs.  [Lire la suite sur le forum d'Etalab](https://forum.etalab.gouv.fr/t/expertise-logiciels-libres-segmentation-par-domaines/4537).

-   La communauté #BlueHats est désormais présente dans un salon public de [Tchap](https://www.tchap.gouv.fr/#/room/#BlueHats21LW8XE:agent.dinum.tchap.gouv.fr) et dans le [Hub des communautés](https://www.modernisation.gouv.fr/le-hub-des-communautes/blue-hats) de la DITP.  Rejoignez-nous !

-   Etalab publie un [guide juridique interactif](https://code.gouv.fr/guides/juridique/) sur la publication des logiciels de l'administration en open data.

-   Etalab a réactivé son canal de discussion IRC pour permettre à tout le monde d'échanger avec l'équipe technique : rendez-vous via l'interface web de [riot](https://riot.im/app/#/room/#freenode_#etalab:matrix.org) ou via le canal `#etalab` sur le serveur `irc.freenode.net`.

-   [Le CCSD recrute pour le développement de HAL](https://place-emploi-public.gouv.fr/offre-emploi/ingenieur-en-developpement-et-deploiement-d-applications-fh-reference-2019-266319), le logiciel qui fait tourner la plateforme de partage des publications scientifiques en *open access* : voir et relayer [l'annonce sur LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:6582600558610305024/).

-   Le [ministère de l'Agriculture partage une étude sur les préconisations relatives à la démarche d'APIsation](https://speakerdeck.com/bluehats/demarche-apisation).


## Revue de presse

-   [France's Gendarmerie: “Freedom of choice is priceless”](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/news/technological-sovereignty) (joinup.ec.europa.eu, 09/2019)
-   [Le ministère de l'Intérieur migre sur la solution libre Nextcloud](https://www.nextinpact.com/news/108156-le-ministere-linterieur-migre-sur-solution-libre-nextcloud.htm) (www.nextinpact.com, 08/2019)
-   [L'État renouvelle son Référentiel général d'accessibilité](https://www.nextinpact.com/brief/l-etat-renouvelle-son-referentiel-general-d-accessibilite-9847.htm) (www.nextinpact.com, 10/2019)
-   [Budget participatif : la mairie choisit l'open source](https://lagazette-ladefense.fr/2019/06/19/budget-participatif-la-mairie-choisit-lopen-source/) (lagazette-ladefense.fr, 06/2019)
-   [La dépendance des autorités allemandes à Microsoft pose question](https://www.zdnet.fr/actualites/la-dependance-des-autorites-allemandes-a-microsoft-pose-question-39890935.htm) (zdnet.fr, 09/2019)
-   [Jean-Séverin Lair (DINSIC) : « Tout le monde est concerné par l'archivage »](https://www.cio-online.com/actualites/lire-jean-severin-lair-dinsic-%C2%A0-%C2%A0tout-le-monde-est-concerne-par-l-archivage%C2%A0-11301.html) (06/2019)
-   [Les logiciels open source ouvrent à des gestions plus libres](https://www.lagazettedescommunes.com/640150/les-logiciels-open-source-ouvrent-a-des-gestions-plus-libres/) (lagazettedescommunes.com, 10/2019)
-   [Contrat, parasitisme et logiciel libre](https://www.usine-digitale.fr/article/tribune-contrat-parasitisme-et-logiciel-libre.N871845) (usine-digitale.fr, 07/2019)
-   [Le Sénat inscrit l'obsolescence programmée logicielle dans le projet de loi pour une économie circulaire](https://droit.developpez.com/actu/278780/Le-Senat-inscrit-l-obsolescence-programmee-logicielle-dans-le-projet-de-loi-pour-une-economie-circulaire-en-rejetant-toutefois-les-amendements-les-plus-concrets/) (developpez.com, 09/2019)
-   [Rapport de la commission d'enquête du Sénat sur la souveraineté numérique](http://www.senat.fr/rap/r19-007-1/r19-007-1.html) (senat.fr, 10/2019)
-   [Le CERN délaisse Microsoft pour le logiciel libre](https://www.zdnet.fr/actualites/le-cern-delaisse-microsoft-pour-le-logiciel-libre-39885945.htm) (zdnet.fr, 06/2019)
-   [Déframasoftisons Internet !](https://framablog.org/2019/09/24/deframasoftisons-internet/) (framablog.org, 09/2019)
-   [Bercy ouvre le code source de la taxe foncière](https://www.nextinpact.com/news/108152-bercy-ouvre-code-source-taxe-fonciere.htm) (nextinpact.com, 08/2019)
-   [French universities and research organizations get access to Nextcloud](https://nextcloud.com/blog/french-universities-and-research-organizations-get-nextcloud/) (nextcloud.com, 16 octobre 2019)


