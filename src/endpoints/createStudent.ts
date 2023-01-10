import { Request, Response } from "express"
import { StudentDatabase } from "../database/StudentDatabase"
import { Person } from "../models/Person"
import { Hobby } from './../models/Hobby';
import { HobbyDatabase } from './../database/HobbyDatabase';
import { StudentHobby } from './../models/StudentHobby';
import { StudentHobbiesDatabase } from './../database/StudentHobbiesDatabase';

export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name as string
        const email = req.body.email as string
        const birth_date = req.body.birth_date as string
        const class_id = req.body.class_id as string
        const hobbies = req.body.hobbies as string[]

        if (!name || !email || !birth_date || !class_id || !hobbies) {
            throw new Error("Body inválido.")
        }

        const student = new Person(
            Date.now().toString(),
            name,
            email,
            birth_date,
            class_id
        )

        const studentDB = new StudentDatabase()
        await studentDB.insert(student)

        let cont: number = 1
        hobbies.forEach(async hobby => {
            const hobbyTable = new Hobby(
                Date.now().toString() + cont,
                hobby,
            )

            const hobbyDB = new HobbyDatabase()
            const studentHobbyDB = new StudentHobbiesDatabase()

            const getHobbies = await hobbyDB.select()

            const findHobby = getHobbies.find(hobbyTable => {
                return hobbyTable.name === hobby
            })


            let studentHobby: StudentHobby
            if (findHobby) {
                studentHobby = new StudentHobby(
                    Date.now().toString() + cont * 2,
                    student.getId(),
                    findHobby.id
                )
                cont++
                await studentHobbyDB.insert(studentHobby)
            } else {
                studentHobby = new StudentHobby(
                    Date.now().toString() + cont * 2,
                    student.getId(),
                    hobbyTable.getId()
                )
                cont++
                await hobbyDB.insert(hobbyTable)
                await studentHobbyDB.insert(studentHobby)
            }

        });

        res.status(201).end()
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}