import { Request, Response } from "express"
import { LabeClassDatabase } from "../database/LabeClassDatabase"
import { StudentDatabase } from "../database/StudentDatabase"
import { TeacherDatabase } from "../database/TeacherDatabase"
import { CompleteLabeClass } from "../models/CompleteLabeClass"
import { Person } from "../models/Person"

export const getActiveClasses = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const labeClassDB = new LabeClassDatabase()
        const labeClasses: CompleteLabeClass[] = await labeClassDB.selectClasses()

        const studentDB = new StudentDatabase()
        const students: Person[] = await studentDB.select()

        const teacherDB = new TeacherDatabase()
        const teachers: Person[] = await teacherDB.select()


        labeClasses.forEach(labeClass => {
            let classStudents: string[] = []
            let classTeachers: string[] = []
            students.forEach(student => {
                if (labeClass.id === student.class_id) {
                    classStudents.push(student.id)
                }
                labeClass.students = classStudents
            })
            teachers.forEach(teacher => {
                if (labeClass.id === teacher.class_id) {
                    classTeachers.push(teacher.id)
                }
                labeClass.teachers = classTeachers
            })
        })

        res.status(200).send({ labeClasses })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}