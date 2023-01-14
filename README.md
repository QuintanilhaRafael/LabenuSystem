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

## 👩‍💻 Desenvolvedores:

- João Vitor Gomes Lara Resende.
- Rafael Gonçalves Quintanilha Guimarães.
- Nei Luis Duarte Tavares Junior.