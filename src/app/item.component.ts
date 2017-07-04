import { Component, Input, state, trigger, style, transition, animate } from '@angular/core';
//2.1.1 imports de trigger, state, style, transition,animate
import { Item } from 'app/models/item';
@Component({
    selector: 'item-component',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    animations: [ //2.1.2 créer l'animation dans le composant @component

        trigger('itemAnimateState', [
            state('inactive', style({ color: 'red' })),
            state('active', style({ color: 'blue' })),
            transition('inactive <=> active', animate('1000ms'))
        ])
    ]
})
export class ItemComponent {
    @Input() item: Item;
}
