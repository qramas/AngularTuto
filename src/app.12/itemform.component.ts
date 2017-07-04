/**
 *  12.3.1 Création du composant itemformComponent import de Component, Output, event
                déclaration de @Component.
        12.3.2 Création d'un variable newItem.
        12.3.3 Constructor qui initialise la variable newItem
        12.3.4 Créer un décorateur @Ouput onCreateObject qui prend un EventEmitter.
        12.3.5 créer createObjectItem qui fait un emit et un resetNewItem
        12.3.6 créer resetNewItem.
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from 'app/models/item';
@Component({
    selector: 'itemform-component',
    templateUrl: './itemform.component.html',
    styleUrls: ['./itemform.component.css']
})
export class ItemFormComponent {
    private newItem: Item;
    constructor() {
        this.resetNewItem();
    }
    @Output() onCreateObject: EventEmitter<any> = new EventEmitter();

    createObjectItem(event) {
        this.onCreateObject.emit(this.newItem);
        this.resetNewItem();
    }

    /**
  * resetNewItem
  */
    public resetNewItem() {
        this.newItem = new Item({ reference: '', name: '', state: 0 });
    }
}
