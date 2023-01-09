export class Person {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birth_date: string,
        private class_id: string
    ) {}
    
    public getId() {
        return this.id
    }
}
