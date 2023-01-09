import { BaseDatabase } from "./BaseDatabase";
import { Person } from './../models/Person';

export class TeacherDatabase extends BaseDatabase {
    TABLE_NAME = "Teacher";

    public selectTeachers( ) {
        return super.select()
    }

    public insertTeacher(teacher: Person) {
        return super.insert(teacher)
    }

    public updateTeacherClass(teacher_id: string, class_id: string, updateItem: string) {
        return super.update(teacher_id, class_id, updateItem)
    }
}