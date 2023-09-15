---
title: OpenFisca
layout: layouts/page.njk
segments:
  - url: /explicabilite/
    title: Explicabilité
showBreadcrumb: true
---

### Introduction

OpenFisca est le moteur libre et ouvert le plus largement utilisé au monde pour transformer la loi en code et calculer son application aussi bien sur des situations individuelles que sur les populations locale et nationale.
Développé en France depuis 2011, il est utilisé en production depuis 2014 par la DINUM, distingué par la [Commission européenne](https://joinup.ec.europa.eu/collection/sharing-and-reuse-it-solutions/sharing-reuse-awards-2019-results#oss-inno) en 2019 en par l’[OCDE](https://oecd-opsi.org/publications/cracking-the-code/) en 2020, et déployé sur [quatre continents](https://openfisca.org/fr/packages) en 2022. En 2023, OpenFisca est reconnu comme [innovation de l'année](https://www.khaleejtimes.com/uae/sheikh-saif-honours-french-governments-openfisca-project) au World Government Summit et comme [Bien Commun Numérique](https://app.digitalpublicgoods.net/a/10318) par l'Agence des Nations Unies pour le Développement et l'agence norvégienne pour le développement, à travers la [Digital Public Goods Alliance](https://digitalpublicgoods.net).

### Présentation

OpenFisca est un ensemble d'outils logiciels en Python, le langage le plus utilisé pour les sciences de la donnée.
Son langage descriptif ([DSL](https://fr.wikipedia.org/wiki/Langage_dédié)) pour écrire les formules de calcul et leurs références législatives permet aux administrations de partager efficacement les mises à jour règlementaires et d’en mutualiser les coûts de maintenance en interconnectant les règles.
Son système de publication automatique des règles modélisées sur une [interface web](http://legislation.fr.openfisca.org) rend la loi explorable et offre une transparence algorithmique minimale immédiate à coût nul.
Son [API web REST](https://legislation.fr.openfisca.org/swagger) en JSON permet aux équipes de développement de livrer facilement des applications et des sites web qui effectuent des calculs de taxes, de cotisations et d'éligibilité.
Son [API Python](https://openfisca.org/doc/openfisca-python-api/index.html) vectorielle permet aux experts de la donnée d’effectuer des calculs à grande échelle et de les interconnecter avec leurs bases de données et bibliothèques habituelles. Les économistes peuvent s’appuyer sur ces modèles pour déterminer l'impact de toute réforme passée, future, ou hypothétique sur toute population.
Son [architecture](https://openfisca.org/doc/architecture.html) d’extensions et sa documentation riche permet de féderer des communautés nationales et locales d’agents publics, mais aussi de contributeurs associatifs et privés, qui collaborent pour modéliser la loi et la rendre exécutable.
Des [milliers de tests](https://github.com/openfisca/openfisca-france/tree/master/tests) sur des situations réelles contribuées par des administrations partenaires et des individus démontrent la robustesse du modèle français, y compris sur les zones grises qui sont spécifiées par des circulaires internes ou des pratiques spécifiques plutôt que par la loi.

### Usages actuels par des administrations publiques

#### En France

- En 2022, près de [700 000 simulations](https://mes-aides.1jeune1solution.beta.gouv.fr/stats) ont permis à des jeunes d'évaluer leurs droits à plus de 600 aides sur le simulateur [1 jeune 1 solution](https://mes-aides.1jeune1solution.beta.gouv.fr).
- Le [portail national des droits sociaux](https://mesdroitssociaux.gouv.fr) permet l’évaluation à près de 60 aides. Il est édité par la CNSA et les ministères sociaux et est basé sur OpenFisca depuis son lancement en 2017.
- L’outil [Estime](https://estime.pole-emploi.fr) de Pôle Emploi permet aux personnes en recherche d’emploi d’estimer rapidement l’évolution de leurs droits au chômage en cas de reprise d’emploi. Grâce à OpenFisca, le SI sous-jacent a pu être modernisé en quelques mois et le taux d’activation usager a en conséquence augmenté significativement.
- En 2021, [122 simulations](https://leximpact.an.fr/statistiques) ont été effectuées par des parlementaires grâce au simulateur LexImpact de l'Assemblée Nationale, basé sur OpenFisca, et plusieurs ont été utilisées lors des débats en séance.
- En 2019, plus de 1,6 million de ménages ont été informés de leurs droits et plus de 420 000 ont commencé une démarche de demande à une allocation [grâce au simulateur Mes Aides](https://blog.beta.gouv.fr/general/2019/11/18/mes-aides-metriques/), qui a vu le jour sur la base d’OpenFisca en 2014.
- Plusieurs collectivités locales utilisent OpenFisca pour faciliter l’accès à leurs prestations sociales : Paris, Rennes, Brest, Strasbourg…
- La [fiscalité minière](https://github.com/openfisca/openfisca-france-fiscalite-miniere/) est modélisée avec OpenFisca.
- Avec le soutien de l'ANCT, les dotations aux collectivités locales sont estimées par OpenFisca pour accélérer et faciliter la création de leur budget annuel.

#### Ailleurs en Europe

- La ville de Barcelone, en Espagne, utilise OpenFisca pour [calculer les aides sociales](https://ajuntament.barcelona.cat/lesmevesajudes/) de ses résidents.
- Le calculateur [PolicyEngine](https://policyengine.org/uk/policy) modélise la loi britannique.
- Les Pays-Bas et la Grèce expérimentent de 2023 à 2025 la modélisation avec OpenFisca pour la création d’assistants règlementaires.

#### En Océanie

- La Nouvelle-Zélande [utilise OpenFisca](https://serviceinnovationlab.github.io/projects/legislation-as-code/) pour informer les citoyens sur leur éligiblité à des dispositifs comme Rates Rebates ou [SmartStart](https://smartstart.services.govt.nz) et [documenter](https://nz.openfisca.org) ses règles de droit.
- L'Australie utilise OpenFisca pour calculer l’éligibilité à des dispositifs comme [Energy Saving Scheme](https://www.codeforaustralia.org/case-studies/dpie-rules-as-code) et à des activités professionnelles avec [Community Gaming Check](https://www.fairtrading.nsw.gov.au/community-gaming/community-gaming-regulation-check).
- La Polynésie Française a [modélisé](https://github.com/govpf/openfisca-pf) plusieurs taxes et impôts.

#### En Amérique du Nord

- OpenFisca est évalué [au Canada](https://github.com/potatowave/openfisca-canada) par le département Rules as Code du gouvernement fédéral.
- Le calculateur [PolicyEngine](https://policyengine.org/us/policy) consolide les règles fiscales de nombreux États américains.

#### En Afrique et Moyen-Orient

- La Tunisie, le Mali, la Côte d'Ivoire, le Sénégal, les Émirats Arabes Unis ont prototypé des calculs avec OpenFisca.

### Comment l'outil peut contribuer à éclairer des calculs de l'administration (outil de calcul direct, mise en ligne de simulateurs, etc.)

Le mode principal d'explication des calculs est la mise à disposition de simulateurs qui permettent aux usagers de comprendre expérimentalement le mode de calcul en faisant varier les entrées fournies.

Par ailleurs, le modèle étant fourni sous licence libre et les API documentées, des usagers ayant une capacité technique ou des personnes pouvant les assister peuvent construire des outils d'explication spécifiques, indépendamment des administrations. Cela a par exemple été le cas pour [les conséquences de la garde alternée sur les allocations familiales](https://pa-comp.firebaseapp.com/).

Enfin, chaque modèle et toutes ses références législatives sont directement explorables en ligne dans l'Explorateur de Législation (par exemple [le modèle français](https://legislation.fr.openfisca.org)), ce qui permet d’identifier les sources légales d’un calcul.

### Quelle documentation pertinente pour un agent public qui souhaite explorer l'outil dans le cadre de la mise en oeuvre d'explications autour d'un calcul de son administration?

- La [documentation officielle sur openfisca.org/doc](https://openfisca.org/doc), en anglais.
- Une prise de contact avec l'équipe cœur en écrivant à [contact@openfisca.org](mailto:contact@openfisca.org).
 
### Où est le code source et sous quelle licence

Le code source des outils OpenFisca est disponible sur l'organisation [@OpenFisca sur GitHub](https://github.com/openfisca). Tous les outils partagés sont sous licence AGPL. Le modèle français est également sous licence AGPL. Chaque modèle de pays peut avoir sa propre licence, mais la plupart sont sous licence AGPL.

### Qui développe l'outil (= qui a le contrôle sur les choix techniques)

La gouvernance d'OpenFisca est communautaire : toute entité peut suggérer ou directement contribuer des améliorations. Néanmoins, les modalités d'orientation et de validation finale varient selon les composants concernés : il faut distinguer les éléments cœur (moteur de calcul, API web, explorateur de législation…) des modèles de pays et des extensions.

- Une équipe cœur financée jusqu’à l’heure de rédaction principalement par des acteurs publics français encadre l’évolution des éléments partagés, principalement par l’édiction et l’application de règles de qualité (validation par des tests, revue par des pairs, interopérabilité des fonctionnalités, versionnement sémantique, publication automatique des paquets…). Elle investit également dans les évolutions techniques nécessaires pour la stabilité et la sécurité. Les fonctionnalités sont proposées et implémentées par les membres de la communauté selon leur besoins.
- Les modèles de pays sont soumis à une gouvernance décidée par le collectif qui l’édite. L’équipe cœur fournit un template qui incorpore les bonnes pratiques techniques et organisationnelles identifiées (tests automatisés, versionnement, publication…), mais chaque pays reste libre de son organisation. En France, l’évolution du modèle est garantie par près d’une dizaine d’administrations et organismes de recherche et repose sur un mélange de zones de responsabilité identifiées (par exemple, Pôle Emploi est l’entité la plus légitime pour modéliser les règles de l’assurance chômage) et de revues de code par des pairs pour garantir l’interopérabilité et la lisibilité.
- Les extensions sont également soumises à une gouvernance décidée par l’entité qui les a initiées. Le plus souvent, il s’agit de juridictions de petite taille (collectivité locale) ou de sujets de niche (réforme des retraites) qui impliquent un intérêt et des contributions limitées de la part d’une communauté large, et les évolutions sont décidées par un seul acteur.

En 2022 et 2023, cette gouvernance est amenée à être progressivement élargie et formalisée pour garantir sa lisibilité et sa pérennité.
