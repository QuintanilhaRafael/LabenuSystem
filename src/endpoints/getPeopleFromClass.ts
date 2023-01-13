import { Request, Response } from "express"
import { LabeClassDatabase } from "../database/LabeClassDatabase"
import { StudentDatabase } from "../database/StudentDatabase"
import { TeacherDatabase } from "../database/TeacherDatabase"
import { CompleteLabeClass } from "../models/CompleteLabeClass"
import { Person } from "../models/Person"

export const getPeopleFromClass = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const class_id = req.params.class_id as string

        if (!class_id) {
            errorCode = 422
            throw new Error("Id não foi informado.")
        }

        const studentDB = new StudentDatabase()
        const students: Person[] = await studentDB.select()

        const teacherDB = new TeacherDatabase()
        const teachers: Person[] = await teacherDB.select()


        const filteredStudents = students.filter(student => {
            return class_id === student.class_id
        })
        const filteredTeachers = teachers.filter(teacher => {
            return class_id === teacher.class_id
        })

        res.status(200).send({ students: filteredStudents, teachers: filteredTeachers})
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}