const Categories = require('../models/categories.models')
const Todos = require('../models/todos.models')
const TodosCategories = require('../models/todosCategories.models')

class todoServices {
    static async getAll() {
        try {
            const result = await Todos.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
    static async getById(id) {
        try {
            const result = await Todos.findByPk(id)
            return result
        } catch (error) {
            throw error
        }
    }

    static async getTodoWithCat(id) {
        //categoryId
        try {
            const result = await Todos.findOne({
                where: { id },
                include: {
                    model: TodosCategories,
                    as: "category",
                    attributes:["id"],
                    include: {
                        model: Categories,
                        as: "categories"
                    }

                }
            })

            return result
            // const result = await Users.findOne({
            //     where:{id},
            //     // attributes:["username"],
            //     attributes:{
            //         exclude:"password"
            //     },
            //     include:{
            //         model:Todos,
            //         as:"tasks"
            //     }
            // })

        } catch (error) {
            throw error
        }
    }

    static async create(todo) {
        try {
            const result = Todos.create(todo)
            return result
        } catch (error) {
            throw error
        }
    }
    static async update(id, field) {
        try {
            const result = Todos.update(field, { where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
    static async delete(id) {
        try {
            const result = Todos.destroy({ where: { id } })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = todoServices;