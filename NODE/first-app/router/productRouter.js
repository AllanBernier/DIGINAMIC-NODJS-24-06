const controller = require("../controller/productController")

const express = require('express')
const router = express.Router()
const { ensureHaveId, ensureHaveProductBody} = require("../validators/productValidators")

router.get("/product", controller.getAll)
router.get("/product/:id",ensureHaveId, controller.getById)
router.post("/product",ensureHaveProductBody, controller.create)
router.put("/product/:id",[ensureHaveId,ensureHaveProductBody],  controller.update)
router.delete("/product/:id",ensureHaveId, controller.delete)


module.exports = router