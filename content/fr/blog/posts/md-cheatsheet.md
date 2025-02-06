---
title: Syntaxe Markdown
description: Rappel des éléments de syntaxe Markdown principaux et nouveaux éléments.
date: git Last Modified
tags:
  - contenu
  - Markdown
---
La syntaxe utilisée dans les fichiers Markdown `.md` du site suit la spécification [CommonMark](https://commonmark.org/).

[Voir un rappel des principaux éléments](https://commonmark.org/help/){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

**De nouveaux éléments** ont été ajoutés à cette syntaxe et sont disponibles dans eleventy-dsfr.

## L'accordéon

```md
????accordionsgroup

??? Intitulé accordéon

Contenu **markdown** _riche_

???

????
```
[Voir aussi](/fr/blog/accordeon/#exemple-d-utilisation-dans-un-fichier-markdown-md){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## L'alerte

```md
:::info Test d'alerte
Contenu **Markdown**
:::
```

[Voir aussi](/fr/blog/alerte/#exemple-d-utilisation-dans-un-fichier-markdown-md){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## La citation

```md
:::quote
« Lorem [...] elit ut. »
:::
```

[Voir aussi](/fr/blog/citation/#exemple-d-utilisation-dans-un-fichier-markdown-md){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## La mise en avant

```md
:::callout Titre mise en avant
Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent <strong>automatiquement</strong> l’ARS aux familles déjà allocataires qui remplissent les conditions.
:::
```

[Voir aussi](/fr/blog/mise-en-avant/#exemple-d-utilisation-dans-un-fichier-markdown-md){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

## La mise en exergue

```md
:::highlight
Les parents d’enfants de 11 à 14 ans n’ont aucune démarche à accomplir : les CAF versent <strong>automatiquement</strong> l’ARS aux familles déjà allocataires qui remplissent les conditions.
:::
```

[Voir aussi](/fr/blog/mise-en-exergue/#exemple-d-utilisation-dans-un-fichier-markdown-md){.fr-link .fr-fi-arrow-right-line .fr-link--icon-right}

<br>

La syntaxe utilisée pour le [cartouche](https://www.11ty.dev/docs/data-frontmatter/) en début de fichier est communément le [YAML](https://learnxinyminutes.com/docs/yaml/).
Il peut contenir des données pré-définies par Eleventy ou personnalisées pour la page en cours.