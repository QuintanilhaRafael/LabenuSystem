import { Request, Response } from "express"
import { TeacherDatabase } from "../database/TeacherDatabase"


export const getTeachers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const teacherDB = new TeacherDatabase()
        const result = await teacherDB.selectTeachers()

        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}