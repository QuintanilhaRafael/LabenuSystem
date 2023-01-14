import { Person } from "./Person";

export class Student extends Person {
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
        public hobbies: string[]
    ) {
        super(
            id,
            name,
            email,
            birth_date,
            class_id
        )
    }    
  
}
