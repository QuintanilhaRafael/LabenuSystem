import { BaseDatabase } from "./BaseDatabase";

export class TeacherDatabase extends BaseDatabase {
    TABLE_NAME: "Teacher";

    public async selectTeachers( ) {
        return super.select()
    }

    public async insertTeacher( ) {
        // return super.insert()
    }

    public async updateTeacherClass( ) {
        // return super.update()
    }
}