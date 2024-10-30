# Projeto em grupo - LabenuSystem

## 🔗 Link do Deploy
https://labenu-system7-dg75.onrender.com

## 🔗 Link para acessar os endpoints do Postman
https://documenter.getpostman.com/view/22376488/2s8ZDSckcu

## 💻 Funcionalidades

### Create LabeClass
- Cria uma nova turma. O nome de cada turma deve ser único, senão uma mensagem de erro irá aparecer e não irá criar. 
- O usuário deverá passar o name da nova turma através do body. 
- A turma começa no módulo 0.

### Create Student 
- Cria um novo estudante. 
- O email deve ser único, senão uma mensagem de erro irá aparecer e não irá criar. 
- O usuário deverá passar o name, email, birth_date, class_id e hobbies através do body. 
- O class_id já deve existir no banco de dados de uma turma já criada. 
- O birth_date deve ser no formato "DD/MM/AAAA".

### Create Teacher 
- Cria um novo docente. O email deve ser único, senão uma mensagem de erro irá aparecer e não irá criar.
- O usuário deverá passar o name, email, birth_date, class_id e specialties através do body.
- O class_id já deve existir no banco de dados de uma turma já criada.
- O birth_date deve ser no formato "DD/MM/AAAA".
- As specialties devem ser obrigatoriamente: JS, CSS, React, Typescript ou POO.

### Change Class Module
- Altera o módulo da turma. O newModule deve estar entre 0 e 6, senão uma mensagem de erro irá aparecer.
- O usuário deverá passar o newModule através do body e o class_id através do params (url).

### Change Student Class
- Altera a turma do estudante. O newClassId já deve existir no banco de dados de uma turma já criada.
- O usuário deverá passar o newClassId através do body e o student_id através do params (url).

### Change Teacher Class
- Altera a turma do docente. O newClassId já deve existir no banco de dados de uma turma já criada.
- O usuário deverá passar o newClassId através do body e o teacher_id através do params (url).

### Get Active Classes
- Retorna uma lista com todas as turmas que estão em um módulo entre 1 e 6.

### Get People From Class
- Retorna todos os estudantes e docentes que possuem o mesmo signo.
- O sign deve ser passado por params (url) e deve estar em inglês.

### Get Teachers
- Retorna todos os docentes ou apenas os que possuem uma determinada especialidade.
- Caso o usuário queira todos os docentes, basta retirar a query specialty.
- Caso o usuário queira um docente com uma especialidade específica, deve passar o specialty por query params.

### Get Students
- Retorna todos os estudantes ou apenas os que possuem um determinado nome e/ou determinado hobby.
- Caso o usuário queira todos os estudantes, basta retirar as queries.
- Caso o usuário queira um estudante com uma nome específico, deve passar o name por query params.
- Caso o usuário queira um estudante com um hobby específico, deve passar o hobby por query params.

## 📷 Prints do Workbench

![3](https://user-images.githubusercontent.com/102267210/212493071-0ed55beb-8c49-4557-8055-3a26114d42f2.PNG)
![4](https://user-images.githubusercontent.com/102267210/212493072-b5519478-114b-472e-8f17-c8bf259a39ff.PNG)
![5](https://user-images.githubusercontent.com/102267210/212493073-cae32a0c-b822-4b6e-91d7-51f4e2ce1870.PNG)
![6](https://user-images.githubusercontent.com/102267210/212493074-c6071fad-b0f0-4bc0-9021-19e97096a6e7.PNG)
![7](https://user-images.githubusercontent.com/102267210/212493075-eb80c06a-1f7d-462b-9478-4d4d73696561.PNG)
![1](https://user-images.githubusercontent.com/102267210/212493077-deb26276-6ec0-4d25-8256-227516fd866f.PNG)
![2](https://user-images.githubusercontent.com/102267210/212493078-ee1694d0-0446-4e75-9aea-942f7a546739.PNG)


## 👩‍💻 Desenvolvedores:

- Rafael Gonçalves Quintanilha Guimarães.
- João Vitor Gomes Lara Resende.
- Nei Luis Duarte Tavares Junior.
