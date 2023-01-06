import { Request, Response } from "express"

export const changeClassModule = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      
    } catch (error) {
      res.status(errorCode).send({ message: error.message })
    }
}