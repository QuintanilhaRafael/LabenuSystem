import { Student } from "../models/Student";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    TABLE_NAME = "Student";

    public async selectStudent(name: string) {
        const result = await BaseDatabase.connection(
            this.TABLE_NAME
        ).select()
        .where(name);

        return result;
    }

    public async insertStudent(student: Student) {
        return super.insert(student)
    }

    public async updateStudentClass(labeClass: any, id: string) {
        return super.update(labeClass, id)
    }
}