const db = require("../utils/database");
//Tipos de datos de sequelize

const { DataTypes } = require("sequelize");

//definir el modelo de usuarios
//los modelos se definen con una mayuscula

//Parametros
//nombre de la tabla
//atributos (objeto)
const Users = db.define("users", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
