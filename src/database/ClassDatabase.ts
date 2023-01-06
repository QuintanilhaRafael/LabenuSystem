import { BaseDatabase } from "./BaseDatabase";

export class ClassDatabase extends BaseDatabase {
    TABLE_NAME: "Class";

    public async selectClasses() {
        return super.select()
    }

    public async insertClass( ) {
        // return super.insert()
    }

    public async updateClassModule( ) {
        // return super.update()
    }
}