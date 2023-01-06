import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    TABLE_NAME: "Student";

    public async selectStudent(name: string) {
        const result = await BaseDatabase.connection(
            this.TABLE_NAME
        ).select()
        .where(name);

        return result;
    }

    public async insertStudent( ) {
        // return super.insert()
    }

    public async updateStudentClass( ) {
        // return super.update()
    }
}