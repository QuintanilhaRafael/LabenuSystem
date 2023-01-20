import { Request, Response } from "express"
import { LabeClassDatabase } from './../database/LabeClassDatabase';

export const changeClassModule = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const class_id = req.params.class_id as string
    const newModule = req.body.newModule as string
    const updateItem = "module"

    if (!newModule) {
      errorCode = 422
      throw new Error("Body inválido.")
    }

    if (!class_id) {
      errorCode = 422
      throw new Error("Id não foi informado.")
    }

    if (Number(newModule) > 6 || Number(newModule) < 0 || isNaN(Number(newModule))) {
      errorCode = 422
      throw new Error("O módulo deve ser de 0 a 6.")
    }

    const labeClassDB = new LabeClassDatabase()
    await labeClassDB.update(
      class_id,
      newModule,
      updateItem
    )

    res.status(201).end()
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}