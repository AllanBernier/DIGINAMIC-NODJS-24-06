// npm i express-form

const form = require("express-form")
const filter = form.filter
const validate = form.validate



const LoginForm = form(
  filter("email").trim(),
  validate("email").required().isEmail("Email malformed"),

  filter("password").trim(),
  validate("password").required()
)

module.exports = {LoginForm, }