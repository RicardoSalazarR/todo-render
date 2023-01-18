const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/init.model')
const Users = require('./models/users.model')
const Todos = require('./models/todos.models')
const userRoutes = require('./routes/users.routes')
const todoRoutes = require('./routes/todos.routes')
const authRoutes = require('./routes/auth.routes')
const cors = require('cors')
require('dotenv').config()

//Crear instancia de express
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
//Probando conexion a la base de datos
db.authenticate()
    .then(() => console.log('autenticacion exitosa'))
    .catch(error => console.log(error))


initModels()
//Se usa el metodo sinc de la bd
db.sync({ force:false }) //force true para sobreescribir
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.log(error))


app.get('/', (req, res) => {
    res.status(200).json({ message: "Bienvenido al servidor" })
})

app.use('/api/v1',userRoutes)
app.use('/api/v1',todoRoutes)
app.use('/api/v1',authRoutes)

//definir rtas de los ep
//todas las consultas
//localhost:8000/users
//localhost:8000/todos

app.get('/users', async (req, res) => {
    try {
        const result = await Users.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

//obtener user con el id
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await Users.findByPk(id)

        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

//obtener un usuario por username
app.get('/users/username/:username', async (req, res) => {
    try {
        const { username } = req.params
        const result = await Users.findOne({ where: { username } })

        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

//create
app.post('/users', async (req, res) => {
    try {
        const user = req.body
        const result = await Users.create(user)
        res.status(201).json(result)

    } catch (error) {
        console.log(error);
    }
})

//update password
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const field = req.body

        const result = await Users.update(field, { where: { id } })
        res.status(200).json(result)
    } catch (error) {

    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await Users.destroy({ where: { id } })
        res.status(200).json(result)
    } catch (error) {

    }
})

//Debes crear los siguientes endpoints para la tabla todos

// Obtener todas las tareas → GET localhost:8000/todos
app.get('/todos', async (req, res) => {
    try {
        const result = await Todos.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

// Obtener una tarea por su id → GET localhost:8000/todos/:id
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await Todos.findByPk(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

// Crear una nuevo todo → POST localhost:8000/todos
app.post('/todos', async (req, res) => {
    try {
        const todo = req.body
        const result = await Todos.create(todo)
        res.status(201).json(result)
    } catch (error) {
        console.log(error);
    }
})



// Actualizar un todo (actualizar la propiedad isComplete) → PUT localhost:8000/todos/:id
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const field = req.body

        const result = await Todos.update(field, { where: { id } })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

// Eliminar una tarea → DELETE localhost:8000/todos
app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const result = await Todos.destroy({ where: { id } })
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})