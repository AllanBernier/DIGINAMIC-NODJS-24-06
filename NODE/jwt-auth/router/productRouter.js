const express = require("express")
const router = express.Router()
const {ensureAuthorized} = require("../middleware/auth")

const auth = (req, res) => {
  res.send("it works !")
}
const guest = (req, res) => {
  res.send("it works as guest!")
}


router.get("/auth/test",ensureAuthorized, auth )
router.get("/guest/test", guest)







module.exports = router