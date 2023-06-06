---
layout: layouts/page.njk
slugOverride: mission
eleventyNavigation:
  key: À propos
  order: 4
---
{% set callout = {
title: "Vous souhaitez suivre tous les sujets liés au logiciel libre dans l'administration ?",
description: 'Voici des informations pour <a href="https://man.sr.ht/~codegouvfr/logiciels-libres/veille.md" target="_blank" title="Organiser votre veille sur le logiciel libre dans l\'administration - Lien externe">organiser votre veille</a>.'
} %}
{% include "components/callout.njk" %}


# À propos

Ce site présente les ressources publiées et mises en oeuvre dans le cadre du [plan d'action logiciels libres et communs numériques](/fr/plan-action-logiciels-libres-et-communs-numeriques/).

Son code source est disponible [sur ce dépôt](https://github.com/codegouvfr/codegouv-website).

## Equipe

Le plan d'action est piloté par la [mission logiciels libres](https://speakerdeck.com/bluehats/dinum) et les actions sont conjointement portées avec les missions [LABEL](https://catalogue.numerique.gouv.fr) et TALENTS de la [direction interministérielle du numérique (DINUM)](https://www.numerique.gouv.fr/).

{% set callout = {
title: "Besoin d'un accompagnement ?",
description: 'Pour toute demande d\'accompagnement, n\'hésitez pas à consulter <a href="https://man.sr.ht/~codegouvfr/logiciels-libres/offre-de-services.md" target="_blank" title="Offre de services du pôle logiciels libres - Lien externe">notre offre de services</a> et à <a href="/fr/contact/">nous contacter</a>.'
} %}
{% include "components/callout.njk" %}


## Code public ([/public](https://code.gouv.fr/public))

Tout code source obtenu ou développé par un organisme remplissant une mission de service public est considéré comme un document administratif, relevant des obligations de publication en open data.

De nombreux organismes publient déjà des codes sources : nous les présentons sur ce site de façon à faciliter leur découverte et à encourager les administrations à les réutiliser ou à y contribuer.

### Qu'est-ce qu'un « dépôt de code source » ?

Le *code source* est la version lisible par un humain d'un programme informatique. Un *dépôt de code source* est l'ensemble des fichiers d'un programme.  Tous les dépôts référencés sur ce site utilisent le logiciel de gestion de versions Git.

Ce site ne référence que les dépôts publiés via un *compte d'organisation* GitHub ou un groupe public sur gitlab.com ou une instance GitLab : les dépôts publiés via des comptes personnels ne sont pas pris en compte.

Pour d'autres précisions sur les termes techniques de ce site, [consultez ce glossaire](https://man.sr.ht/~codegouvfr/logiciels-libres/glossary.fr.md).

#### Bibliothèques et dépendances

Les bibliothèques référencées sur ce site sont des bibliothèques logicielles distribuées via des plateformes dédiées (npmjs.com, pypi.org, etc.) et développées à partir des dépôts référencés.

Les dépendances sont les bibliothèques, venant du secteur public ou non, requises par les dépôts référencés.  Nous ne listons que les dépendances de premier niveau, pas les dépendances de dépendances.

### Logiciels libres du SILL et services en ligne

Le socle interministériel de logiciels libres est la liste des logiciels libres recommandés pour toutes les administrations.  Chaque logiciel de cette liste est aujourd'hui en usage dans au moins une administration, et dispose d'un « référent SILL » prêt à aider les autres administrations dans son utilisation.

Si vous souhaitez référencer de nouveaux logiciels libres utilisés dans vos administrations, rendez-vous sur [le site de gestion du SILL](https://sill.code.gouv.fr).

Les services en ligne référencés sur le site sont tous des instances de logiciels libres mises à la disposition des agents publics.

### Où télécharger les données ?

Ces données sont publiées sous [licence Ouverte 2.0](https://spdx.org/licenses/etalab-2.0.html) :

* La liste des organisations en [csv](https://code.gouv.fr/data/organizations/csv/all.csv) et [json](https://code.gouv.fr/data/organizations/json/all.json).
* La liste des dépôts en [csv](https://code.gouv.fr/data/repositories/csv/all.csv) et [json](https://code.gouv.fr/data/repositories/json/all.json).
* Les données du socle interministériel de logiciels libres  et du catalogue de services : [sill.json](https://sill.code.gouv.fr/api/sill.json), [sill.tsv](https://code.gouv.fr/data/sill.tsv), [sill.pdf](https://code.gouv.fr/data/sill.pdf), [sill.md](https://code.gouv.fr/data/sill.md) et [sill.org](https://code.gouv.fr/data/sill.org).

Ces données, collectées depuis [libraries.io](https://libraries.io/terms), sont publiées sous licence [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) :

* La liste des bibliothèques en [csv](https://code.gouv.fr/data/libraries/csv/all.csv) et [json](https://code.gouv.fr/data/libraries/json/all.json).

### Comment suivre les mises à jour ?

Voir notre [page avec tous les flux RSS](https://code.gouv.fr/public/#/feeds).

### Comment ces données sont-elles construites ?

1. [codegouvfr-sources](https://git.sr.ht/~codegouvfr/codegouvfr-sources) référence les comptes d'organisation ouverts par des organismes publics sur sr.ht (SourceHut), github.com, gitlab.com ou des forges GitLab locales.
2. [codegouvfr-fetch-data](https://git.sr.ht/~codegouvfr/codegouvfr-fetch-data) récupère les données des organisations et des dépôts à partir de cette liste.
3. [codegouvfr-consolidate-data](https://git.sr.ht/~codegouvfr/codegouvfr-consolidate-data) consolide les données en y ajoutant des informations.
4. [code.gouv.fr](https://git.sr.ht/~codegouvfr/code.gouv.fr) expose les données.

Nous ne référençons pour l'instant que les comptes de sr.ht (SourceHut), github.com, gitlab.com et des instances GitLab locales : si vous pouvez aider à référencer des comptes qui publient sur d'autres forges ([SourceHut](https://sourcehut.org/), [BitBucket](https://bitbucket.org), instances [Gogs](https://gogs.io) ou [Gitea](https://gitea.io), etc.), n'hésitez pas à [contribuer](https://git.sr.ht/~codegouvfr/codegouvfr-fetch-data).
