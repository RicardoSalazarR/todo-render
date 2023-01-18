const userServices = require('../services/user.service')

const getAllUsers = async (req, res) => {
    try {
        const result = await userServices.getAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await userServices.getById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUserWithTasks=async(req,res)=>{
    try {
        const {id} = req.params
        const result = await userServices.getWithTasks(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const postUser = async (req, res) => {
    try {
        const user = req.body
        const result = await userServices.create(user)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const putUser = async (req, res) => {
    try {
        const { id } = req.params
        const field = req.body
        const result = await userServices.update(id, field)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const deleteUser = async(req, res) => {
    try {
        const {id} = req.params
        const result = await userServices.delete(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser,
    getUserWithTasks
}