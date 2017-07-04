import { Component, Input } from '@angular/core';
import { Item } from 'app/models/item';
@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input() item: Item;
}