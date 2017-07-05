import { Item } from "./models/item";

export class Config {
    APP_TITLE = "Application Livreur";
    // public static get APP_TITLE(): string { return "Application livreur" };
    // public static get APP_VERSION(): string { return "1.0" };
    public static get APP_COLLECTION(): Item[] { return [new Item({ reference: '1234', name: 'quentin', state: 0 })] };
}