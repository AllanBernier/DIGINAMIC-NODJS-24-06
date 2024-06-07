
// $npm init (enter)
// $npm i express
// package.json -> script "start" : "nodee index.js"
// npm run start

const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log("App started on port 3000")
})


app.get("/", (req, res) => {
  res.send("Hello world !")
})

app.get("/test", (req, res) => {
  res.send("Testing ...")
})