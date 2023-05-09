---
title: Documentation
linkTitle: La mission logiciels libres vous accompagne dans la mise en oeuvre du plan d'action
layout: layouts/page.njk
eleventyNavigation:
  key: Documentation
  parent: Ressources
  order: 1
docs:
  - url: https://guides.etalab.gouv.fr/logiciels/
    title: Guide pratique sur l'ouverture des codes sources
    description: |
      Ce guide vous aide à définir vos objectifs en matière d'ouverture des codes sources.
  - url: https://guide-juridique-logiciel-libre.etalab.gouv.fr/
    title: "Guide juridique interactif : quels codes sources ouvrir "
    description: |
      En répondant à quelques questions, faites un point sur vos obligations.
  - url: https://www.data.gouv.fr/fr/pages/legal/licences/
    title: Les licences autorisées pour les codes sources du secteur public
    description: |
      Les codes sources de l'administration peuvent être publiées sous plusieurs licences, parmi lesquelles : Apache, BSD, CeCILL, MPL et les licences du projet GNU.
  - url: https://www.numerique.gouv.fr/publications/politique-logiciel-libre/
    title: Politique de contribution aux logiciels libres de l’État
    description: |
      Depuis 2018, la politique de contribution aux logiciels libres de l’État guide l'ouverture des codes sources publics et la contribution à des projets tiers.
  - url: https://www.legifrance.gouv.fr/circulaire/id/45162
    title: Circulaire relative à la politique publique de la donnée, des algorithmes et des codes sources
    description: |
      Une nouvelle impulsion pour l'ouverture des codes sources de toutes les administrations.
slugOverride: doc
---

<div class="fr-grid-row fr-grid-row--gutters">

  {% for doc in docs %}
  <div class="fr-col-12 fr-col-md-4">
    <div class="fr-card fr-enlarge-link">
      <div class="fr-card__body">
        <div class="fr-card__content">
          <h2 class="fr-card__title">
            <a href="{{ doc.url }}" class="fr-card__link">{{ doc.title }}</a>
          </h2>
          <p class="fr-card__desc">{{ doc.description }}</p>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}

</div>

<br>

Pour être tenus au courant des nouveaux chantiers, [inscrivez-vous à la gazette BlueHats](https://code.gouv.fr/newsletters/subscribe/bluehats@mail.etalab.studio).

Besoin d'aide ou d'accompagnement ?  [Contactez-nous !](mailto:contact@code.gouv.fr)
