import { Request, Response } from "express"

export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        

        res.status(201).end()
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}