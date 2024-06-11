const db = require("../config/db")
const sequelize = require("sequelize")

const UserShema = db.define('user', {
  id : { type : sequelize.INTEGER, primaryKey : true, autoIncrement : true },
  email : { type : sequelize.STRING, allowNull : false },
  password : { type : sequelize.STRING, allowNull : false },
  token : { type : sequelize.STRING, allowNull : true }
})

module.exports = UserShema