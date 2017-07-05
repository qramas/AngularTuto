import { Component, Input, OnInit } from '@angular/core'; 
import { Item } from 'app/models/item';

@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {

    }
    @Input() item: Item;
    changeState(event: Event, state: number) {
        this.item.state = state;
    }
}
