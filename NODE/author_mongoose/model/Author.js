const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  firstName : String,
  lastName : String,
  nbPublication : Number,
  birthDate : Date
});

module.exports = mongoose.model('Author', authorSchema);