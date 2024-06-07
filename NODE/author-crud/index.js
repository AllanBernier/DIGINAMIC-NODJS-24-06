const express = require("express");
const bodyParser = require("body-parser")
const authorRouter = require("./router/authorRouter")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/author", authorRouter)

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

