import { Component, Input } from '@angular/core';
import { Item } from 'app/models/item';
/*
*  10.2.1 import de component et input, puis item pour utiliser le model.
*       10.2.2 déclarer le composant (@Component)avec un sélecteur, un template html et le css.
*   10.2.3 Création de la classe itemComponent
*/
@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    //        10.2.4 Dans la classe création du décorateur @Input() et on lui a donné un nom (item).
    @Input() item: Item;
}
