//importar todos los modelos creados

const Users = require('./users.model')
const Todos = require('./todos.models')
const Categories = require('./categories.models')
const TodosCategories = require('./todosCategories.models')

const initModels=()=>{
    //hasOne
    //hasMany
    //belongsTo

    Todos.belongsTo(Users, {as:'author', foreignKey:'user_id'})
    Users.hasMany(Todos, {as:'tasks', foreignKey:'user_id'})

    Categories.belongsTo(Users, {as:'author', foreignKey:'user_id'})
    Users.hasMany(Categories, {as:'category', foreignKey:'user_id'})

    TodosCategories.belongsTo(Todos, {as:'tasks', foreignKey:'todo_id'})
    Todos.hasMany(TodosCategories, {as:'category', foreignKey:'todo_id'})

    TodosCategories.belongsTo(Categories, {as:'categories',foreignKey:'category_id'})
    Categories.hasMany(TodosCategories, {as:'tasks',foreignKey:'category_id'})
};

module.exports = initModels