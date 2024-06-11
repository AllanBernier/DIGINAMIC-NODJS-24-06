const form = require("express-form")
const filter = form.filter
const validate = form.validate

const authorForm = form(
  filter("firstName").trim(),
  filter("lastName").trim(),
  filter("birthDate").trim(),
  filter("nbPublication").trim().toInt(),

  validate("firstName").required(),
  validate("lastName").required(),
  validate("birthDate").required().isDate(),
  validate("nbPublication").required().isInt(),
)

module.exports = {authorForm}