import { Person } from "./Person"

export class Student extends Person {
    constructor(
        id: string,
        name: string,
        email: string,
        birthDate: Date,
        labeClass: string,
        private hobbies: string[]
    ) {
        super(
            id,
            name,
            email,
            birthDate,
            labeClass
        )

        this.hobbies = hobbies
    }

    public getHobbies() {
        return this.hobbies
    }

    public setHobbies(newHobbies: string[]) {
        this.hobbies = newHobbies
    }

}
