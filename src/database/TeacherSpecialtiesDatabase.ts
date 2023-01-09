import { BaseDatabase } from "./BaseDatabase";

export class TeacherSpecialtiesDatabase extends BaseDatabase {
    TABLE_NAME = "Teacher_Specialty";

    public selectTeacherSpecialties() {
        return super.select()
    }

    public insertTeacherSpecialties(specialties: string[]) {
        return super.insert(specialties)
    }

}