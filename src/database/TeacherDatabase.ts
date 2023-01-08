import { Teacher } from "../models/Teacher";
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDatabase extends BaseDatabase {
    TABLE_NAME = "Teacher";

    public async selectTeachers( ) {
        return super.select()
    }

    public async insertTeacher(teacher: Teacher) {
        return super.insert(teacher)
    }

    // public async updateTeacherClass(labeClass: any, id: string) {
    //     return super.update(labeClass, id)
    // }
}