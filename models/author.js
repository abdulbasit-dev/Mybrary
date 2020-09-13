const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create scheama
const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
)

//create model
const Auhtor = mongoose.model('Author', authorSchema)

module.exports = Auhtor
