export class Item {
    private reference: string;
    private name: string;
    public state: number;
    public animateState: string; //        2.3.1 déclarer variable animateState

    constructor(data: any) {
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
        this.animateState = 'inactive';//        2.3.2 init animateState dans constructor
    }
    public getName(): string {
        return this.name;
    }

    /**
     * toggleAnimteState
     */
    public toggleAnimateState() {// 2.3.3 créer fonction toggleAnimateState pour passer de l'état active à inactive
        this.animateState = this.animateState === 'inactive' ? 'active' : 'inactive';
        console.log(this.animateState);
    }
}