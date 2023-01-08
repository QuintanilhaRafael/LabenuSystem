import { Request, Response } from "express"
import { StudentDatabase } from "../database/StudentDatabase"
import { Student } from "../models/Student"

export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name as string
        const email = req.body.email as string
        const birthDate = req.body.birthDate as Date
        const labeClass = req.body.labeClass as string
        const hobbies = req.body.hobbies as string[]

        if (!name || !email || !birthDate || !labeClass || !hobbies) {
            throw new Error("Body inválido.")
        }

        const student = new Student(
            Date.now().toString(),
            name,
            email,
            birthDate,
            labeClass,
            hobbies
        )

            
        const studentDB = new StudentDatabase()
        await studentDB.insert(student)

        res.status(201).end()
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}