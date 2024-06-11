
const controller = {}
const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

controller.login = async (req, res) => {

  if ( !req.form.isValid){
    return res.status(400).send({ message : "Invalid body"})
  }


  const {email, password} = req.form

  User.findOne({where : {email}})
  .then( async (user) => {
    if (!user || !bcrypt.compareSync(password, user.password)){
      return res.status(401).json({ message : "Invalid credentials"})
    }
    return res.status(200).json({ id: user.id, token : user.token})
  })

}

controller.register = async (req, res) => {

  if ( !req.form.isValid){
    return res.status(400).send({ message : "Invalid body"})
  }

  const {email, password} = req.form

  User.findOne({where : {email}})
  .then( async (user) => {
    if (user) {
      return res.status(409).json({ message : "User already exists !"})
    }

    const hashed = await bcrypt.hash(password, 10 )

    User.create( { email : email, password : hashed} )
    .then( async (user) => {
      user.token = jwt.sign(user.id, process.env.JWT_SECRET)
      await user.save()
      return res.json({ id : user.id, token: user.token})
    })
  })
}

module.exports = controller