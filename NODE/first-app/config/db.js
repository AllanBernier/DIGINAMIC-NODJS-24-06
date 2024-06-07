const sequelize = require("sequelize")

const db = new sequelize({
  dialect : 'sqlite',
  storage : 'db.sqlite'
})

db.sync()

module.export = db