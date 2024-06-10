
const express = require("express")
const app = express()
require('dotenv').config()

const PORT = process.env.SERVER_PORT || 3001

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

// app.use(express.static( './public'));
// app.get("/", (req, res) => {
//   res.render("index")
// })

app.set('view engine', 'ejs')
app.set('views', './views')


app.get("/", (req, res) => {
  res.render("index")
})