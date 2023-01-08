import { LabeClass } from "../models/LabeClass";
import { BaseDatabase } from "./BaseDatabase";

export class LabeClassDatabase extends BaseDatabase {
    TABLE_NAME = "Class";

    public async selectClasses() {
        return super.select()
    }

    public async insertClass(labeClass: LabeClass) {
        return super.insert(labeClass)
    }
    

    public async updateClassModule(module: any, id: string) {
        return super.update(module, id)
    }
}