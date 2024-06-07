---
title: "node-oidc-provider remporte le deuxième BlueHats Prize"
description: "Le mainteneur de la brique logiciel libre node-oidc-provider est recompensé pour son implication de longue haleine"
date: 2024-06-10
image:
  path: ./bluehats-logo.png
  alt: "node-oicd-provider remporte le deuxième prix BlueHats"
  hide: True
tags:
  - bluehats
  - Prix
  - NLnet
---

*Lire l'annonce sur [le site de NLnet](https://nlnet.nl/news/2024/20240418-BlueHatsPrize1.html).*


Les prix BlueHats sont une initiative de la Direction interministérielle du numérique. Ils récompensent les mainteneurs de projets libres et open source critiques. En 2024, quatre prix de 10 000 € chacun seront décernés. Nous sommes heureux d'annoncer que le gagnant du deuxième prix BlueHats 2024 est *Filip Skokan*, mainteneur du projet node-oidc-provider. Node-oidc-provider fournit un serveur d'autorisation OAuth 2.0 ([RFC 6749](https://www.rfc-editor.org/rfc/rfc6749.htm)) avec prise en charge d'OpenID Connect ([OIDC](https://openid.net/connect/)) et de nombreuses autres fonctionnalités et normes.

Le jury, composé de fonctionnaires de l'ANSSI et de la DINUM, a reconnu l'importance de node-oidc-provider et son rôle dans l'authentification des utilisateurs. Les membres du Conseil Logiciels Libres souhaitent continuer à mettre en avant ce type d'initiative : des projets discrets, critiques pour les infrastructures logicielles, et maintenus par des équipes fiables au fil des années.

TODO --> citation de Filip Skokan

# A propos de node-oidc-provider

node-oidc-provider permet d'utiliser un seul identifiant sur plusieurs services web. C'est ce qu'on appelle l'authentification unique (SSO pour Single Sign-On en anglais). L'authentification unique permet de confier à d'autres organisations la responsabilité de garantir la validité et la sécurité de l'interaction d'une personne avec différentes organisations. Les gouvernements l'utilisent pour permettre aux citoyens d'accéder à l'administration locale et centrale avec un seul compte auprès d'un fournisseur d'identité de leur choix.

Filip Skokan a lancé node-oidc-provider comme son premier projet open source en 2015 pour apprendre OIDC, son lien avec OAUTH2 et comment il l'augmente ses fonctionnalités. Il voulait écrire le code source jusqu'à ce qu'il soit complètement conforme au protocole. Au cours de ce travail, il est entré en contact avec l'équipe de certification d'OpenID connect. En lisant précisément les spécifications, il a découvert de nombreux problèmes dans son propre code, mais aussi dans l'implémentation de référence et même dans la suite de tests.

Cette expérience lui a donné la confiance nécessaire pour participer aux groupes de travail de l'IETF et du W3C. La marche d'apprentissage pour lire (et écrire) ces types de documents était difficile. Filip est enthousiaste à l'idée de mettre en œuvre les spécifications le plus tôt possible au cours de l'élaboration des normes.

Après plusieurs années, le dévouement et la précision avec lesquels Filip a travaillé sur son fournisseur OIDC personnel ont attiré l'attention de 0auth, propriété d'Okta, qui l'a embauché pour travailler sur leur code OIDC. Filip continue à faire de la maintenance sur sa propre implémentation qui est maintenant un projet stable. Il l'utilise également pour valider les nouveaux ajouts aux normes d'authentification.

# Éloge de node-oidc-provider

Tout le monde peut nominer des projets libres et open source pour l'un des prix BlueHats (et les nominations sont encore ouvertes). node-oidc-provider a été nominé par Raphaël Dubigny de DINUM. Il a motivé son choix en écrivant :

> La stratégie de la suite logicielle de l'opérateur DINUM s'appuie sur AgentConnect. AgentConnect repose sur les mêmes bases technologiques que FranceConnect. FranceConnect s'appuie sur la bibliothèque node-oidc-provider pour assurer la compatibilité avec le standard OpenId Connect.

La certification de node-oidc-provider par l'OpenID Foundation est remarquable. De nombreux projets logiciels se concentrent sur la voie verte où tout se déroule de manière optimale. Filip aime s'assurer que toutes les situations problématiques sont également gérées correctement. L'existence d'une suite de tests exhaustive et d'un programme de certification peut donner aux utilisateurs l'assurance que le logiciel fait ce qu'il est censé faire, et qu'il ne leur réservera pas de mauvaises surprises.

La certification à OpenID était auparavant payante pour les projets de logiciels libres. Filip a plaidé, avec succès, en faveur d'une certification OpenID gratuite pour les logiciels libres. Néanmoins, peu de projets FOSS utilisent cette possibilité.

Sans cette certification, la France n'aurait pas choisi une solution de logiciel libre. Stéphane Herman, directeur technique de FranceConnect, déclare : « Nous avons choisi node-oidc-provider fin 2018 parce que la bibliothèque était répertoriée comme un fournisseur OpenID Connect certifié. »

# Prix BlueHats pour les mainteneurs de logiciels critiques

Le prix BlueHats vise à mettre en lumière les mainteneurs de logiciels libres critiques. Il s'agit d'un problème bien connu dans le monde des logiciels libres : Les avantages des logiciels libres sont énormes, mais l'attention et les ressources consacrées à la maintenance et aux mainteneurs sont insuffisantes. Node-oidc-provider est un exemple typique de cette situation. Node-oidc-provider est un composant utilisé dans de nombreux produits commerciaux. Certains vendeurs ont accepté de payer Filip Skokan pour l'implémentation de nouvelles fonctionnalités, mais il n'y a pas eu de financement pour la maintenance. Les prix BlueHats visent à encourager les utilisateurs de logiciels libres et open source à investir dans la maintenance.

# Les nominations sont toujours ouvertes

Deux autres prix BlueHats seront décernés dans les mois à venir. Vous pouvez encore [proposer votre projet préféré](/bluehatsprize/2024/) pour l'un des prix de 10 000 €. Les prix BlueHats sont une initiative de la Direction interministérielle du numérique. La [mission logiciel libre](https://code.gouv.fr/) s'est associée à [NLnet](https://nlnet.nl) pour mettre en lumière quatre projets remarquables et leur décerner les prix BlueHats 2024.