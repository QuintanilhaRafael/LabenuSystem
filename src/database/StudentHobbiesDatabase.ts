import { BaseDatabase } from "./BaseDatabase";

export class StudentHobbiesDatabase extends BaseDatabase {
    TABLE_NAME = "Student_Hobby";

    public async selectStudentHobbies() {
        return super.select()
    }

    public async insertStudentHobbies(hobbies: string[]) {
        return super.insert(hobbies)
    }

}