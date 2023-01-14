import { Person } from "./Person";

export class Teacher extends Person {
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string,
        public specialties: string[]
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
