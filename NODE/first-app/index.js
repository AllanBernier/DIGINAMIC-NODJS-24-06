
// $npm init (enter)
// $npm i express
// package.json -> script "start" : "nodee index.js"
// npm run start
const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(3000, () => {
  console.log("App started on port 3000")
})


app.get("/", (req, res) => {
  res.send("Hello world !")
})

app.get("/test", (req, res) => {
  res.send("Testing ...")
})

app.get("/task/:id", (req, res) => {
  console.log(req.params.id)
  res.send("task : " + req.params.id)
})

app.get("/task", (req, res) => {
  console.log(req.query.q)
  res.send("finding task that start with :" + req.query.q)
})

app.post("/task", (req,res) => {
  console.log(req.body)
  res.send(req.body)
})



// Author : "firstname", "lastname", "birth_date", "nb_publication", "id"
// let max_id = 0


// name, price, description, quantity
let products = []

// CRUD

// Create
// Read
// Update
// Delete
// Get by id


app.get("/product", (req, res) => {
  res.send(products)
})

app.get("/product/:id", (req, res) => {
  const id = req.params.id
  if (products[id] === undefined ){
    return res.send("Product not found")
  }
  res.send(products[id])
})


app.post("/product", (req, res) => {
  const {name, price, description, quantity} = req.body
  const product = { name, price, description, quantity }
  products.push({product})

  res.send({product : product, message: "product created"})
})

app.put("/product/:id", (req, res) => {
  const id = req.params.id
  const {name, price, description, quantity} = req.body
  const product = { name, price, description, quantity }

  if (products[id] === undefined ){
    return res.send("Product not found")
  }
  
  products[id] = product
  res.send({product : product, message: "product updated !" })

})

app.delete("/product/:id", (req, res) => {
  const id = req.params.id
  if (products[id] === undefined ){
    return res.send("Product not found")
  }
  products.splice(id, 1)
  res.send({message : "product deleted !"})
})













