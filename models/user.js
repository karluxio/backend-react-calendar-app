const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    maxLength: 30
  }
})

// userSchema.pre('save', async function (next) {
//   try {

//   } catch (error) {

//   }
// })

const User = model('User', userSchema)

module.exports = User