import { Request, Response } from "express"
import { HobbyDatabase } from "../database/HobbyDatabase"
import { StudentDatabase } from "../database/StudentDatabase"
import { StudentHobbiesDatabase } from "../database/StudentHobbiesDatabase"

export const getStudent = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let name = req.query.name as string

        if (!name) {
            name = ""
        }

        const studentDB = new StudentDatabase()
        const students = await studentDB.selectStudents(name)

        const hobbyDB = new HobbyDatabase()
        const hobbies = await hobbyDB.select()

        const studentHobbiesDB = new StudentHobbiesDatabase()
        const studentsHobbies = await studentHobbiesDB.select()

        students.forEach(student => {
            let studentHobbies: string[] = []
            studentsHobbies.forEach(studentHobby => {
                if (studentHobby.student_id === student.id) {
                    hobbies.forEach(hobby => {
                        if (studentHobby.hobby_id === hobby.id) {
                            studentHobbies.push(hobby)
                        }
                        student.hobbies = studentHobbies
                    })
                }
            })
        })

        res.status(200).send({ students: students })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}