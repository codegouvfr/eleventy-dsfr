---
title: Gazette BlueHats 🧢 n°27
date: 2024-03-26
---

## 🇪🇺 OSOR publie un manuel sur l'Open Source pour les administrations publiques

L'observatoire Open Source de la Commission européenne ([OSOR](https://joinup.ec.europa.eu/collection/open-source-observatory-osor)) a publié un guide pour aider les administrations à s'approprier les sujets liés aux logiciels libres, qu'il s'agisse de l'achat, du développement, des aspects techniques et juridiques ou de la mise en place d'une entité pour monter en maturité sur ces sujets dans une administration.

`>>`  [Lire l'entretien de la mission logiciels libres avec l'équipe OSOR](https://preprod.codegouv.fr/fr/blog/guide-osor-sur-open-source-dans-administration-publique/)
`>>`  [Voir la page de présentation du manuel](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/news/osor-handbook)

<br/>

## 🧢 Rencontre BlueHats le 3O avril autour de Superset, Metabase, etc.

Le 30 avril de 9h à 17h30 au [Lieu de la Transformation Publique](https://www.modernisation.gouv.fr/diffuser-linnovation-publique/le-lieu-de-la-transformation-publique), participez à une journée BlueHats sur les outils libres de gestion et de visualisation de données comme [Apache Superset](https://code.gouv.fr/sill/detail?name=Apache%20Superset) et [Metabase](https://code.gouv.fr/sill/detail?name=Metabase).

`>>` Toutes les informations sur [la page de l'événement](https://code.gouv.fr/fr/bluehats/gestion-et-visualisation-de-donnees-2024/) 

<br/>

## 🚧 Focus Tech : OKDP et ChatMD


### Open Kubernetes Data Platform - TOSIT/DGFiP

OKDP est une plateforme de services de gestion de données. Elle est composée d'un ensemble de logiciels et produits Open Source conteneurisés et repose sur une infrastructure Kubernetes qu'elle n'implémente et ne gère pas. Elle répond à des enjeux et des besoins de collecte, de stockage, de traitement, d'analyse et d'exposition de données. OKDP est modulable et chaque utilisateur pourra en utiliser tout ou partie selon ses besoins.

OKDP est un projet de l'association [TOSIT](https://tosit.fr/), membre du conseil logiciels libres. OKDP est notamment utilisé par la DGFiP.

`>>` Plus d'information sur [OKDP](https://okdp.io) et ses [codes sources](https://github.com/OKDP/)

<br/>

### ChatMD : créer un chatbot à partir d'un fichier Markdown

ChatMD est un logiciel libre développé par Cédric Eyssette 🧢 qui permet de créer un chatbot à partir d'un fichier en Markdown et sans avoir besoin d'un serveur. Cet agent conversationnel reste simple d’accès, collaboratif et évolutif et déployable facilement.

Il est disponible sur la Forge des communs numériques en licence libre MIT et utilisable de manière autonome ou intégrable dans un site web.

ChatMD continue d'évoluer et propose déjà des options plus avancées comme l’intégration des mathématiques, la détection automatique des insultes, la recherche dans le contenu et pas seulement par mots-clés.

À noter que cet outil n'utilise pas d'IA générative mais permet de contrôler et de définir par soi-même les réponses du chatbot.

`>>` Voir [la page de ChatMD](https://eyssette.forge.apps.education.fr/chatMD/) et [son code source](https://forge.aeif.fr/eyssette/chatMD)

<br/>

## 🚀 Focus contributions : Superset et GitLab

### Des cartes choroplèthes dans Apache Superset

[Apache Superset](https://code.gouv.fr/sill/detail?name=Apache%20Superset) est une plateforme d'exploration et de visualisation de données. Parmi les graphiques disponibles dans le catalogue natif, une carte de pays avec subdivision départementale. Problème pour la France : il manque les DROM et la subdivision régionale ! C'est réglé avec deux contributions qui sont intégrées dans la 4.0 qui sort dans les prochains jours.

-   [fix(maps): Move Overseas department and regions closer to France mainland](https://github.com/apache/superset/pull/26995)
-   [fix(maps): france\_regions.geojson generated with the notebook, from natural earth data](https://github.com/apache/superset/pull/27014)

`>>` Suivre le compte GitHub de [Quentin Leroy](https://github.com/qleroy).

<br/>

### Comment faciliter la contribution entre instances GitLab ?

Citons le [rapport sur les forges logicielles](https://www.ouvrirlascience.fr/forges-de-lesr-definition-usages-limitations-rencontrees-et-analyse-des-besoins/) utilisées dans les établissements de l’Enseignement supérieur et de la Recherche (ESR) :

> La principale limitation des forges disponibles actuellement dans l’Enseignement supérieur et de la Recherche est le fait que le public de ces forges (c’est-à-dire les personnes pouvant créer un compte) est limité : la plupart des instances de forges disponibles ne permettent pas à une personne extérieure à l’Enseignement supérieur et de la Recherche de créer elle-même un compte sur ces plateformes. Il existe donc un frein à l’interaction avec la société.

Un ticket a été ouvert sur la gitlab.com pour faire évoluer GitLab de façon à trouver une solution à ce problème.

`>>` [Facilitate code contribution (i.e. forks) from guest users in self hosted instances of GitLab](https://gitlab.com/gitlab-org/gitlab/-/issues/448320)

<br/>

### Le squelette DSFR pour SPIP

Ce plugin SPIP vous permet de mettre en place rapidement et facilement la charte de l’état sur votre site web d’établissement ou disciplinaire. Disponible sur les fermes SPIP de l’académie de Versailles, laissez-vous guider par les tutoriel pour l’installer.

`>>` [Voir la présentation du squelette DSFR pour SPIP](https://ressources.dane.ac-versailles.fr/spip.php?page=tutoriel&id_ressource=431&lang=fr)
`>>` [Lire le code source](https://forge.apps.education.fr/drane-ile-de-france/site-de-versailles/squelette-spip-dsfr)

<br/>

## 🖊️ Focus traduction : Code is Law

> Nous sommes à l’âge du cyberespace. Il possède lui aussi son propre régulateur, qui lui aussi menace les libertés. Mais, qu’il s’agisse d’une autorisation qu’il nous concède ou d’une conquête qu’on lui arrache, nous sommes tellement obnubilés par l’idée que la liberté est intimement liée à celle de gouvernement que nous ne voyons pas la régulation qui s’opère dans ce nouvel espace, ni la menace qu’elle fait peser sur les libertés.
> 
> Ce régulateur, c’est le code [&#x2026;]

Ces mots sont ceux de [Lawrence Lessig](https://fr.wikipedia.org/wiki/Lawrence_Lessig) en janvier 2000. Merci à Framasoft d'avoir organisé et mené à bien la traduction de cet article fondateur.

`>>` [Le code fait loi – De la liberté dans le cyberespace](https://framablog.org/2010/05/22/code-is-law-lessig/)

<br/>

## 🖥️ Focus emploi : Code The Law

Un des principaux chantiers associés à cette offre d'emploi est l'industrialisation du dispositif d'explicabilité des algorithmes publics dont [une démo est disponible](https://code.gouv.fr/demos/catala). Partant des recommandations de [ce rapport](https://inria.hal.science/hal-04391612), nous souhaitons faire plusieurs visualisations de la trace d'explication de la décision à destination du grand public, mais aussi en interne à l'administration aux juristes, développeurs et testeurs.

La ou le dev front sur le projet définira potentiellement à quoi ressemblera le prochain avis d'imposition ou détail de calcul des prestations sociales.

`>>` [Offre d'emploi : Ingénieur développement logiciel spécialiste en web](https://jobs.inria.fr/public/classic/fr/offres/2024-07191)

<br/>

## 📅 Événements

### 29 mars 2024 : la journée du libre éducatif

Nous nous réjouissons de vous accueillir vendredi 29 mars de 8h30 à 17h à la Journée du Libre Éducatif 2024, co-organisée par la région académique d'Ile-de-France et la Direction du numérique pour l'éducation du ministère de l’Éducation nationale et de la Jeunesse.

La journée aura lieu à la Faculté de Droit de l'Université Paris-Est Créteil (UPEC, Campus André Boulle, 83-85 avenue du Général de Gaulle, 94010 Créteil).

`>>` Le [site de l'événement](https://journee-du-libre-educatif.forge.aeif.fr)

<br/>

### 27 mars 2024: Introduction à la reproductibilité des environnements de calcul

Le titre complet : « Introduction à la reproductibilité des environnements de calcul : construction de paquets et liens avec Software Heritage » par Ludovic Courtès et Pierre-Antoine Bouttier.

Ce café guix sera diffusé en direct depuis les journées du réseau français de la recherche reproductible, qui auront lieu à Grenoble du 26 au 28 Mars 2024 JRFRR-2024. Attention, cette session sera diffusée sur ce lien : Café Guix du 27/02. Un pad sera mis en place pour poser vos questions et le lien sera prochainement disponible !

`>>` [La page des cafés Guix 2024](https://hpc.guix.info/events/2024/caf%C3%A9-guix/)

<br/>

### Save the dates : PyData Paris, Numérique en commun[s], JRES 2024

**PyData Paris** aura lieu à la Cité des Sciences du 25 au 26 septembre 2024. Organisé par QuantStack et NumFOCUS, cet événement promet de réunir des mainteneurs et des passionnés de logiciels libres, ainsi que des experts du monde entier, tous unis par leur passion pour les technologies open-source.

`>>` [Announcing PyData Paris 2024](https://medium.com/@PyDataParis/announcing-pydata-paris-2024-700220accc72)

**Numérique en commun[s]** est annoncé cette année le 25 et 26 septembre à Chambéry.

`>>` [Le site de Numérique en commun[s]​](https://numerique-en-communs.fr)

**JRES Rennes 2024** au lieu du 10 au 13 décembre 2024 au Couvent des Jacobins, à Rennes. JRES est, depuis 1995, une conférence biennale réunissant les membres de la communauté des technicien·nes et ingénieur·es en informatique pour l’enseignement supérieur et la recherche français. Elle est un forum d’échange et de transfert de compétences. La prochaine édition se déroulera du 10 au 13 décembre 2024 au Couvent des Jacobins, à Rennes.

`>>` [La page de l'appel à candidatures pour le village du libre](https://2024.jres.org/actualites/appel-a-candidature-pour-le-village-du-libre)

<br/>

## 📰 Revue de presse

### En français

-   [La Direction interministérielle du numérique (DINUM) réunissait ce lundi 18 mars les référentes et référents ministériels du Numérique Ecoresponsable](https://www.linkedin.com/posts/mission-interministerielle-numerique-ecoresponsable_num%C3%A9riqueresponsable-num%C3%A9rique-minumeco-activity-7176635666972213248-gZiG/), linkedin.com, mars 2024
-   [La Commission européenne prise en flag de non-respect de ses propres règles](https://www.itforbusiness.fr/la-commission-europeenne-prise-en-flag-de-non-respect-de-ses-propres-regles-74383), itforbusiness.fr, mars 2024
-   [Comment Opendatasoft est devenue l’acteur incontournable de l’ouverture des données publiques](https://www.lemonde.fr/les-decodeurs/article/2024/03/05/comment-opendatasoft-est-devenue-l-acteur-incontournable-de-l-ouverture-des-donnees-publiques_6220195_4355770.html), lemonde.fr, mars 2024
-   [OPEN : le nouveau programme de financement et d’accompagnement du CNRS pour valoriser les logiciels libres](https://www.cnrs.fr/fr/cnrsinfo/open-le-nouveau-programme-de-financement-et-daccompagnement-du-cnrs-pour-valoriser-les), cnrs.fr, février 2024
-   [Sécurité des SI : La cybersécurité au cœur de la stratégie de l'ESRI](https://www.amue.fr/fileadmin/amue/systeme-information/documents-publications/la-collection-numerique/amue-collection-numerique_31.pdf), amue.fr, février 2024
-   [Education nationale : des logiciels libres pour de nombreux usages, offerts aux enseignants](https://www.zdnet.fr/blogs/l-esprit-libre/education-nationale-des-logiciels-libres-pour-de-nombreux-usages-offerts-aux-enseignants-39964532.htm), zdnet, février 2024
-   [Un rapport parlementaire sur la cybersécurité alerte sur « le piège Microsoft »](https://www.april.org/un-rapport-parlementaire-sur-la-cybersecurite-alerte-sur-le-piege-microsoft), février 2024
-   [Orange condamné à 650 000 € pour non-respect de la licence GPL](https://web.archive.org/web/20240216164701/https://www.legalis.net/actualite/orange-condamne-a-650-000-e-pour-non-respect-de-la-licence-gpl/), février 2024
-   [La France et l’Allemagne renforcent ensemble la souveraineté numérique de l’administration publique en signant une déclaration d’intention commune](https://www.numerique.gouv.fr/espace-presse/la-france-et-lallemagne-renforcent-ensemble-la-souverainete-numerique-de-ladministration-publique-en-signant-une-declaration-dintention-commune/), numerique.gouv.fr, février 2024
-   [Parcoursup : cachez ces vulnérabilités que je ne saurais voir !](https://www.zdnet.fr/actualites/parcoursup-cachez-ces-vulnerabilites-que-je-ne-saurais-voir-39964054.htm), zdnet, février 2024
-   [Open source : la Maison Blanche fait le point sur la sécurisation](https://www.zdnet.fr/blogs/l-esprit-libre/open-source-la-maison-blanche-fait-le-point-sur-la-securisation-39963952.htm), zdnet, janvier 2024
-   [Panoramax, l’alternative libre et française à Google Street View](https://next.ink/125818/panoramax-lalternative-libre-et-francaise-a-google-street-view/), next.ink, janvier 2024
-   [Administration: "généraliser l’utilisation de logiciels libres" au quotidien](https://www.zdnet.fr/blogs/l-esprit-libre/administration-generaliser-l-utilisation-de-logiciels-libres-au-quotidien-39963768.htm), zdnet, janvier 2024
-   [Un observatoire de l’accessibilité numérique pour mettre les collectivités face à leurs manquements](https://acteurspublics.fr/articles/un-observatoire-de-laccessibilite-numerique-pour-mettre-les-collectivites-face-a-leurs-manquements), acteurspublics.fr, janvier 2024
-   [État des lieux de la production et de la valorisation des logiciels issus de la recherche publique française](https://www.ouvrirlascience.fr/wp-content/uploads/2023/12/Etat-des-lieux-de-la-production-et-de-la-valorisation-des-logiciels-issus-de-la-recherche-publique-fran-aise-30402.pdf), ouvrirlascience.fr, septembre 2023

<br/>

### En anglais

-   [Where is all the research software?](https://doi.org/10.7717/peerj-cs.1546) An analysis of software in UK academic repositories. Carlin, D., Rainer, A., & Wilson, D. (2023) PeerJ Computer Science, 9, e1546.
-   [Firefox saw an increase in users following Apple’s default browser changes in the EU](https://www.theverge.com/2024/3/13/24100066/firefox-saw-an-increase-in-users-following-apples-default-browser-changes-in-the-eu), theverge.com, mars 2024
-   [White House Office of Science & Technology Policy Announces Year of Open Science Recognition Challenge Winners](https://www.whitehouse.gov/ostp/news-updates/2024/03/21/white-house-office-of-science-technology-policy-announces-year-of-open-science-recognition-challenge-winners/), whitehouse.gov, mars 2024
-   [Regulating Corporate Behaviour in Digital Ecosystems: Increasing Fairness and Contestability of Digital Markets with Free Software](https://edoc.hu-berlin.de/handle/18452/28971) ([pdf](https://download.fsfe.org/device-neutrality/fsfe-apple-report-final.pdf)), hu-berlin.de, février 2024
-   [European Commission’s use of Microsoft 365 infringes data protection law for EU institutions and bodies](https://www.edps.europa.eu/system/files/2024-03/EDPS-2024-05-European-Commission_s-use-of-M365-infringes-data-protection-rules-for-EU-institutions-and-bodies_EN.pdf) ([slashdot](https://yro.slashdot.org/story/24/03/11/2026249/eus-use-of-microsoft-365-found-to-breach-data-protection-rules)), europa.eu, mars 2024
-   [OpenUK Open Manifesto 2023](https://openuk.uk/openmanifesto/), openuk.uk, mars 2024
-   [OSPO Testimonials .. they walk the talk!](https://ospo-alliance.org/ospo-stories/), ospo-alliance.org, mars 2024
-   [Changes at the Foundation for Public Code Europe office](https://blog.publiccode.net/news/2024/02/28/changes-at-the-europe-office.html), publiccode.net, février 2024
-   [Public services interoperability: Open Source efforts in and around the European Commission](https://fosdem.org/2024/schedule/event/fosdem-2024-3712-public-services-interoperability-open-source-efforts-in-and-around-the-european-commission-and-how-about-a-next-ec-open-source-strategy/), fosdem.org, février 2024
-   [Finnish University of Applied Sciences Offers Free Courses to Support Open-Source Business Uptake](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/news/english-mini-courses-focus-business-development-oss), europa.eu, février 2024
-   [EDPB Unveils a new open source website auditing tool for data protection compliance checks](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/news/new-tool-data-protection-compliance-checks), europa.eu, février 2024
-   [EU Open Source Policy Summit 2024](https://summit.openforumeurope.org/), openforumeurope.org, février 2024
-   [French Court Issues Damages Award for Violation of GPL](https://heathermeeker.com/2024/02/17/french-court-issues-damages-award-for-violation-of-gpl/amp/), heathermeeker.com, février 2024
-   [Open Source In The European Legislative Landscape devroom](https://fosdem.org/2024/schedule/track/eu-policy/), fosdem.org, février 2024
-   [The Value of Open Source Software](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4693148), ssrn.com, janvier 2024
-   [Recent keyboard navigation improvements in Jupyter](https://blog.jupyter.org/recent-keyboard-navigation-improvements-in-jupyter-4df32f97628d), jupyter.org, décembre 2023
