const mongoose = require('mongoose')
const infoSchema = new mongoose.Model({
  name: String,
  stageName: String,
  address: String,
  email: String,
  telephoneNumber: Number,
  skills: String,
  languages: String,
  biography: String
})

module.exports = mongoose.model('info', infoSchema)