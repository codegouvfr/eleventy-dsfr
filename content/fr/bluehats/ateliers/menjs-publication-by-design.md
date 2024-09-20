---
title: "La collaboration MENJS / Code Lutin"
date: 2024-10-18
description: "La collaboration MENJS / Code Lutin"
---
- Date : 18 octobre 2024
- Heure : De 11h à 12h30
- Intervenants : Erwan Garel (MENJS), Alex Morel (Code Lutin) et Jean Couteau (Code Lutin)

<br/>

Le CRPA demande aux organismes publics de publier les algorithmes mis en œuvre dans le cas de décisions administratives individuelles.

Publier l'intégralité des codes sources des logiciels réalisés par le Ministère de l'Éducation Nationale (MEN) est rédhibitoire. Notamment pour des raisons de :

* vulnérabilité : on divulge les technologies d'infrastructure
  utilisées (et les failles de sécurité liées : Struts, Spring, etc.)
* Sécurité : divulgations de secrets (mots de passe, token, etc.)
* RGPD : on expose le nom des développeurs

Les équipes du ministère, accompagnés par l'entreprise Code Lutin, ont travaillé autour de la problématique suivante :

**Comment respecter l’exigence de transparence des algortihmes tout en conservant une opacité sur les composants logiciels en exploitation dans le SI du ministère ?**

L'objet de l'atelier est de présenter un résumé et un retour
d'expériences sur nos travaux, en s'axant autour de 3 sujets :

1. Prototype d'architecture Publication By Design : 
 
   Ce prototype, basé sur les principes du Domain-Driven-Design et l'architecture hexagonale, peut servir de template lors de la création d'un nouveau projet. Il repose sur la séparation de l'application en deux modules distincts :
   * Un module métier, publiable en l'état sur Mim-Libre
   * Un module infrastructure, qui reste privé
    
2. Mise en place d'un pipeline de publication :

   Nous avons intégré à la CI du MEN un pipeline de publication : 

   * Intégré à la CI de la forge éducation nationale (GitLab, Gitea)
   * Automatisant la publication sur la forge https//gitlab.mim-[gitlab.mim-Libre.fr][]Libre.fr
   * Avec tous les gardes-fous possibles (détection de secrets, vulénrabilités, qualité de code, etc.), y compris un processus de revue manuelle.

3. Stratégies de remédiation

Grâce aux 2 premiers axe, nous avons identifié et outillé une architecture péreine pour les futurs projets. Mais reste à identifier des stratégies de remédiation pour faire évoluer les projets déjà existants. 

* Audit de 2 applications (Affelnet 6e et Affelnet Lycée)
* Implémentation de scripts d'analyse et refactoring
* Rédaction d'un guide de remédiation "dev-friendly"
