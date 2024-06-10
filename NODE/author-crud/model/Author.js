const sequelize = require("sequelize")
const db = require("../config/db")

const Author = db.define('Author', {
  id : { type : sequelize.INTEGER, primaryKey : true, autoIncrement : true},
  firstName : sequelize.STRING,
  lastName : sequelize.STRING,
  nbPublication : sequelize.INTEGER,
  birthDate : sequelize.DATE
})


module.exports = Author
