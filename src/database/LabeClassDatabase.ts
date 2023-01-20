import { BaseDatabase } from "./BaseDatabase";

export class LabeClassDatabase extends BaseDatabase {
    TABLE_NAME = "Class";

    public async selectClasses() {
        const result = await BaseDatabase.connection(
            this.TABLE_NAME
        ).select()
        .where('module', '>', '0')
        return result;
    }

}