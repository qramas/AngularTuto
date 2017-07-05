import { Component, Output, EventEmitter, OnInit } from '@angular/core'; //2.1.2 import OnInit
import { Item } from 'app/models/item';
@Component({
    selector: 'itemform-component',
    templateUrl: './itemform.component.html',
    styleUrls: ['./itemform.component.css']
})
export class ItemFormComponent implements OnInit { //    2.1.1 implements OnInit

    private newItem: Item;
    constructor() {
    }
    ngOnInit(): void { //    2.1.3 implementer interface ngOnInit
        //    2.1.4 this.resetNewItem dans ngOnInit au lieu de constructor
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
