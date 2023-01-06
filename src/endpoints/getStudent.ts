import { Request, Response } from "express"
import { StudentDatabase } from "../database/StudentDatabase"

export const getStudent = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.query.name as string
        
        const studentDB = new StudentDatabase()
        const result = await studentDB.selectStudent(name)

        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}