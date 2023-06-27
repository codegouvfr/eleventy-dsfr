---
title: Mise en page d'un article
description: Caractéristiques de la mise en page d'un article de blog.
date: git Last Modified
tags:
  - layout
  - contenu
---
La mise en page [`post.njk`](_includes/layouts/post.njk) utilisée pour les articles de blog, permet l'ajout d'une bannière en haut, via la variable `image` du cartouche :

```markdown
---
image:
  src: ./possum.png
  alt: A possum
---
```

**Note :** La variable `src` correspond au chemin relatif du fichier depuis l'emplacement de la page dans le dépôt.

Le fil d'Ariane peut être affiché automatiquement si la variable `showBreadcrumb` du cartouche est positionnée :

```markdown
---
showBreadcrumb: true
---
```