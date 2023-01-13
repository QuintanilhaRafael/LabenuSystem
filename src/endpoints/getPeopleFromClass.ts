import { Request, Response } from "express"
import { HobbyDatabase } from "../database/HobbyDatabase"
import { SpecialtyDatabase } from "../database/SpecialtyDatabase"
import { StudentDatabase } from "../database/StudentDatabase"
import { StudentHobbiesDatabase } from "../database/StudentHobbiesDatabase"
import { TeacherDatabase } from "../database/TeacherDatabase"
import { TeacherSpecialtiesDatabase } from "../database/TeacherSpecialtiesDatabase"
import { Hobby } from "../models/Hobby"
import { Specialty } from "../models/Specialty"
import { Student } from "../models/Student"
import { StudentHobby } from "../models/StudentHobby"
import { Teacher } from "../models/Teacher"
import { TeacherSpecialty } from "../models/TeacherSpecialty"

export const getPeopleFromClass = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const class_id = req.params.class_id as string

        if (!class_id) {
            errorCode = 422
            throw new Error("Id não foi informado.")
        }

        const studentDB = new StudentDatabase()
        const students: Student[] = await studentDB.select()

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