export class Hobby {
    constructor(
       private id: string,
       private name: string
    ) {}

    public getId() {
        return this.id
    }
}