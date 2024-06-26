const sequelize = require("sequelize")

const db = new sequelize({
  dialect : process.env.DB_DRIVER || 'sqlite',
  storage : process.env.SERVER_URL || 'db.sqlite'
})

db.sync()

module.exports = db