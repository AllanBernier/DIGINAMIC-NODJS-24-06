



/**
 * create -> page
 * store
 * edit -> page
 * update
 * destroy
 * index
 * show
 */

const express = require("express")
const router = express.Router()
const controller = require("../controller/productController")

router.get("/", controller.index)
router.get("/create", controller.create)
router.get("/edit/:id", controller.edit)
router.get("/:id", controller.show)
router.post("/", controller.store)
router.post("/edit/:id", controller.update)
router.post("/delete/:id", controller.destroy)


module.exports = router