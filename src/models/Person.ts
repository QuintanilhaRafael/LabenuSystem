export abstract class Person {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthDate: Date,
        private labeClass: string
    ) {
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getBirthDate() {
        return this.birthDate
    }

    public getLabeClass() {
        return this.labeClass
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setLabeClass(newLabeClass: string) {
        this.labeClass = newLabeClass
    }

    public setBirthDate(newBirthDate: Date) {
        this.birthDate = newBirthDate
    }
}
