export class Item {
    private reference: string;
    private name: string;
    public state: number;
    public animateState: string;

    constructor(data: any) {
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
        this.animateState = 'inactive';
    }
    public getName(): string {
        return this.name;
    }

    //1.13.1 supprimer methode toggleAnimateState
}