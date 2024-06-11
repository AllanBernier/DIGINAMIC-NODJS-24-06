
const Author = require('../model/Author')
const controller = {}

controller.getAllAuthors = (req, res) => {
  Author.find()
  .then(authors => res.json(authors))
  .catch(err => res.status(400).json('Error: ' + err))
}

controller.createAuthor = (req, res) => {
  const { firstName, lastName, nbPublication, birthDate } = req.body

  Author.create({ firstName, lastName, nbPublication, birthDate })
  .then(() => res.status(201).json('Author added!'))
  .catch(err => res.status(400).json('Error: ' + err))
}

controller.updateAuthor = (req, res) => {
  const { firstName, lastName, nbPublication, birthDate } = req.body
  const { id } = req.params

  Author.updateOne({ _id: id }, { firstName, lastName, nbPublication, birthDate })
  .then(() => res.json('Author updated!'))
  .catch(err => res.status(400).json('Error: ' + err))
}

controller.deleteAuthor = (req, res) => {
  const { id } = req.params

  Author.deleteOne({ _id: id})
  .then(() => res.json('Author deleted!'))
  .catch(err => res.status(400).json('Error: ' + err))
}

module.exports = controller