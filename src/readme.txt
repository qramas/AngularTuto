Chapitre 1 : Installer bootstrap
    1.1 npm install bower -g
    1.2 bower install bootstrap
    1.3 ajouter styles bootstrap dans .angular-cli.json
    1.4 ajouter class container dans index.html
    1.5 ajouter html et class bootstrap dans item.component.html 
    1.6 ajouter html et class bootstrap dans itemform.component.html
    1.7 supprimer button getDetails() sur item.component.html
    1.8 supprimer Output, EventEmitter et getDetails sur item.component.ts
    1.9 supprimer getDetails() sur app.component.ts
    1.10 add styles sur styles.css

Chapitre 2 Définir des états sur un objet. 
    2.1 item.component.ts
        2.1.1 imports de trigger, state, style, transition,animate
        2.1.2 créer l'animation dans le composant @component
    2.2 item.component.html
        2.2.1 ajout click avec appel fonction toggleAnimateState() sur panel-default
    2.3 models.item.ts
        2.3.1 déclarer variable animateState
        2.3.2 init animateState dans constructor
        2.3.3 créer fonction toggleAnimateState pour passer de l'état active à inactive
    npm install @angular/animates@latest --save
    2.4 app.module.ts
        2.4.1 imports de BrowerAnimationsModule
        2.4.2 déclarer BrowerAnimationsModule
    2.5 item.component.html
        2.5.1 reférencer le trigger dans le div panel-default et on l'a cablé à la
        propriété animateState