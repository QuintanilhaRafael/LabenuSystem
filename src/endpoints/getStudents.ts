import { Request, Response } from "express"
import { HobbyDatabase } from "../database/HobbyDatabase"
import { StudentDatabase } from "../database/StudentDatabase"
import { StudentHobbiesDatabase } from "../database/StudentHobbiesDatabase"
import { Hobby } from "../models/Hobby"
import { Student } from "../models/Student"
import { StudentHobby } from "../models/StudentHobby"

export const getStudents = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let name = req.query.name as string
        const hobby = req.query.hobby as string

        if (!name) {
            name = ""
        }

        const studentDB = new StudentDatabase()
        const students: Student[] = await studentDB.selectStudents(name)

        const hobbyDB = new HobbyDatabase()
        const hobbies: Hobby[] = await hobbyDB.select()

        const studentHobbiesDB = new StudentHobbiesDatabase()
        const studentsHobbies: StudentHobby[] = await studentHobbiesDB.select()

        students.forEach(student => {
            let studentHobbies: string[] = []
            studentsHobbies.forEach(studentHobby => {
                if (studentHobby.student_id === student.id) {
                    hobbies.forEach(hobby => {
                        if (studentHobby.hobby_id === hobby.id) {
                            studentHobbies.push(hobby.name)
                        }
                        student.hobbies = studentHobbies
                    })
                }
            })
        })

        let result: Student[] = []
        if (hobby) {
            students.forEach(student => {
                if (student.hobbies.find(studentHobby => {
                    return studentHobby.toLowerCase().includes(hobby.toLowerCase())
                })){
                    result.push(student)
                }
            })
            res.status(200).send({ students: result })
        } else {
            res.status(200).send({ students })
        }
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}