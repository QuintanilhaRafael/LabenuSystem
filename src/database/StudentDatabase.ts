import { Person } from "../models/Person";
import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    TABLE_NAME = "Student";

    public selectStudents() {
        return super.select()
    }

    public insertStudent(student: Person) {
        return super.insert(student)
    }

    public updateStudentClass(student_id: string, class_id: string, updateItem: string) {
        return super.update(student_id, class_id, updateItem)
    }
}