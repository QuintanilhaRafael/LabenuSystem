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

export const getPeopleBySign = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const sign = req.params.sign as string

        if (!sign) {
            errorCode = 422
            throw new Error("O signo não foi informado!")
        }

        if (sign.toLowerCase() !== "aries" && sign.toLowerCase() !== "taurus" && sign.toLowerCase() !== "gemini" && sign.toLowerCase() !== "cancer" &&
            sign.toLowerCase() !== "leo" && sign.toLowerCase() !== "virgo" && sign.toLowerCase() !== "libra" && sign.toLowerCase() !== "scorpio" &&
            sign.toLowerCase() !== "sagittarius" && sign.toLowerCase() !== "capricorn" && sign.toLowerCase() !== "aquarius" && sign.toLowerCase() !== "pisces") {
            errorCode = 422
            throw new Error("Signo inválido. Digite o nome do signo em inglês!")
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

        const getSign = (birthDate: string): string => {
            const day = Number(birthDate.slice(0, 2))
            const month = Number(birthDate.slice(3, 5))
            if (month === 1) {
                if (day >= 1 && day <= 20) {
                    return "capricorn"
                } else {
                    return "aquarius"
                }
            } else if (month === 2) {
                if (day >= 1 && day <= 18) {
                    return "aquarius"
                } else {
                    return "pisces"
                }
            } else if (month === 3) {
                if (day >= 1 && day <= 20) {
                    return "pisces"
                } else {
                    return "aries"
                }
            } else if (month === 4) {
                if (day >= 1 && day <= 20) {
                    return "aries"
                } else {
                    return "taurus"
                }
            } else if (month === 5) {
                if (day >= 1 && day <= 20) {
                    return "taurus"
                } else {
                    return "gemini"
                }
            } else if (month === 6) {
                if (day >= 1 && day <= 20) {
                    return "gemini"
                } else {
                    return "cancer"
                }
            } else if (month === 7) {
                if (day >= 1 && day <= 22) {
                    return "cancer"
                } else {
                    return "leo"
                }
            } else if (month === 8) {
                if (day >= 1 && day <= 22) {
                    return "leo"
                } else {
                    return "virgo"
                }
            } else if (month === 9) {
                if (day >= 1 && day <= 22) {
                    return "virgo"
                } else {
                    return "libra"
                }
            } else if (month === 10) {
                if (day >= 1 && day <= 22) {
                    return "libra"
                } else {
                    return "scorpio"
                }
            } else if (month === 11) {
                if (day >= 1 && day <= 21) {
                    return "scorpio"
                } else {
                    return "sagittarius"
                }
            } else {
                if (day >= 1 && day <= 20) {
                    return "sagittarios"
                } else {
                    return "capricorn"
                }
            }
        }

        const filteredStudents = students.filter(student => {
            return getSign(student.birth_date) === sign.toLowerCase()
        })
        const filteredTeachers = teachers.filter(teacher => {
            return getSign(teacher.birth_date) === sign.toLowerCase()
        })

        if (filteredStudents.length === 0 && filteredTeachers.length === 0) {
            res.status(200).send({ message: "Não existem estudantes ou docentes com este signo." })
        } else {
            res.status(200).send({ students: filteredStudents, teachers: filteredTeachers })
        }

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}