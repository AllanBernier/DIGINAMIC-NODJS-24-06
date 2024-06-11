const controller = require("../controller/authorController")
const express = require("express")
const { authorForm } = require("../middleware/form")
const router = express.Router()


router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/",authorForm, controller.create)
router.put("/:id",authorForm, controller.update)
router.delete("/:id", controller.delete)

module.exports = router

