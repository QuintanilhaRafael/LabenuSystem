import { Person } from "./Person"

export class Teacher extends Person {
    constructor(
        id: string,
        name: string,
        email: string,
        birthDate: Date,
        labeClass: string,
        private specialties: string[]
    ) {
        super(
            id,
            name,
            email,
            birthDate,
            labeClass
        )

        this.specialties = specialties
    }

    public getSpecialties() {
        return this.specialties
    }

    public setSpecialties(newSpecialties: string[]) {
        this.specialties = newSpecialties
    }

}