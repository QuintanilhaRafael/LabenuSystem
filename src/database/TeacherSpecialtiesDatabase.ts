import { BaseDatabase } from "./BaseDatabase";

export class TeacherSpecialtiesDatabase extends BaseDatabase {
    TABLE_NAME = "Teacher_Specialty";

    public async selectTeacherSpecialties() {
        return super.select()
    }

    public async insertTeacherSpecialties(specialties: string[]) {
        return super.insert(specialties)
    }

}