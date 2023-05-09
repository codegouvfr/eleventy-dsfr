---
title: Gazette BlueHats 🧢 n°5
date: 2020-05-05
---

## Le socle interministériel de logiciels libres 2020 est en ligne

Le socle interministériel des logiciels libres (SILL) 2020 est publié.  Ce catalogue de référence des logiciels libres pour l'administration est le fruit d’une collaboration entre une communauté d’agents publics informaticiens et la direction interministérielle du numérique.

Jusqu'en 2019, le SILL était mis à jour une fois par an et publié sous forme de document PDF.  Il est désormais mis à jour *en continu* et publié par [Etalab](https://www.etalab.gouv.fr/) sous forme de site web: <https://sill.code.gouv.fr>.

Cette interface permet de faire une recherche rapide, d'avoir des URLs stables pour chaque logiciel, de filtrer par catégorie de logiciel ou par statut (« recommandé » ou « en observation »), de voir [quelques chiffres](https://sill.code.gouv.fr/fr/stats) utiles, de vous abonner au [fil RSS des mises à jour](https://sill.code.gouv.fr/updates.xml) et de consulter les catalogues de deux années passées.  À noter que l'interface est aussi accessible en [italien](https://sill.code.gouv.fr/it/software), [allemand](https://sill.code.gouv.fr/de/software), [espagnol](https://sill.code.gouv.fr/es/software) et [anglais](https://sill.code.gouv.fr/en/software).

Du côté des nouveaux logiciels référencés, nous trouvons entre autres la solution de visioconférence [BigBlueButton](https://sill.code.gouv.fr/en/software?id=196), le logiciel d'hébergement décentralisé de vidéos [Peertube](https://sill.code.gouv.fr/en/software?id=197), des logiciels produits par le secteur public comme [VITAM](https://sill.code.gouv.fr/en/software?id=194), [Archifiltre](https://sill.code.gouv.fr/en/software?id=185), [Openfisca](https://sill.code.gouv.fr/fr/software?id=200) ou le [SDK Géoportail](https://sill.code.gouv.fr/fr/software?id=201), ainsi que d'autres logiciels importants comme [Opale](https://sill.code.gouv.fr/fr/software?id=195), [Zimbra](https://sill.code.gouv.fr/fr/software?id=202), [Redis](https://sill.code.gouv.fr/en/software?id=184), [OpenShot](https://sill.code.gouv.fr/en/software?id=193) ou [RStudio](https://sill.code.gouv.fr/en/software?id=182).

En tout, ce sont **190 logiciels libres référencés**, soit **34 de plus** qu'en 2019.  Parmi les logiciels du SILL 2020, 144 ont le statut « recommandés » et 46 sont marqués « en observation ».

Enfin, la communauté des référents SILL s'est élargie : si vous êtes agent public de fonction publique d'État ou hospitalière et que vous souhaitez contribuer au référencement d'un logiciel libre, les groupes MIM qui font le SILL sont là pour vous accueillir !  Vous pouvez pour cela écrire à `contact@code.gouv.fr`

`>>` Pour consulter le SILL, rendez-vous sur [sill.code.gouv.fr](https://sill.code.gouv.fr).

`>>` Pour lire l'annonce, rendez-vous sur le site [numerique.gouv.fr](https://www.numerique.gouv.fr/actualites/socle-interministeriel-des-logiciels-libres-sill-2020/)

`>>` N'hésitez pas à relayer [l'annonce de la DINUM sur Twitter](https://twitter.com/_DINUM/status/1257606834225102848?s=20)


## Focus sur le logiciel libre à la DANE de Lyon

*Un témoignage de Cédric Frayssinet, chargé de Missions DANE, référent Usages & Outils.*

La Délégation Académique au Numérique Éducatif (DANE) est un service du [Rectorat de Lyon](http://dane.ac-lyon.fr). Il est piloté par un DAN, 2 DAN adjoints et composé d’une grosse dizaine d’enseignants en mi-temps. Ce fonctionnement permet une meilleure prise en compte des usages du numérique dans les établissements scolaires.

Depuis toujours, la DANE de Lyon s’est positionnée en faveur des logiciels libres.  Outre l’aspect éthique qui concerne encore trop peu de monde, ce sont les seuls logiciels que tous les élèves peuvent installer et utiliser chez eux, sans contraintes et en respectant les enjeux de la protection des données personnelles.

Il y a quelques années, la solution [Eole-Scribe](https://pcll.ac-dijon.fr/eole/) a été installée dans tous les collèges et lycées de l’académie, avec un cahier des charges d’installation d’applications basés quasi exclusivement sur des logiciels libres : LibreOffice, VLC, Mozilla Firefox, Audacity, OpenShot, Geogebra, etc.

Aujourd’hui, nous développons au maximum les services aux usagers basés sur les logiciels libres. Outre les blogs WordPress, les sites SPIP, nous avons été la première académie à déployer [une instance PeerTube](https://tube.ac-lyon.fr) pour offrir à nos enseignants une solution de diffusion vidéos, libre, éthique et très performante !

Cette solution, développée par l'association d'éducation populaire [Framasoft](https://framasoft.org/fr/), a été déployée facilement par la DSI via Docker et la barre des 100000 vues a été passée récemment.  Outre les aspects déjà mentionnés ci-dessus, nous apprécions les mises à jours aisées et l’implémentation du protocole BitTorrent pour regarder une vidéo, ce qui allège considérablement la bande passante fournie par le Rectorat.  Nous n’utilisons pas encore la fédération d’instances mais cela devrait ouvrir de nouveaux usages à moyen terme.

Pour finir, nous venons d’ouvrir un cloud avec NextCloud pour tous nos enseignants du 1er degré afin de les aider dans le partage des fichiers à destination des élèves.  Ce service était beaucoup attendu et nous ne doutons pas qu’il saura séduire les professeurs des écoles !

`>>` Pour en savoir plus sur la DANE de Lyon : [dane.ac-lyon.fr](https://dane.ac-lyon.fr)


## Focus sur [apps.education.fr](https://apps.education.fr)

Pour accompagner au quotidien l'ensemble des agents du ministère de l'Éducation nationale et de la jeunesse et répondre aux besoins du travail à distance pendant le confinement, la direction du numérique pour l'éducation a mis à disposition une version beta de sa plateforme [apps.education.fr](https://apps.education.fr), une plateforme d'applications libres avec Peertube, Nextcloud, MyPads et Etherpad, Discourse, CodiMD ainsi qu'un service de blog.

Le projet initial visait que chaque application du catalogue général soit exploitée par une académie différente. Cela a pu être mis en place dans le cadre de l'appel à projet lancé à l'automne 2019 pour Nextcloud (Versailles) et Peertube (Grand-Est), mais nous sommes à la recherche de porteurs pour d'autres applications du catalogue.

Le site web de présentation du projet a été développé par la DSI de l'académie de Lyon.  Des DSI d'autres académies, notamment Poitiers et Saint-Pierre-et-Miquelon, ont pris en charge pour cette version beta la mise en place de la supervision, basé sur les logiciels Prometheus et Grafana.  Des personnels de plusieurs des académies comme celle de Guyane, Lyon, Grenoble, Corse, Montpellier, Orléans-Tours, Versailles ont travaillé à l'élaboration des documents d'accompagnement (en se coordonnant via des canaux Tchap et en rédigeant à l'aide des Pads).

Nous commençons dès maintenant à travailler à la pérennisation technique et organisationnelle de cette offre de service, avec la possibilité d'éprouver les usages réels à grande échelle dans le cadre du confinement.

Le code de "La Boîte" développé en mode agile par le Pôle Nationale Logiciels Libres / EOLE est disponible sous [licence libre](https://gitlab.mim-libre.fr/alphabet/laboite).  Le projet bénéficie des investissements d'avenir avec la présence de deux [Designers d'Intérêt Général](https://entrepreneur-interet-general.etalab.gouv.fr/defis/2019/alphabet.html) cette année.  Il est coordonné par une équipe de la Direction du Numérique pour l'Éducation en collaboration avec l'équipe du Pôle National Logiciels Libres / EOLE.


## La CNIL publie un guide pour les développeurs pour l'application du RGPD

Le 27 janvier dernier, la CNIL a mis en ligne un guide à destination pour les développeurs dans le cadre de l'application du RGPD.

La CNIL précise notamment que pour les sites web et applications utilisant des solutions d'analyse d'audience, **il n'y a que les solution libres** telles que Matomo qui peuvent bénéficier d'une exemption de consentement. Toutes les autres doivent recevoir le consentement explicites des utilisateurs pour pouvoir commencer à collecter des données.

Citation exacte: « Pour pouvoir bénéficier de cette exemption de consentement rapprochez-vous de votre éditeur de solution ou bien utilisez un logiciel libre tel que Piwik que vous pouvez configurer vous-même. »

`>>` Pour en savoir plus, consultez [le guide de la CNIL](https://www.cnil.fr/fr/mesurer-la-frequentation-de-vos-sites-web-et-de-vos-applications)


## Postulez au programme Entrepreneurs d’Intérêt Général – promotion 4 – jusqu'au 7 juin !

Vous êtes spécialiste en data science, développement, design, data engineering ou géomatique ? Rejoignez la quatrième promotion du programme Entrepreneurs d’Intérêt Général !

Le programme Entrepreneurs d’Intérêt Général, qui s’inscrit dans TECH.GOUV, le programme d’accélération de la transformation numérique de l’Etat, lance un appel à candidatures pour permettre à des profils extérieurs à l’administration de contribuer à l’amélioration du service public à l’aide de leurs compétences numériques. Il vise à recruter une promotion de 41 entrepreneurs d’intérêt général (EIG) spécialistes du numérique qui intègreront l’administration en septembre 2020.

Les produits du programme EIG sont [publiés sous licence libre](https://github.com/entrepreneur-interet-general/).

`>>` Pour en savoir plus, rendez-vous sur [l'annonce sur le blog d'Etalab](https://www.etalab.gouv.fr/du-4-mai-au-7-juin-postulez-au-programme-entrepreneurs-dinteret-general-promotion-4)

`>>` Vous pouvez aussi consulter [la liste des défis proposés](https://entrepreneur-interet-general.etalab.gouv.fr/defis.html) et suivre [le compte Twitter du programme](https://twitter.com/eigforever)


## Et si vous organisiez le prochain événement #BlueHats ?

Tout l'écosystème du logiciel libre est invité à organiser des événements #BlueHats.

Que vous soyez une administration, une association ou une entreprise, si vous organisez des ateliers autour de logiciels libres utilisés dans l'administration, vous pouvez librement vous emparer du hashtag #BlueHats et organiser des événements avec des chapeaux bleus !

L'équipe d'[Etalab](https://www.etalab.gouv.fr/accompagnement-logiciels-libres) est à votre disposition pour aider si besoin.


## Retour sur les événements #BlueHats passés


### 1er sprint open source de l'administration

La direction interministérielle du numérique (DINUM) et le 110 bis, le lab d’innovation de l’Éducation nationale, ont rassemblé la communauté BlueHats pour le premier sprint open source du secteur public les 19 et 20 novembre derniers.

`>>` Lire la suite sur le [site du l'éducation nationale](https://www.education.gouv.fr/retour-sur-le-premier-sprint-open-source-bluehats-de-l-administration-89270) ou le [site de la DINUM](https://www.numerique.gouv.fr/actualites/retour-sur-le-premier-sprint-open-source-bluehats-administration/a)


### La journée #BlueHats au Paris Open Source Summit 2019

Un an après le lancement de 2018, même lieu, même événement, même ferveur : les #BlueHats – les hackers d’intérêt général – se sont réunis en décembre dernier pour une nouvelle journée de rencontres et d’échanges dans le cadre du Paris Open Source Summit, qui l’avait vu naître un an auparavant sous l’impulsion de la DINUM (alors DINSIC).

Salle comble tout au long de la journée : il en fallait bien plus qu’une grève de transports pour décourager les passionnés d’open source dans l’administration ! Les 22 intervenants ont présenté la façon dont ils développent ou utilisent des solutions libres dans leurs administrations.

`>>` Retrouvez l’ensemble des supports de présentation [sur le forum d'Etalab](https://forum.etalab.gouv.fr/t/journee-bluehats-lors-du-paris-open-source-summit-le-11-decembre-2019/4614)


## Publication du programme européen Open Source Observatory

Le programme européen Open Source Observatory (OSOR) a publié [une étude de cas sur Tchap](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/document/french-government-launches-house-developed-messaging-service-tchap) ainsi que des rapports sur l'[état de l'open source](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/open-source-software-country-intelligence#France) dans le secteur public européen.

Le même programme a aussi publié les supports de présentation du webinaire où les représentants des pays ont échangés sur ces rapports, vous pouvez retrouver le résumé du webinaire et un support de synthèse sur le site [joinup.ec.europa.eu](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/news/webinar-open-source-software-policies).

`>>` Pour suivre les informations d'OSOR: <https://twitter.com/OSOReu>


## Revue de presse

-   [Netherlands commits to Free Software by default](https://fsfe.org/news/2020/news-20200424-01.fr.html) (FSFE, 24 avril 2020)
-   [Scaleway multiplie les solutions cloud pour soutenir la continuité des services de l’État dans la crise du COVID-19](https://blog.scaleway.com/2020/scaleway-multiplie-les-solutions-cloud-pour-soutenir-la-continuite-des-services-de-letat-dans-la-crise-du-covid-19/) (Scaleway, 2 avril 2020)
-   [CERN updates its Open Hardware Licence](https://home.cern/news/news/knowledge-sharing/cern-updates-its-open-hardware-licence) (CERN, 12 mars 2020)
-   [La Commission européenne recommande à ses employés de passer à Signal](https://www.zdnet.fr/blogs/l-esprit-libre/la-commission-europeenne-recommande-a-ses-employes-de-passer-a-signal-39899925.htm) (ZDNET, 29 février 2020)
-   [Les gendarmes et la justice, utilisateurs du logiciel libre VLC](https://www.zdnet.fr/blogs/l-esprit-libre/les-gendarmes-et-la-justice-utilisateurs-du-logiciel-libre-vlc-39899783.htm) (ZDNET, 26 février 2020)
-   [La Commission européenne adopte Signal, sauf pour les discussions très sensibles](https://www.numerama.com/tech/607720-la-commission-europeenne-adopte-signal-sauf-pour-les-discussions-tres-sensibles.html) (Numerama, 25 février 2020)
-   [L'Université de Lille mise sur le collaboratif open source pour la mobilité](https://www.lemondeinformatique.fr/actualites/lire-l-universite-de-lille-mise-sur-le-collaboratif-open-source-pour-la-mobilite-78081.html) (lemondeinformatique.fr, 16 février 2020)
-   [Municipales 2020 - Liste des signataires du Pacte du Logiciel Libre](https://www.candidats.fr/post/2020/02/11/municipales-2020-liste-des-signataires-du-pacte-du-logiciel-libre) (candidats.fr, 11 février 2020)
-   [Avec la fin du support de Windows 7, le gouvernement sud-coréen a élaboré une stratégie pour migrer à grande échelle sur un OS Linux](https://www.lemondeinformatique.fr/actualites/lire-avec-la-fin-de-windows-7-la-coree-du-sud-va-migrer-sur-linux-78029.html) (lemondeinformatique.fr, 7 février 2020)
-   [Un lycée 100 % sous Linux… ou presque](https://www.microlinux.fr/lycee-sous-linux/) (microlinux.fr, 30 janvier 2020)
-   [SambaÉdu 4, une solution de serveurs pédagogiques libres basés sur GNU/Linux](https://linuxfr.org/news/sambaedu-4-une-solution-de-serveurs-pedagogiques-libres-bases-sur-gnu-linux) (linuxfr.org, 5 janvier 2020)
-   [Boé décroche le Label "Territoire Numérique Libre"](https://www.ladepeche.fr/2019/12/23/boe-decroche-le-label-territoire-numerique-libre,8622489.php) (ladepeche.fr, 23 décembre 2019)
-   [France to launch the Digital Labour Code open source platform](https://joinup.ec.europa.eu/collection/open-source-observatory-osor/news/french-labour-code-open-source) (joinup.ec.europa.eu, 20 décembre 2020)
-   [Travailler avec l’Adullact, pour des logiciels libres au sein de la collectivité](http://www.courrierdesmaires.fr/84800/ladullact-pour-des-logiciels-libres-au-sein-de-la-collectivite/) (courrierdesmaires.fr, 13 décembre 2019)
-   [Conjuguer open source et science ouverte : opportunités et leviers d’action](https://inno3.fr/actualite/conjuguer-open-source-et-science-ouverte-opportunites-et-leviers-daction) (inno3, 11 décembre 2019)
-   [La France leader de l’open source en Europe](https://www.channelnews.fr/la-france-leader-de-lopen-source-en-europe-93508) (channelnews.fr, 11 décembre 2019)
-   [Note d’opportunité sur la valorisation des logiciels issus de la recherche](https://www.ouvrirlascience.fr/note-dopportunite-sur-la-valorisation-des-logiciels-issus-de-la-recherche/) (www.ouvrirlascience.fr, novembre 2019)
-   [Le Cloud AWS est une drogue douce dangereuse selon le ministère de l’Economie](https://www.lebigdata.fr/cloud-aws-drogue-douce) (www.lebigdata.fr, 15 octobre 2019)

