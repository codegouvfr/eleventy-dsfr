[![img](https://img.shields.io/badge/code.gouv.fr-contributif-blue.svg)](https://code.gouv.fr/documentation/#/publier.md)
[![Software License](https://img.shields.io/badge/Licence-MIT%2C%20Licence%20Ouverte-orange.svg)](https://git.sr.ht/~codegouvfr/codegouvfr-public/tree/main/item/LICENSES)

![build-preprod](https://img.shields.io/github/actions/workflow/status/codegouvfr/codegouvfr-website/preproduction.yml?label=Deploiement%20en%20préprod)
![build-prod](https://img.shields.io/github/actions/workflow/status/codegouvfr/codegouvfr-website/production.yml?label=Deploiement%20en%20prod)

# Site code.gouv.fr

Ce dépôt contient les éléments nécessaires à la publication du site [code.gouv.fr](https://code.gouv.fr).

Il a été construit à partir de [ce site modèle](https://github.com/codegouvfr/eleventy-dsfr/).

## Installation et lancement

Vous devrez utiliser `nodejs` >= 20.

- Installer les dépendances : `npm install`
- Publier le site : `npm run build`
- Publier et rendre le site disponible localement : `npm start`

## Déploiement

Le site est déployé automatiquement en préproduction sur [preprod.codegouv.fr](http://preprod.codegouv.fr/fr/) depuis la branche `main` et en production sur [code.gouv.fr](https://code.gouv.fr/) depauis la branche `production`.

# Contributions

Pour discuter d'évolutions éditoriales ou pour des retours devant rester confidentiels, écrivez à [contact@code.gouv.fr](mailto:contact@code.gouv.fr).

Pour la rédaction des messages de commit :

- utiliser l'anglais systématiquement ;
- dans la 1ère ligne, indiquer le fichier ou répertoire modifié suivi d'un double-point et d'une indication sur la modification. Majuscule pour l'indication, pas de point à la fin.  Par exemple :

  `gestion-et-visualisation-de-donnees-2024.md: Update`
- Si besoin, le reste du message peut apporter d'autres précisions, après une ligne vierge.

# Licences

Ce dépôt est publié par la [DINUM](https://www.numerique.gouv.fr/) depuis 2023.

Les codes sources du dépôt sont publiés sous [licence MIT](LICENSES/LICENSE.MIT.md).

Le contenu rédactionnel du site est publié sous [licence Ouverte 2.0](LICENSES/LICENSE.Etalab-2.0.md).

## Crédits images

- [Programmer.png](public/illustrations/Programmer.png) par `ven` sur [IllustrationKit](https://illustrationkit.com/illustrations/ven)
- [Blank_man_placeholder.svg](https://fr.wikipedia.org/wiki/Fichier:Blank_man_placeholder.svg) par [AntoFran](https://commons.wikimedia.org/wiki/User:AntoFran) sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0>).
