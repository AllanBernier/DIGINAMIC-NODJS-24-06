
// $npm init (enter)
// $npm i express
// package.json -> script "start" : "nodee index.js"
// npm run start
const bodyParser = require('body-parser')
const express = require("express")
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

app.get("/product/:id", (req, res) => {
  console.log(req.params.id)
  res.send("Product : " + req.params.id)
})

app.get("/product", (req, res) => {
  console.log(req.query.q)
  res.send("finding product that start with :" + req.query.q)
})

app.post("/product", (req,res) => {
  console.log(req.body)
  res.send(req.body)
})



