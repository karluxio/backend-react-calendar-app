const { Schema, model } = require('mongoose')

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
    minLength: 2
  },
  notes: {
    type: String,
    trim: true,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Event = model('Event', EventSchema)

module.exports = Event