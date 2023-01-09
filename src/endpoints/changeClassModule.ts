import { Request, Response } from "express"
import { LabeClass } from './../models/LabeClass';
import { LabeClassDatabase } from './../database/LabeClassDatabase';

export const changeClassModule = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const class_id = req.params.class_id as string
      const newModule = req.body.newModule as string
      const updateItem = "module"

      if (!class_id || !newModule) {
          throw new Error("Body inválido.")
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