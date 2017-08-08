# poc-isomorphic-js


## Introduction

Construire une application utilisant les web components avec un framework ultra
light pour la structure (Ici mithriljs).

Faire du rendu server side des web components qui seront uniquement interprété par
le client (Progressive enhancement). Le framework structurant doit proposer du
code isomorphic afin d'être exécuter côté server (SEO, Search Engine Optimization)...


## Cas pratique

Utiliser ``https://randomuser.me`` qui propose une API de génération d'utilisateur
à la _Lorem ipsum_. Note: L'utilisation d'une seed permet même d'avoir de la
répétabilité sur le jeux de données.

L'application doit se composer de 2 vues:
- Une liste avec des utilisateurs,
- Une page de détail de l'utilisateur selectionné.

L'utilisation d'un _query param_ doit permettre de générer du rendu côté serveur.
Exemple: ``user?id={{seed}}``

Problème: La ``seed`` renseignée ici permet de rejouer la requête mais pas d'avoir
les informations sur une personne unique...


## Server side rendering

__Question:__ La balise ``head`` doit-elle aussi être générée côté front. Et si les
scripts changent ??? Problème, les balises scripts sont chargées a chaque redraw.


## mithril-isomorphic-example

Une ``baseView`` est utilisée pour construire le squelette de la page HTML. Les
différentes pages de l'app sont constuites en étant wrapper dans cette base.

Ma question: Est-il judicieux de manipuler le document directement avec le
framework ???

Oui ! Lors des changements de page, les éléments présent dans la balise ``head``
peuvent être anemés à changer. Un titre qui est modifié en fonction de la page
utilisée.

Par contre, l'utilisation d'un squelette wrappant la page ne permet pas de facilement
manipuler les éléments présent dans le ``head``. Il est préférable d'écrire le
``head`` en utilisant des vue pour les factorisations...


## Les web components

L'ordre de l'import des _web components_ semble avoir de l'importance... Si le
component est chargé avant le redraw, le ``document.currentScript`` est null lors
du redraw. Et même avec le switch sur ``document``, le ``querySelector`` est null.

Question: Comment corriger ce bug !?


## TODO

1. Permettre l'édition de l'entête du site ``head``.

2. Utiliser des web components pour faire du ``Progressive enhancement``.

3. Utiliser redux pour manager les states de l'application.

4. Comprendre la raison/nécessité du premier render. A priori, le DOM ne change
pas après le premier render client...


## Liens

- [Isomorphic javascript](http://isomorphic.net/javascript)
- [Github mithril-node-render](https://github.com/MithrilJS/mithril-node-render)
- [Github mithril sample](https://github.com/StephanHoyer/mithril-isomorphic-example)
