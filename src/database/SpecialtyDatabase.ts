import { BaseDatabase } from "./BaseDatabase";

export class SpecialtyDatabase extends BaseDatabase {
    TABLE_NAME = "Specialty";

    public async selectSpecialty() {
        return super.select()
    }

    public async insertSpecialty(specialty: string) {
        return super.insert(specialty)
    }

}