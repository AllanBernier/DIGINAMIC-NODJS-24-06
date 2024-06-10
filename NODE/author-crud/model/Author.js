const sequelize = require("sequelize")
const db = require("../config/db")

const Author = db.define('Author', {
  id : { type : sequelize.INTEGER, primaryKey : true, autoIncrement : true},
  firstName : {
    type : sequelize.STRING,
    allowNull : false,
    validate : {
      notNull : true,
      notEmpty : true,
      len: [3, 255],
    }
  },
  lastName : {
    type : sequelize.STRING,
    allowNull : false,
    validate : {
      notNull : true,
      notEmpty : true,
      len: [3, 255],
    }
  },
  nbPublication : {
    type : sequelize.INTEGER,
    allowNull : false,
    validate : {
      notNull : true,
      notEmpty : true,
      isInt : true,
      min : 0
    }
  },
  birthDate : {
    type : sequelize.DATE,
    allowNull : false,
    validate : {
      notNull : true,
      notEmpty : true,
      isDate : true,
    }
  }
})


module.exports = Author
