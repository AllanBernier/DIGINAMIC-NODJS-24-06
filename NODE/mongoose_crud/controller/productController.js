const Product = require("../model/Product")
const controller = {}


controller.getAll = (req, res) => {
  Product.find()
  .then( (products) => res.json(products) )
  .catch( (err) => res.json(err) )
}

controller.create = (req, res) => {

  const { name, price, quantity,  description } = req.body

  Product.create({name, price, quantity, description})
  .then( (product) => res.json(product) )
  .catch( (err) => res.json(err) )
}

controller.update = (req, res) => {

  const { name, price, quantity,  description } = req.body


  Product.updateOne({ _id : req.params.id }, {name, price, quantity, description})
  .then( (product) => res.json(product) )
  .catch( (err) => res.json(err) )
}

controller.delete = (req, res) => {
  Product.deleteOne({_id : req.params.id})
  .then( (product) => res.json(product) )
  .catch( (err) => res.json(err) )
}


module.exports = controller
