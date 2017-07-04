/**
 *   7.1.1 export de la class item
        7.1.2 création 3 private
        7.1.3 création Constructor pour init item
 */
export class Item {
    private reference: string;
    private name: string;
    private state: number;

    constructor(data: any) {
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
    }
}