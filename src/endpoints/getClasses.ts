import { Request, Response } from "express"
import { ClassDatabase } from "../database/ClassDatabase"

export const getClasses = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const classDB = new ClassDatabase()
        const result = await classDB.selectClasses()

        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}