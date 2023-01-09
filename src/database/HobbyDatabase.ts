import { BaseDatabase } from "./BaseDatabase";

export class HobbyDatabase extends BaseDatabase {
    TABLE_NAME = "Hobby";

    public selectHobby() {
        return super.select()
    }

    public insertHobby(hobbies: string) {
        return super.insert(hobbies)
    }

}