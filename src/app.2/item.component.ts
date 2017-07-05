import { Component, Input, OnInit } from '@angular/core'; //        2.2.2 import OnInit
import { Item } from 'app/models/item';

@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {//      2.2.1 implements OnInit
    constructor() { }//2.2.4 ajouter constructor
    ngOnInit(): void {//2.2.3 implementer interface ngOnInit

    }
    @Input() item: Item;
    changeState(event: Event, state: number) {
        this.item.state = state;
    }
}
