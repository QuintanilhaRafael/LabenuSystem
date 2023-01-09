import { LabeClass } from "../models/LabeClass";
import { BaseDatabase } from "./BaseDatabase";

export class LabeClassDatabase extends BaseDatabase {
    TABLE_NAME = "Class";

    public selectClasses() {
        return super.select()
    }

    public insertClass(labeClass: LabeClass) {
        return super.insert(labeClass)
    }
    

    public updateClassModule(class_id: string, newModule: string, updateItem: string) {
        return super.update(class_id, newModule, updateItem)
    }
}