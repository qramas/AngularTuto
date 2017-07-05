Chapitre 1 : Création de module avec un component
    On va créer un module avec un unique component pour  le titre de l'appli.
    1.1 On va générer un module avec ng generate module title (dans Console)
        génère un dosser title dans src/app et un fichier title.module.ts
    1.2 ng generate component title
        ajoute automatiquement dans le dossier title,
        title.component.ts la classe TitleComponent est créée automatiquement et implémente OnInit
        TitleComponent est importé automatiquement et déclaré automatiquement dans title.module
    1.3 title.module.ts
        1.3.1 ajouter export pour TitleComponent
    1.4 app.module.ts
        1.4.1 declaration de TitleModule
        1.4.2 importé TitleModule
    1.5 title.component.html
        1.5.1 Couper coller le title (h1) du app.component.html
    1.6 app.component.html
        1.6.1 AJouter le selecteur <app-title> pour afficher le contenu template de title.component
        1.6.2 supprimer la version
    1.7 title.component.ts
        1.7.1 injecter Config dans le constructor
        1.7.2 import de Config
        1.7.3 private title dans la classe
        1.7.4 init title dans ngOnInit
    1.8 config.ts
        1.8.1 simplifier avec variables à la place des fonctions statiques supprimer la version
    1.9 app.component.ts
        1.9.1 implémente OnInit
        1.9.2 import de OnInit
        1.9.3 implémentation interface ngOnInit
        1.9.4 init variable dans ngOnInit
    1.10 app.module.ts
        1.10.1 import de Config
        1.10.2 ajout de Config dans providers.
    1.11 item.component.html
        1.11.1 supprimer ngIF sur panel
        1.11.2 supprimer deuxième class fadeOut dans [ngClass]
        1.11.3 supprimer click toggleAnimateState dans div class panel
    1.12 app.component.ts
        1.12.1 supprimer les setTimeOut dans createObject
    1.13 item.ts
        1.13.1 supprimer methode toggleAnimateState

Chapitre 2 : implémentation de ngOnInit pour les composants
    2.1 itemform.component.ts 
        2.1.1 implements OnInit
        2.1.2 import OnInit
        2.1.3 implementer interface ngOnInit
        2.1.4 this.resetNewItem dans ngOnInit au lieu de constructor
    2.2 item.component.ts
        2.2.1 implements OnInit
        2.2.2 import OnInit
        2.2.3 implementer interface ngOnInit
        2.2.4 ajouter constructor

Chapitre 3 : Directives
    les Directives permettent de donner des ordres, le plus souvent des  ordres structurés
    (*ngIFn, *ngFor...) mais on trouve aussi des Directives d'attributs et d'affichage 
    ([ngClass], [hidden], ...)
    création d'un dossier directives.
    ng g directive directives/highlight
    3.1 app.module.ts
        3.1.1 check si la génération a fait les  imports correctement.
    3.2 highlight.directive.ts
        3.2.1 injection ElementRef et Renderer2 dans le constructor
    3.3 item.composant.html
        3.3.1 utilisation directive appHighlight sur un span

Chapitre 4 : Créer un service pour la collection
    on veut créer un service qui gère la collection et que l'on va pouvoir utiliser
    dans tous nos componsants par injection de dépendance. Avantage, tous aux mêmes endroits et modifs
    à un seul endroits.
    ng generate service services/item
    4.1 item.service.ts
        4.1.1 impot de item
        4.1.2 declaration variable newItem
        4.1.3 constructor avec appel de resetNewItem
        4.1.4 declaration collection en public
        4.1.5 fonction add
        4.1.6 fonction resetNewItem
    4.2 app.module.ts
        4.2.1 declaration ItemService dans les providers.
        4.2.2 import de ItemService
    4.3 app.component.ts
        4.3.1 import de ItemService
        4.3.2 injection ItemService dans constructor
        4.3.3 dans ngOnInit on initialise collection depuis ItemService
        4.3.4 dans create object on utilise add de ItemService

Chapitre 5 : Routing