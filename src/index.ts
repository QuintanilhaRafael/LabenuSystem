import { app } from "./app";
import { changeClassModule } from "./endpoints/changeClassModule";
import { changeStudentClass } from "./endpoints/changeStudentClass";
import { changeTeacherClass } from "./endpoints/changeTeacherClass";
import { createLabeClass } from "./endpoints/createLabeClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getClasses } from "./endpoints/getClasses";
import { getStudent } from "./endpoints/getStudent";
import { getTeachers } from "./endpoints/getTeachers";

app.post("/class", createLabeClass);

app.post("/student", createStudent);

app.post("/teacher", createTeacher);

app.get("/classes", getClasses);

app.get("/student", getStudent);

app.get("/teachers", getTeachers);

app.put("/classes/:class_id", changeClassModule);

app.put("/students/:student_id", changeStudentClass);

app.put("/teachers/:teacher_id", changeTeacherClass);