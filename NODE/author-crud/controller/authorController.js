const Author = require("../model/Author")

const controller = {}

controller.getAll = (req, res) => {
  Author.findAll()
  .then( (authors) => {
    return res.send(authors)
  }).catch((error) => {
    res.status(400).send({message : "Failed fetching authors", error})
  })
}

controller.getById = (req, res) => {
  const id = req.params.id
  
  Author.findByPk(id)
  .then( (author) => {
    if (!author) {
      return res.send({message : "Author not found"})
    }
    return res.status(200).send(author)
  }).catch((error) => {
    res.status(400).send({message : "Failed fetching author", error})
  })
}

controller.create = (req, res) => {
  const {firstName, lastName, birthDate, nbPublication} = req.body
  const author = { firstName, lastName, birthDate, nbPublication }

  Author.create(author)
  .then( (author) => {
    return res.status(201).send({ author, message : "Author created !" })
  }).catch((error) => {
    res.status(400).send({message : "Failed creating author", error})
  })

}

controller.update = (req, res) => {
  const id = req.params.id
  const {firstName, lastName, birthDate, nbPublication} = req.body
  const author = { firstName, lastName, birthDate, nbPublication }

  Author.update(author, { where : { id }})
  .then( (author) => {
    return res.status(200).send({ author, message : "Author updated !" })
  }).catch((error) => {
    res.status(400).send({message : "Failed updating author", error})
  })
}

controller.delete = (req, res) => {
  const id = req.params.id

  Author.destroy({ where : { id }})
  .then( (author) => {
    return res.status(200).send({ author, message : "Author deleted !" })
  }).catch((error) => {
    res.status(400).send({message : "Failed deleting author", error})
  })
}


module.exports = controller

