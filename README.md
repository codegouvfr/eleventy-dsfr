[![Software License](https://img.shields.io/badge/Licence-MIT%2C%20Licence%20Ouverte-orange.svg?style=flat-square)](https://git.sr.ht/~codegouvfr/codegouvfr-public/tree/main/item/LICENSES)

![build-preprod](https://img.shields.io/github/actions/workflow/status/codegouvfr/codegouvfr-website/preproduction.yml?label=Deploiement%20en%20préprod)
![build-prod](https://img.shields.io/github/actions/workflow/status/codegouvfr/codegouvfr-website/production.yml?label=Deploiement%20en%20prod)

# Site code.gouv.fr

Ce dépôt contient les éléments nécessaires à la publication du site [code.gouv.fr](https://code.gouv.fr/).

Il a été construit à partir de [ce site modèle](https://github.com/codegouvfr/eleventy-dsfr/).

## Installation et lancement

- Installer les dépendances : `npm install`
- Publier le site : `npm run build`
- Publier et rendre le site disponible localement : `npm start`

## Déploiement

Le site est déployé automatiquement en préproduction sur [preprod.codegouv.studio](http://preprod.codegouv.studio/fr/) depuis la branche `main` et en production sur [code.gouv.fr](https://code.gouv.fr/) depauis la branche `production`.

# Contributions

Pour discuter d'évolutions éditoriales ou pour des retours devant rester confidentiels, écrivez à [contact@code.gouv.fr](mailto:contact@code.gouv.fr).

## Licences

Le contenu rédactionnel du site est une publication DINUM, 20 avenue de Ségur, 75019, publié sous [licence Ouverte 2.0](LICENSES/LICENSE.Etalab-2.0.md).

Les codes sources de ce dépôt sont publiés sous [licence
MIT](LICENSES/LICENSE.MIT.md).
