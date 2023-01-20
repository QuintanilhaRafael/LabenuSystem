import { BaseDatabase } from "./BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    TABLE_NAME = "Student";

    public async selectStudents(name: string) {
        const result = await BaseDatabase.connection(
            this.TABLE_NAME
        ).select()
        .where('name', 'LIKE', `%${name}%`)
        return result;
    }

}