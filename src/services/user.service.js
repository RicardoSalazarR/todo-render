const Users = require('../models/users.model')
const Todos = require('../models/todos.models')

class userService {
    static async getAll() {
        try {
            const result = await Users.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
    static async getById(id) {
        try {
            const result = await Users.findByPk(id)
            return result
        } catch (error) {
            throw error
        }
    }
    static async getWithTasks(id){
        try {
            const result = await Users.findOne({
                where:{id},
                // attributes:["username"],
                attributes:{
                    exclude:"password"
                },
                include:{
                    model:Todos,
                    as:"tasks"
                }
            })
            return result            
        } catch (error) {
            throw error
        }
    }
    static async create(user) {
        try {
            const result = Users.create(user)
            return result
        } catch (error) {
            throw error
        }
    }
    static async update(id, field) {
        try {
            const result = Users.update(field, { where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
    static async delete(id){
        try {
            const result = Users.destroy({where:{id}})            
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = userService;