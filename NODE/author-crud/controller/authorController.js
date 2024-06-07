const controller = {}
let authors = []
let max_id = 0


controller.getAll = (req, res) => {
  res.send(authors)
}

controller.getById = (req, res) => {
  const id = req.params.id
  const author = authors.find( (author) => author.id == id )
  res.json( author === undefined ? {message : "Author not found"} : author )
}

controller.create = (req, res) => {
  const {firstname, lastname, birth_date, nb_publication} = req.body
  let current_id = max_id++
  const author = { firstname, lastname, birth_date, nb_publication, id : current_id }
  authors.push(author)

  res.send(author)
}

controller.update = (req, res) => {
  const id = req.params.id
  let index = authors.findIndex( (author) => author.id == id )
  const {firstname, lastname, birth_date, nb_publication} = req.body

  if (index === -1) {
    return res.send("Author not found")
  }
  authors[index] = {...authors[index], firstname, lastname, birth_date, nb_publication}
  res.send({ author : authors[index] , message : "Author updated !"})
}

controller.delete = (req, res) => {
  const id = req.params.id
  const index = authors.findIndex( (author) => author.id == id )
  if (index == -1){
    res.send("Author not found")
  }
  authors.splice(index, 1)
  res.send({message: "Author deleted !"})
}


module.exports = controller

