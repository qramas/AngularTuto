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

Chapitre 3 : animations en entrée et en sortie avec * et void
    On veut faire une animation quand un item est ajouté puis le faire disparaitre avec une animation
    après un délai de quelques secondes
    
    3.1 app.component.ts
        3.1.1 ajouter un setTimeOut dans createObject qui passe à l'état removed après 2s
        3.1.2 remplacer push par unshift
    3.2 item.component.ts
        3.2.1 créer deux transitions de void vers n'importe quel état de de m'importe quel état vers void
        3.2.2 créer méthode changeState
    3.3 item.component.html
        3.3.1 ajout ngIF pour masque le div panel si l'état est à removed
        3.3.2 ajout div avec 2 buttons pour passer un état à l'autre gra^ce à la méthode changeState
    3.4 item.ts
        3.4.1 state en public ou setter

Chapitre 4 : Utiliser la librairie animate.CSS
    Installer animate.css via bower
    bower install animate.css --save
    4.1 .angular-cli.json
        4.1.1 ajouter lien vers styles animate.css
    4.2 item.component.ts
        4.2.1 supprimer import de trigger, animate,style,transition
        4.2.2 supprimer animations de @component
    4.3 item.component.html
        4.3.1 supprimer ref au trigger dans div panel
        4.3.2 ajouter la classe animated au div class panel
        4.3.3 Modif du *ngIF avec nouvel état pour la suppression du dom
        4.3.4 Ajout directive ngClass pour allouer la classe rubberBand ou fadeOut en fonction de l'état.
    4.4 app.component.ts
        4.4.1 Ajout d'un setTimeOut pour passer l'état à removedFromDom après 3s

    