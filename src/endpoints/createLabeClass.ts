import { Request, Response } from "express"
import { LabeClassDatabase } from "../database/LabeClassDatabase"
import { LabeClass } from "../models/LabeClass"

export const createLabeClass = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name as string

        if (!name) {
            throw new Error("Body inválido.")
        }

        const labeClass = new LabeClass(
            Date.now().toString(),
            name
        )

        const labeClassDB = new LabeClassDatabase()
        await labeClassDB.insert(labeClass)

        res.status(201).end()
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}