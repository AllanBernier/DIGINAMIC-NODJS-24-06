const express = require("express")
const router = express.Router()
const controller = require("../controller/authController")

const { LoginForm } = require("../middleware/form")


router.post("/register", LoginForm,  controller.register)
router.post("/login", LoginForm,  controller.login)

module.exports = router