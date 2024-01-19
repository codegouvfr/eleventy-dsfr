---
title: "De la transparence à l’explicabilité automatisée des algorithmes"
description: "Nous publions une entrée de blog proposé par Denis Merigoux, qui présente des travaux relatifs à l'explicabilité des décisions administratives"
date: 2024-01-18
image:
  path: ./illustration-explication-algorithmes.png
  alt: "Exemple d'interface pour expliquer un traitement algorithmique"
  hide: True
tags: explicabilité algorithmes transparence
---

*La transparence algorithmique ne se résume pas à la publication des codes sources. Comme le reflète la page que nous avons dédiée aux [outils aidant à expliquer les décisions administratives](https://code.gouv.fr/fr/explicabilite/), les façons de traduire du texte juridique en code source informatique sont variées. La mission logiciels libres accueille une entrée de blog invitée proposée par Denis Merigoux, qui présente un travail de recherche récent sur ces sujets. Les recommandations formulées dans cette entrée de blog appartiennent à son auteur.*

L’explicabilité des algorithmes publics n’a rien d’une question purement technique devant restée confinée aux cercles experts des DSI des administrations. Affelnet, ParcourSup et MonMaster, les algorithmes de répartition des élèves et des étudiants, ont alimenté de vifs débats.

L’ouverture des codes sources constitue déjà une démarche remarquable de transparence. Mais, la mise à disposition de documents aussi techniques est loin d’avoir réglé les craintes des citoyens quant à la manière dont ils sont administrés. D’autant plus que, derrière ces cas sonores, il existe une **multitude d’algorithmes organisant la vie publique** : pour la tarification des droits d’accès aux services publics (transports, d’accès à l’eau ou de logement social) ; de détection automatisée des infractions routières (stationnement illégal, franchissement de feux) ; les algorithmes de calcul (des salaires des agents publics, des impôts, des amendes, des aides sociales, des droits à la retraite). La vie publique est donc profondément structurée par des algorithmes, dont le public n'a souvent connaissance que lorsqu’ils dysfonctionnent. Etalab en avait initié [l'inventaire ](https://www.etalab.gouv.fr/faire-linventaire-des-algorithmes-publics-point-detape-sur-les-actions-detalab/) en 2021.

Le deuxième alinéa de l'article 47 de la [loi du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés](https://https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037823131) fixe l’horizon d’attente de l’explication des décisions administratives utilisant des algorithmes. Elles doivent être **individualisées, détaillées et intelligibles par la personne concernée**. Cependant, dans la pratique, toutes ces décisions algorithmiques ne font pas l’objet d’explication et, lorsque c'est le cas, elles se caractérisent par leur brièveté, voire un certain hermétisme. Par exemple, bien que le bulletin de paie des agents publics soit relativement détaillé et individualisé, qui est capable de déchiffrer les mécanismes de calcul de ses cotisations sociales ?

{% imageContent "./illustration-explication-algorithmes.png", "Exemple d'interface pour expliquer un traitement algorithmique" %}

Partant d'un état des lieux des pratiques administratives en France, nous estimons qu’aucune forme explicative des décisions automatisées déployée ne remplit les exigences de la loi pour l'informatique et les libertés. Notre rapport de recherche propose **d'élargir la [conception d'Etalab](https://https://guides.etalab.gouv.fr/algorithmes/) de l'explicabilité des algorithmes publics, afin de la rendre plus opérationnalisable** par les administrations. Nous affirmons ainsi que l'explicabilité des algorithmes publics n'est pas seulement un enjeu externe (de redevabilité vis-à-vis des personnes physiques et morales impliquées par ces traitements administratifs, ni même vis-à-vis de la société politique dans son ensemble comme l'a montré), mais qu'il s'agit, dans le même temps, d'un enjeu interne à l'administration (pour la maîtrise de ses systèmes d'information).

<br/>
<p>
  <center>
    <button class="fr-btn fr-btn--secondary">
      <a title="Lire le rapport de recherche" href="https://inria.hal.science/hal-04391612">Lire le rapport de recherche : « De la transparence à l’explicabilité automatisée des algorithmes »</a>
    </button>
  </center> 
</p>
<br/>

Pour contribuer à cette réflexion critique et renouveler les termes du débat, à partir d’une enquête sur l’explication de l’algorithme calculant les aides au logement et de travaux menés dans le cadre du [projet Catala à l’Inria](https://https://catala-lang.org/fr/), nous explorons la faisabilité d'une **production automatique d'explications individualisées, détaillées et intelligibles** par les parties prenantes du contrôle interne et externe du système de décision algorithmique.

À l'issue de ce travail, nous formulons une double recommandation. Premièrement, le système technique d'explication de la décision doit être aligné sur le système technique de prise de cette décision. Deuxièmement, le système de prise de décision doit être adossé sur les éléments qui fondent et justifient le traitement, et en particulier le droit qui spécifie, de manière plus ou moins détaillée, la plupart des décisions prises par les administrations. Nous avons **testé la faisabilité de cette recommandation dans des prototypes**, annexés au [rapport](https://inria.hal.science/hal-04391612).

<br/>
<p>
  <center>
    <button class="fr-btn fr-btn--secondary">
      <a title="Voir la démo en ligne" href="https://code.gouv.fr/demos/catala/">Voir les simulateurs pour les Allocations familiales et les aides au logement.</a>
    </button>
  </center> 
</p>
