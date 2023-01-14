import { LabeClass } from "./LabeClass";

export class CompleteLabeClass extends LabeClass {
    constructor(
        id: string,
        name: string,
        public students: string[],
        public teachers: string[]
    ) {
        super(
            id,
            name
        )
    }    
}