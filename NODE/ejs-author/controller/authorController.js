const moment = require("moment/moment")
const Author = require("../model/Author")

const controller = {}

controller.index = (req, res) => {
  Author.findAll().then( (authors) => {
    res.render("index", {authors})
  })
}

controller.create = (req, res) => {
  res.render("create")
}

controller.edit = (req, res) => {
  Author.findByPk(req.params.id).then( (author) => {

    if (author.birthDate !== undefined){
      console.log("Hello")
      author.formated_birthDate = moment(author.birthDate).format('YYYY-MM-DD')
    }

    res.render("edit", {author})
  })
}

controller.store = (req, res) => {
  const {firstName, lastName, birthDate, nbPublication} = req.body
  const author = { firstName, lastName, birthDate, nbPublication }

  Author.create(author)
  .then( (author) => {
    return res.redirect("/author")
  })
}

controller.update = (req, res) => {
  const id = req.params.id
  const {firstName, lastName, birthDate, nbPublication} = req.body
  const author = { firstName, lastName, birthDate, nbPublication }

  Author.update(author, { where : { id }})
  .then( (author) => {
    return res.redirect("/author")
  })
}

controller.delete = (req, res) => {
  const id = req.params.id

  Author.destroy({ where : { id }})
  .then( (author) => {
    return res.redirect("/author")
  })
}


module.exports = controller

