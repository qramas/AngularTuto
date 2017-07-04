import { Component, Input, state, trigger, style, transition, animate } from '@angular/core';
import { Item } from 'app/models/item';
@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    animations: [
        trigger('itemAnimateState', [
            state('inactive', style({ color: 'red' })),
            state('active', style({ color: 'blue' })),
            //        3.2.1 créer deux transitions de void vers n'importe quel état de de m'importe quel état vers void
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(1000)
            ]),
            transition('*=>void', [
                animate(1000, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class ItemComponent {
    @Input() item: Item;
    //        3.2.2 créer méthode changeState
    changeState(event: Event, state: number) {
        this.item.state = state;
    }
}
