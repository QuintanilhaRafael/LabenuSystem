import { Request, Response } from "express"
import { Person } from "../models/Person"
import { TeacherDatabase } from './../database/TeacherDatabase';
import { SpecialtyDatabase } from './../database/SpecialtyDatabase';
import { TeacherSpecialtiesDatabase } from './../database/TeacherSpecialtiesDatabase';
import { Specialty } from './../models/Specialty';
import { TeacherSpecialty } from './../models/TeacherSpecialty';

export const createTeacher = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name as string
        const email = req.body.email as string
        const birth_date = req.body.birth_date as string
        const class_id = req.body.class_id as string
        const specialties = req.body.specialties as string[]

        if (!name || !email || !birth_date || !class_id || !specialties) {
            throw new Error("Body inválido.")
        }

        const teacher = new Person(
            Date.now().toString(),
            name,
            email,
            birth_date,
            class_id
        )
            
        const teacherDB = new TeacherDatabase()
        await teacherDB.insert(teacher)

        let cont : number = 1
        specialties.forEach(async specialty => {
            const specialtiesTable = new Specialty(
                Date.now().toString()+cont,
                specialty,
            ) 
            const teacherSpecialty = new TeacherSpecialty(
                cont.toString(),
                teacher.getId(),
                Date.now().toString()+cont
            )
            cont++
            const specialtyDB = new SpecialtyDatabase()
            await specialtyDB.insert(specialtiesTable)
            const teacherSpecialtyDB = new TeacherSpecialtiesDatabase()
            await teacherSpecialtyDB.insert(teacherSpecialty)

        });

        res.status(201).end()
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}