const express = require("express")
const bodyParser = require('body-parser')
const app = express()

const productRouter = require("./router/productRouter")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(productRouter)

app.listen(3000, () => {
  console.log("App started on port 3000")
})



/*
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
*/













