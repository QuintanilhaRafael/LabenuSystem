import { BaseDatabase } from "./BaseDatabase";

export class HobbyDatabase extends BaseDatabase {
    TABLE_NAME = "Hobby";

    public async selectHobby() {
        return super.select()
    }

    public async insertHobby(hobbies: string) {
        return super.insert(hobbies)
    }

}