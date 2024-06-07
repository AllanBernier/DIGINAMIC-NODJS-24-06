const express = require("express");
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

let authors = []
// Author : "firstname", "lastname", "birth_date", "nb_publication", "id"

let max_id = 0


app.get("/author", (req, res) => {
  res.send(authors)
})

app.get("/author/:id", (req, res) => {
  const id = req.params.id
  const author = authors.find( (author) => author.id == id )

  res.json( author === undefined ? {message : "Author not found"} : author )
})

app.post("/author", (req, res) => {
  const {firstname, lastname, birth_date, nb_publication} = req.body
  let current_id = max_id++
  const author = { firstname, lastname, birth_date, nb_publication, id : current_id }
  authors.push(author)

  res.send(author)
})

app.put("/author/:id", (req, res) => {
  const id = req.params.id
  let index = authors.findIndex( (author) => author.id == id )
  const {firstname, lastname, birth_date, nb_publication} = req.body

  if (index === -1) {
    return res.send("Author not found")
  }

  authors[index] = {...authors[index], firstname, lastname, birth_date, nb_publication}
  res.send({ author : authors[index] , message : "Author updated !"})

})

app.delete("/author/:id", (req, res) => {
  const id = req.params.id

  console.log(typeof id, id)

  const index = authors.findIndex( (author) => author.id == id )

  if (index == -1){
    res.send("Author not found")
  }

  authors.splice(index, 1)
  res.send({message: "Author deleted !"})
})