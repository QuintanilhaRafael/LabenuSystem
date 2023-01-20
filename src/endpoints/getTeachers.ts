import { Request, Response } from "express"
import { SpecialtyDatabase } from "../database/SpecialtyDatabase"
import { TeacherDatabase } from "../database/TeacherDatabase"
import { TeacherSpecialtiesDatabase } from "../database/TeacherSpecialtiesDatabase"
import { Specialty } from "../models/Specialty"
import { Teacher } from "../models/Teacher"
import { TeacherSpecialty } from "../models/TeacherSpecialty"


export const getTeachers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const specialty = req.query.specialty as string

        const teacherDB = new TeacherDatabase()
        const teachers: Teacher[] = await teacherDB.select()

        const specialtyDB = new SpecialtyDatabase()
        const specialties: Specialty[] = await specialtyDB.select()

        const teacherSpecialtiesDB = new TeacherSpecialtiesDatabase()
        const teachersSpecialties: TeacherSpecialty[] = await teacherSpecialtiesDB.select()

        teachers.forEach(teacher => {
            let teacherSpecialties: string[] = []
            teachersSpecialties.forEach(teacherSpecialty => {
                if (teacherSpecialty.teacher_id === teacher.id) {
                    specialties.forEach(specialty => {
                        if (teacherSpecialty.specialty_id === specialty.id) {
                            teacherSpecialties.push(specialty.name)
                        }
                        teacher.specialties = teacherSpecialties
                    })
                }
            })
        })

        let result: Teacher[] = []
        if (specialty) {
            teachers.forEach(teacher => {
                if (teacher.specialties.find(teacherSpecialty => {
                    return teacherSpecialty.toLowerCase().includes(specialty.toLowerCase())
                })){
                    result.push(teacher)
                }
            })
            res.status(200).send({ teachers: result })
        } else {
            res.status(200).send({ teachers })
        }
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}