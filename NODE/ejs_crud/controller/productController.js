const controller = {}
const Product = require("../model/Product")

controller.index = (req, res) => {
  Product.findAll()
  .then((products) => {
    res.render("index", { products })
  })
}

controller.show = (req, res) => {

  Product.findByPk(req.params.id)
  .then((product) => {
    res.render("show", { product })
  })
}

controller.create = (req, res) => {
  res.render("create")
}

controller.store = (req, res) => {

  const { name, price, description, quantity } = req.body
  const product = {name, price, description, quantity}


  Product.create(product)
  .then( (p) => {
    res.redirect("/product")
  } )
  .catch( (error) => {
    res.render('create', { product, error })
  })  
}

controller.edit = (req, res) => {
  console.log("Edit page")
  Product.findByPk(req.params.id)
  .then((product) => {
    res.render("edit", { product })
  })
}

controller.update = (req, res) => {
  const id = req.params.id
  const { name, price, description, quantity } = req.body
  const product = {name, price, description, quantity}

  Product.update(product, { where : { id : id}}).then( (queryResult) => {
    res.redirect("/product")
  }).catch( (error) => {
    res.render('edit', { product, error })
  })
}

controller.destroy = (req, res) => {
  const id = req.params.id
  Product.destroy({ where : { id : id}}).then((queryResult) => {
    res.redirect("/product")
  }).catch( (error) => {
    res.redirect("/product", { error })
  })

}

module.exports = controller