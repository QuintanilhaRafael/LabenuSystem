import { Request, Response } from "express"
import { StudentDatabase } from './../database/StudentDatabase';

export const changeStudentClass = async (req: Request, res: Response) => {
  let errorCode = 400
  try {

    const student_id = req.params.student_id as string
    const newClassId = req.body.newClassId as string
    const updateItem = "class_id"

    if (!newClassId || !student_id) {
      errorCode = 422
      throw new Error("Body inválido.")
    }

    const studentDB = new StudentDatabase()
    await studentDB.update(
      student_id,
      newClassId,
      updateItem
    )

    res.status(201).end()
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}