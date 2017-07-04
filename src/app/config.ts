import { Item } from "./models/item";//        13.1.2 import de Item

export class Config {
    public static get APP_TITLE(): string { return "Application livreur" };
    public static get APP_VERSION(): string { return "1.0" };
    //13.1.1 fonction APP_COLLECTION qui return la collection
    public static get APP_COLLECTION(): Item[] { return [new Item({ reference: '1234', name: 'quentin', state: 0 })] };
}