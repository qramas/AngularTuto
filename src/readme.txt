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
    