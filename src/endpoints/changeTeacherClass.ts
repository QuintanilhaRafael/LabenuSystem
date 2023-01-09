import { Request, Response } from "express"
import { TeacherDatabase } from './../database/TeacherDatabase';

export const changeTeacherClass = async (req: Request, res: Response) => {
  let errorCode = 400
  try {

    const teacher_id = req.params.teacher_id as string
    const newClassId = req.body.newClassId as string
    const updateItem = "class_id"

    if (!newClassId || !teacher_id) {
        throw new Error("Body inválido.")
    }

    const teacherDB = new TeacherDatabase()
    await teacherDB.update(
      teacher_id,
      newClassId,
      updateItem
    )

    res.status(201).end()
} catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}