const controller = require("../controller/productController")

const express = require('express')
const router = express.Router()

router.get("/product", controller.getAll)
router.get("/product/:id", controller.getById)
router.post("/product", controller.create)
router.put("/product/:id", controller.update)
router.delete("/product/:id", controller.delete)


module.exports = router