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

Les prix BlueHats sont une initiative de la Direction interministérielle du numérique. Ils récompensent les mainteneurs de projets libres et open source critiques. En 2024, quatre prix de 10 000 € chacun seront décernés. Nous sommes heureux d'annoncer que le gagnant du deuxième prix BlueHats 2024 est Filip Skokan, mainteneur du projet node-oidc-provider. node-oidc-provider fournit un serveur d'autorisation OAuth 2.0 ([RFC 6749](https://www.rfc-editor.org/rfc/rfc6749.htm)) avec le support d'OpenID Connect ([OIDC](https://openid.net/connect/)) et de nombreux autres standards additionnels pour l'environnement d'exécution JavaScript open-source et multiplateforme Node.js.

Le jury, composé d'agents publics de l'ANSSI et de la DINUM, a reconnu l'importance de node-oidc-provider et son rôle dans la fédération d'identité. Les membres du Conseil du logiciel libre souhaitent continuer à mettre en avant ce type d'initiative : des projets discrets, critiques pour les infrastructures logicielles, et maintenus par des équipes fiables au fil des années. 

En apprenant qu'il avait gagné, Filip Skokan a déclaré :

> Je suis incroyablement honoré et touché de recevoir le prix BlueHats. Cette reconnaissance signifie beaucoup pour moi personnellement, car elle valide les années de dur labeur et de dévouement que j'ai consacrées au projet node-oidc-provider. Lorsque j'ai commencé ce projet, mon objectif était simplement d'apprendre. Voir que node-oidc-provider a été adopté par des initiatives comme FranceConnect est vraiment gratifiant et ce sont des adoptions comme celles-ci qui renforcent mon engagement à continuer de m’impliquer dans l'open source ainsi que dans les organisations de développement de standards. 

# A propos de node-oidc-provider

Grâce aux protocoles qu'il met en œuvre, node-oidc-provider permet l'authentification unique (SSO), ce qui permet aux utilisateurs d'accéder à plusieurs sites web à l'aide d'une seule connexion. Le SSO délègue la responsabilité de la vérification et de la sécurisation des interactions des utilisateurs à des fournisseurs d'identité de confiance. Cette approche est souvent utilisée pour fournir aux utilisateurs un accès transparent à divers services en utilisant un seul compte d'un fournisseur d'identité choisi. Cela simplifie l'expérience de l'utilisateur tout en maintenant des normes de sécurité solides.

Filip a commencé node-oidc-provider comme son premier projet open source en 2015 pour apprendre OIDC et OAuth 2.0. Il voulait construire le code jusqu'à ce qu'il soit conforme au protocole. Au cours de ce travail, il est entré en contact avec le programme de certification OpenID. Grâce aux échanges avec le programme et au processus de certification lui-même, il a identifié des problèmes dans son propre code, mais aussi dans l'implémentation de référence de la suite de tests. Cela a permis au programme OpenID Certification de remporter l'[Identity Innovation Award](https://openid.net/openid-certification-program-wins-2018-identity-innovation-award/) et l'[European Identity and Cloud Award](https://openid.net/openid-certification-program-wins-2018-european-identity-and-cloud-award/) en 2018. Filip a aussi gagné la confiance nécessaire pour prendre part aux processus de normalisation réalisés par les groupes de travail de l'OIDF et de l'IETF. La courbe d'apprentissage pour lire (et plus tard aussi écrire) ces types de documents a été raide. Filip est enthousiaste à l'idée de mettre en œuvre les spécifications le plus tôt possible au cours du processus de normalisation afin d'être en mesure de fournir aux groupes de travail un retour d'information précieux sur la mise en œuvre.
 
Après plusieurs années, le dévouement et la précision avec lesquels Filip a travaillé sur son projet ont attiré l'attention d'[Auth0](https://auth0.com/) (aujourd'hui racheté par Okta), qui l'a engagé pour travailler sur ses solutions. Filip continue de maintenir sa propre implémentation, qui est maintenant un projet stable. Il l'utilise également comme terrain de jeu pour valider les nouvelles extensions développées pour l’infrastructure logicielle OAuth 2.0. 

# Éloge de node-oidc-provider

Tout le monde peut nominer des projets libres et open source pour l'un des prix BlueHats (et les [nominations](https://nlnet.nl/bluehatsprize/2024/) sont encore ouvertes). node-oidc-provider a été nominé par Raphaël Dubigny de DINUM. Il a motivé son choix en écrivant :

> La stratégie de la suite logicielle de l'opérateur DINUM s'appuie sur AgentConnect. AgentConnect repose sur les mêmes bases technologiques que FranceConnect. FranceConnect s'appuie sur la bibliothèque node-oidc-provider pour assurer la compatibilité avec le standard OpenId Connect.

Le fait que node-oidc-provider soit [OpenID Certified&trade;](https://openid.net/certification/) est remarquable. De nombreux projets logiciels ont une trajectoire où tout se passe de manière optimale. Filip aime s'assurer que tous les cas de test négatifs sont également traités correctement, et la suite de tests du programme de certification OpenID y contribue. L'existence d'une suite de tests exhaustive et d'un programme de certification peut donner aux utilisateurs l'assurance que leur logiciel fonctionne comme prévu, et qu'il ne présentera pas de défaillances majeures.

Sans cette certification, la France n'aurait pas choisi une solution de logiciel libre. Stéphane Herman, directeur technique de FranceConnect, déclare : « Nous avons choisi node-oidc-provider fin 2018 parce que la bibliothèque était répertoriée comme un fournisseur OpenID Connect certifié. »

Note de Filip :

> Par le passé, j'ai [écrit](https://x.com/_panva/status/1390957409695371264) que « la conformité d'un logiciel aux normes et sa certification n'est pas le pinacle à viser. C'est la barre la plus basse. » La certification n'est généralement pas un processus gratuit ; c'est, à tout le moins, un processus qui prend du temps. Je suis heureux de dire qu'aujourd'hui, après avoir fait pression sur les dirigeants de la Fondation OpenID, la certification OpenID est [gratuite](https://www.openid.net/certification/open-source-project-certification-policy/) pour les projets open source qui remplissent les conditions requises. Si vous maintenez un projet open source OpenID Connect, qu'il soit client ou fournisseur, faites-le certifier. 

# Prix BlueHats pour les mainteneurs de logiciels critiques

Le prix BlueHats vise à mettre en lumière les mainteneurs de logiciels libres critiques. Il s'agit d'un problème bien connu dans le monde des logiciels libres : L'avantage d'avoir des logiciels libres est énorme, mais il n'y a pas assez d'attention portée sur et de ressources allouer à ces projets pour la maintenance et les mainteneurs.

node-oidc-provider est un exemple typique de cette situation. Bien qu'il affecte d'innombrables utilisateurs finaux par son utilisation dans des fournisseurs d'identité tels que FranceConnect, il n'est pas à l'abri de ce problème. Les prix BlueHats visent à encourager les utilisateurs de logiciels libres et open source à investir dans la maintenance, en s'attaquant au problème du sous-financement de cette phase indispensable du cycle de vie d'un logiciel.

# Les nominations sont toujours ouvertes

Deux autres prix BlueHats seront décernés dans les mois à venir. Vous pouvez encore [proposer votre projet préféré](https://nlnet.nl/bluehatsprize/2024/) pour l'un des prix de 10 000 €. Les prix BlueHats sont une initiative de la Direction interministérielle du numérique. La [mission logiciel libre](https://code.gouv.fr/) s'est associée à [NLnet](https://nlnet.nl) pour mettre en lumière quatre projets remarquables et leur décerner les prix BlueHats 2024.