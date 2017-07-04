import { Pipe, PipeTransform } from '@angular/core';
import { Item } from "app/models/item";

@Pipe({
    name: 'itemPipe', //Nom = nom dans html
    pure: false
})

export class ItemPipe implements PipeTransform {
    transform(value: Item[], ...args: any[]): Item[] {
        //console.log(value);
        let filtre = args[0].toLowerCase();
        return filtre ? value.filter(item => item.getName().toLowerCase().indexOf(filtre) != -1) : value
    }
}