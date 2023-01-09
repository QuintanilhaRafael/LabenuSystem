import { BaseDatabase } from "./BaseDatabase";

export class SpecialtyDatabase extends BaseDatabase {
    TABLE_NAME = "Specialty";

    public selectSpecialty() {
        return super.select()
    }

    public insertSpecialty(specialty: string) {
        return super.insert(specialty)
    }

}