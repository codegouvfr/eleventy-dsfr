---
title: Données personnelles et cookies
layout: layouts/post.njk
slugOverride: donnees personnelles
showBreadcrumb: true
date: 2021-04-29
---
Ce site ne prélève aucune donnée à caractère personnel. L’outil de mesure d’audience que nous utilisons est paramétré de façon à ce que les informations recueillies soient anonymisées.

Les _cookies_ déposées sur votre ordinateur lorsque vous le consultez nous permet de connaître le nombre de visites et les pages les plus consultées, sans pour autant permettre de vous identifier personnellement.

Nous sommes ainsi en conformité avec la [réglementation de la CNIL](https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience) et exemptés d’autorisation préalable.

<div class="fr-table fr-table--bordered">
<table>
  <caption>Cookies de mesure d’audience</caption>
  <thead>
  <tr>
    <th scope="col">Cookie lié au service</th>
    <th scope="col">Nom technique du cookie</th>
    <th scope="col">Finalité</th>
    <th scope="col">Durée de conservation</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>AT Internet</td><td>atuserid</td><td>Permet de stocker votre identifiant unique de visite via AT Internet</td><td>13 mois</td>
    </tr>
    <tr>
      <td>AT Internet</td><td>atauthority</td><td>Permet de garder en mémoire le mode privacy visiteur (si vous avez expressément refusé que votre navigation soit suivie)</td><td>13 mois</td>
    </tr>
  </tbody>
</table>
</div>

Toutefois, si vous le souhaitez, vous pouvez vous opposer au dépôt de cookies de mesure d’audience :

<form onsubmit="return submitOptout();">
  <div class="fr-checkbox-group">
      <input type="checkbox" id="cookie_optout" name="cookie_optout">
      <label class="fr-label" for="cookie_optout">Je m'oppose au suivi de ma navigation sur ce site web</label>
  </div>

  <button type="submit" class="fr-btn fr-btn--secondary">
    Enregistrer
  </button>
</form>

<script>
function submitOptout()
{   
    if (isOptout()) {
      tag.privacy.setVisitorOptin();
    } else {
      tag.privacy.setVisitorOptout();
    }
    
    tag.dispatch();

    location.reload();

    return false;
}

function initOptout()
{
    document.getElementById('cookie_optout').checked = isOptout()
}

window.addEventListener('load', initOptout);
</script>
