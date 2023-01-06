import { Request, Response } from "express"

export const changeTeacherClass = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
}