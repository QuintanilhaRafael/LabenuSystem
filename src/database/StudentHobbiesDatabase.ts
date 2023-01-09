import { BaseDatabase } from "./BaseDatabase";

export class StudentHobbiesDatabase extends BaseDatabase {
    TABLE_NAME = "Student_Hobby";

    public selectStudentHobbies() {
        return super.select()
    }

    public insertStudentHobbies(hobbies: string[]) {
        return super.insert(hobbies)
    }

}