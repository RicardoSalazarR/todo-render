const db = require('../utils/database')
const Users = require('../models/users.model')
const Todos = require('../models/todos.models')
const Categories = require('../models/categories.models')
const TodosCategories = require('../models/todosCategories.models')

const users = [
    { username: 'Ricardo', email: 'axel.111yo@gmail.com', password: '1234' },
    { username: 'Axel', email: 'axel2.111yo@gmail.com', password: '1234' },
    { username: 'Reyes', email: 'axel3.111yo@gmail.com', password: '1234' }
]
const todos = [
    { title: 'Estudiar node', description: 'desc1', userId: 1 },
    { title: 'pasear al perro', description: 'desc2', userId: 2 },
    { title: 'Lavar platos', description: 'desc3', userId: 3 },
    { title: 'Ir al chequeo mensual', description: 'desc4', userId: 1 }
]

const categories = [
    { name: 'personal', userId: 1 },
    { name: 'educacion', userId: 1 },
    { name: 'salud', userId: 2 },
    { name: 'trabajo', userId: 3 },
    { name: 'hogar', userId: 2 },
    { name: 'cocina', userId: 2 },
    { name: 'deporte', userId: 2 },
    { name: 'ocio', userId: 3 },
    { name: 'financiero', userId: 3 },
    { name: 'entretenimiento', userId: 1 },
];
const todoCatetegories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 3 },
    { categoryId: 1, todoId: 4 },
    { categoryId: 3, todoId: 4 },
]
// const categories = []
// const todosCategories = []

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando el sembrado malicioso");
        users.forEach((user) => Users.create(user))

        setTimeout(() => {
            todos.forEach(todo => Todos.create(todo))
        }, 100)
        setTimeout(() => {
            categories.forEach(category => Categories.create(category))
        }, 250)
        setTimeout(() => {
            todoCatetegories.forEach(tc => TodosCategories.create(tc))
        }, 450)
    })
    .catch(error => console.log(error))
