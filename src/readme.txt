Chapitre 1 : Constructor et typage.
    1.1 : app.component.ts : title -> private + typage et ajout d'une variable version private. 

Chapitre 2 : Créer des boucles sur un tableau.
    On va créer un tableau d'objet (commandes)en fix dans le ts et on l'affichera à l'aide d'une boucle dans le html.
    2.1 app.component.ts
        2.1.1 declaration collection dans la classe.
        2.1.2 init collection dans Constructor.
    2.2 app.component.html 
        2.2.1 utiliser directive *ngfor pour afficher collection dans une boucle

Chapitre 3 : Conditionner l'affichage.
    on veut afficher l'état d'une commande (à livrer, en cours de livraison, livrée)
    3.1 app.component.ts
        3.1.1 ajout propriété state aux objets de la collection.
    3.2 app.component.html
        3.2.1 Ajout Ajout directive *ngIf pour Conditionner l'affichage des états. 

Chapitre 4 : Styles de composants.
    4.1 styles.css
        4.1.1 ajout css sur les classes state-0 à 2et regarder l'inspecteur d'élément.
    4.2 app.component.css
        4.2.1 couper coller les css de styles.css vers app.component.css et observer l'inspecteur d'élément,
        angular ajout un attributt qu'il utilise pour différencierle css des composants

Chapitre 5 : Click event
    5.1 app.component.html
        5.1.1 Ajout d'une balise button avec event click qui appel unefonction getDetails.
        5.1.2 Passer $event en argument et  un deuxième argument test.
        5.1.3 AJout attribut id avec pour valeur item.reference.
    5.2 app.component.ts
        5.2.1 créer la fonction getDetails()
        5.2.2 Récupérer $event et afficher dans console
        5.2.3 pour Récupérer la valeur de l'attribut ID  et l'élement html à l'origine du click
            Variable elem pur Récupérer  l'élement à l'origine du click
        5.2.4 affichage de l'élément Récupérer (button)
        5.2.5 affichage de la valeur de l'id à partir de elem.
        5.2.6 affichage deuxieme argument. 

Chapitre 6 : Event pour la création d'un objet.
    6.1 app.component.html
        6.1.1 créer fonction createObject
        6.1.2 créer 3 input avec directive ngModel que l'on lie à newItem.
    6.2 app.component.ts
        6.2.1 déclaration de newItem
        6.2.2 initialiser newItem dans le Constructor
        6.2.3 créer fonction createObject qui fait un push dans la collection
        6.2.4 créer la fonction resetNewItem pour vider l'objet newItem après l'ajout.
        6.2.5 use resetNewItem pour init newItem dans le  Constructor et vider l'object dans createObject
    6.3 app.module.ts 
        6.3.1 Ajout des imports dans le fichier et ajout dans imports des nouveaux imports.

Chapitre 7 : Créer un modèle pour la collection
    Créer un répertoire models et un fichier item.ts
    7.1 item.ts
        7.1.1 export de la class item
        7.1.2 création 3 private
        7.1.3 création Constructor pour init item
    7.2 app.component.ts
        7.2.1 import de la class item
        7.2.2 Modification typage variable private collection et de newItem
        7.2.3 Init collection avec 3 nouvelles instances d'item.
        7.2.4 Init newItem avec une instance d'item dans resetNewItem.

Chapitre 8 : Utiliser des fonctions static en guise de constante.
    Création config.ts dans app.
    8.1 config.ts
        8.1.1  export class config avec 2 fonctions static get.
    8.2 app.component.ts
        8.2.1 import class Config
        8.2.2 use Config.APP_TITLE et APP_VERSION dans Constructor.

Chapitre 9 : Utilisation des Formulaires
    On veut ajouter un item à l'aide d'un formulaire et tester que le formulaire est valide avant d'ajouter l'item.
    9.1 app.component.html
        9.1.1 add form avec une référence #itemform="ngForm"
        9.1.2 add attribut html aux inputs (required, name et minLength)
        9.1.3 use [disabled]="!itemform.valid" sur le bouton d"envoie
        9.1.4 add référence #ref sur le première input que l'on a cablé avec ngModel
        9.1.5 ajout span avec directive [hidden]="ref.valid || ref.pristine" qui s'affiche si le champ est invalide.

Chapitre 10 : Créer un sous composant
    On veut créer un composant qui s'occupe d'afficher uniquement les items.
    On crée 3 fichiers pour le composant item (html,css,ts)
    10.1 item.component.html
        10.1.1 copier coller de app.component.html après ngFor
    10.2 item.component.ts
        10.2.1 import de component et input, puis item pour utiliser le model.
        10.2.2 déclarer le composant (@Component)avec un sélecteur, un template html et le css.
        10.2.3 Création de la classe itemComponent
        10.2.4 Dans la classe création du décorateur @Input() et on lui a donné un nom (item).
    10.3 app.component.html
        10.3.1 Couper le contenu de a boucle for
        10.3.2 Ajout de la balise item-component
        10.3.3 Utiliser @Input itel dans le selecteur <item-component> 
    10.4 app.module.ts 
        10.4.1 ajout de l'import de itemComponent et dans déclaration
    10.5 app.component.css
        10.5.1 couper coller le css vers item.component.css

Chapitre 11 : Passer un event d'un composant enfant à un composant parent.
    11.1 item.component.ts
        11.1.1 import output et EventEmitter
        11.1.2 créer decorateur Output() qui prend un new EventEmitter
        11.1.3 Créerla fonction getDetailsItem
        11.1.4 utiliser la méthode emit sur notre EventEmitter pour transmettre l'item au travers de l'EventEmitter
    11.2 app.component.ts
        11.2.1 modifier getDetails() pour Récupérer et afficher l'item dans la console
    11.3 app.component.html
        11.3.1 dans le selecteur <item-component> on utilise l'EventEmitter pour appeler la fonction getDetails() sur app.component.ts 
        et on lui passe $event

Chapitre 12 : Exercice.
    En prenant exemple sur item.component, créer un autre component pour 
    le formulaire uniquement itemform.component
    On crée un nouveau composant itemform.
    12.1 app.component.html
        12.1.1 couper coller le formulaire dans itemform.component.html
        12.1.2 ajouter après les étapes itemform la balise itemform-component défini dans itemform.component.ts
    12.2 itemform.component.html
        12.2.1 Coller le formulaire.
    12.3 itemform.component.ts
        12.3.1 Création du composant itemformComponent import de Component, Output, event
                déclaration de @Component.
        12.3.2 Création d'un variable newItem.
        12.3.3 Constructor qui initialise la variable newItem
        12.3.4 Créer un décorateur @Ouput onCreateObject qui prend un EventEmitter.
        12.3.5 créer createObjectItem qui fait un emit et un resetNewItem
        12.3.6 créer resetNewItem.
    12.4 app.component.ts
        12.4.1 supprimer la gestion du newItem, modifier createObject qui récupère le contenu de l'outputpour faire 
                un push dans la collection
    12.5 app.module.ts
        12.5.1 Ajouter la déclaration du nouveau composant.

Chapitre 13 : Exercice.
    Dans config.ts ajouter une fonction qui return la collection en prenant exemple sur APP_TITLE et APP-VERSION
    puis modifier app.component.ts pour utiliser cette foncton

    13.1 config.ts
        13.1.1 fonction APP_COLLECTION qui return la collection
        13.1.2 import de Item
    13.2 app.component.ts
        13.2.1 init de  collection dans constructor avec Config.APP_COLLECTION

Chapitre 14 : Les pipes. 
    On va créer un pipe personnalisé pour faire un moteur de recherche sur les propriétés name.
    Créer un dossier pipes et un fichier item.pipes.ts
    14.1 app.component.html

    14.2 item.pipe.ts

    14.3 app.module.ts
