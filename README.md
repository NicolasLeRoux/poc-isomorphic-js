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


## Server side rendering

__Question:__ La balise ``head`` doit-elle est aussi générée côté front. Et si les
scripts changent ???


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


## TODO

1. ...


## Liens

- [Isomorphic javascript](http://isomorphic.net/javascript)
- [Github mithril-node-render](https://github.com/MithrilJS/mithril-node-render)
- [Github mithril sample](https://github.com/StephanHoyer/mithril-isomorphic-example)
