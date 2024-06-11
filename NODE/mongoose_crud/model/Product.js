const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  name : String,
  price : Number,
  quantity : Number,
  description : String
})

module.exports = mongoose.model("product", productSchema)