import { Component, Input } from '@angular/core';
import { Item } from 'app/models/item';
/**
 *      4.2.1 supprimer import de trigger, animate,style,transition
        4.2.2 supprimer animations de @component
 */
@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input() item: Item;
    changeState(event: Event, state: number) {
        this.item.state = state;
    }
}
