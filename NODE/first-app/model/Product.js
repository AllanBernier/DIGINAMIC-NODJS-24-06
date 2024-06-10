const db = require('../config/db')
const { DataTypes } = require('sequelize')

const Product = db.define('Product', {
  id : { type : DataTypes.INTEGER, primaryKey: true, autoIncrement : true },
  name : {type :DataTypes.STRING}, 
  price : DataTypes.NUMBER, 
  description : DataTypes.STRING,  
  quantity: DataTypes.NUMBER
})

module.exports = Product