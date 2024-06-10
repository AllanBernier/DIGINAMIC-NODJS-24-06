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



const ensureHaveId = (req, res, next) => {
  req.params.id = parseInt(req.params.id);

  if (isNaN(req.params.id)){
    return res.send({errors : { id: "Must be an integer"}})
  }
  next()
}

app.get("/hello/:id", ensureHaveId,  (req, res) => {
  res.send(`Hello ${req.params.id}`)
})










