import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'app/models/item';
@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input() item: Item;
    /**
     * 11.1.1 import output et EventEmitter
            11.1.2 créer decorateur Output() qui prend un new EventEmitter
     */
    @Output() onGetDetails: EventEmitter<any> = new EventEmitter();
    /**
     * 
     * @param event      11.1.3 Créerla fonction getDetailsItem
                11.1.4 utiliser la méthode emit sur notre EventEmitter pour transmettre l'item au travers de l'EventEmitter
     */
    getDetailsItem(event) {
        this.onGetDetails.emit(this.item);
    }
}
