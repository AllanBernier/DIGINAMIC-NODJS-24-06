const express = require("express")
const router = express.Router()
const controller = require("../controller/authorController")

router.get("/", controller.getAllAuthors)
router.post("/", controller.createAuthor)
router.put("/:id", controller.updateAuthor)
router.delete("/:id", controller.deleteAuthor)

module.exports = router