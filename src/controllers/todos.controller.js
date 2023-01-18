const todoServices = require('../services/todo.service')

const getAllTodos = async (req, res) => {
    try {
        const result = await todoServices.getAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await todoServices.getById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getTodosWithCat = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await todoServices.getTodoWithCat(id)
        res.json({
            message:"Enviando tareas con categoria",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            error:error.message,
            details:error.stack
        })
    }
}

const postTodo = async (req, res) => {
    try {
        const todo = req.body
        const result = await todoServices.create(todo)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const putTodo = async (req, res) => {
    try {
        const { id } = req.params
        const field = req.body
        const result = await todoServices.update(id, field)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const deleteTodo = async(req, res) => {
    try {
        const {id} = req.params
        const result = await todoServices.delete(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = {
    getAllTodos,
    getTodoById,
    postTodo,
    putTodo,
    deleteTodo,
    getTodosWithCat
}