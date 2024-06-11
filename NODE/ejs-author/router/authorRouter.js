const controller = require("../controller/authorController")
const express = require("express")

const router = express.Router()




router.get("/", controller.index)
router.get("/create", controller.create)
router.get("/edit/:id", controller.edit)


router.post("/", controller.store)
router.post("/edit/:id", controller.update)
router.post("/delete/:id", controller.delete)

module.exports = router