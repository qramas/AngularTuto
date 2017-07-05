import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from 'app/models/item';
@Component({
    selector: 'itemform-component',
    templateUrl: './itemform.component.html',
    styleUrls: ['./itemform.component.css']
})
export class ItemFormComponent implements OnInit {

    private newItem: Item;
    constructor() {
    }
    ngOnInit(): void {
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
