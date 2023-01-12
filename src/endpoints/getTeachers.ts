import { Request, Response } from "express"
import { SpecialtyDatabase } from "../database/SpecialtyDatabase"
import { TeacherDatabase } from "../database/TeacherDatabase"
import { TeacherSpecialtiesDatabase } from "../database/TeacherSpecialtiesDatabase"


export const getTeachers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const teacherDB = new TeacherDatabase()
        const teachers = await teacherDB.select()

        const specialtyDB = new SpecialtyDatabase()
        const specialties = await specialtyDB.select()

        const teacherSpecialtiesDB = new TeacherSpecialtiesDatabase()
        const teachersSpecialties = await teacherSpecialtiesDB.select()

        teachers.forEach(teacher => {
            let teacherSpecialties: string[] = []
            teachersSpecialties.forEach(teacherSpecialty => {
                if (teacherSpecialty.teacher_id === teacher.id) {
                    specialties.forEach(specialty => {
                        if (teacherSpecialty.specialty_id === specialty.id) {
                            teacherSpecialties.push(specialty)
                        }
                        teacher.specialties = teacherSpecialties
                    })
                }
            })
        })


        res.status(200).send({ teachers: teachers })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}