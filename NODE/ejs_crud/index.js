
const express = require("express")
const app = express()
require('dotenv').config()
const productRouter = require("./router/productRouter")


app.use(express.urlencoded({ extended: true }) )
app.use(express.json())

const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})


app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/product', productRouter)


app.get("/", (req, res) => {
  res.render("index", { title: "Home" })
})