
const controller = {}

const Product = require('../model/Product')

let products = []


controller.getAll = (req, res) => {
  Product.findAll().then((products) => {
    res.send(products)
  }).catch((err) => {
    res.send({message : "Find all failed"})
  })
}

controller.getById = (req, res) => {
  const id = req.params.id
  Product.find(id).then( (p) => {
    res.send(p)
  }).catch((err) => {
    res.send({message : "Product not found"})
  })
}

controller.create = (req, res) => {
  const {name, price, description, quantity} = req.body
  const product = { name, price, description, quantity }

  Product.create(product)
  .then( (p) => {
    return res.send({product : p, message: "product created"})
  } )
  .catch( (err) => {
    return res.send({message: "Error creating product"})
  })
  
}

controller.update = (req, res) => {
  const id = req.params.id
  const {name, price, description, quantity} = req.body
  const product = { name, price, description, quantity }

  if (products[id] === undefined ){
    return res.send("Product not found")
  }
  
  products[id] = product
  res.send({product : product, message: "product updated !" })
}

controller.delete = (req, res) => {
  const id = req.params.id
  if (products[id] === undefined ){
    return res.send("Product not found")
  }
  products.splice(id, 1)
  res.send({message : "product deleted !"})
}

module.exports = controller



