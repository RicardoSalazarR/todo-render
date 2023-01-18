const db = require('../utils/database')
const Users = require('../models/users.model')
const {DataTypes} = require('sequelize')

const Categories = db.define('categories',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'user_id',
        references:{
            model:Users,
            key:'id'
        }
    }
},
{
    timestamps:false
})

module.exports = Categories