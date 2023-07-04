const { request, response } = require('express')
const Event = require('../models/event')

const getEvents = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'GET /api/events'
  })
}

const createEvent = async (req = request, res = response) => {
  const event = new Event(req.body)

  event.user = req.uid

  try {
    const savedEvent = await event.save()

    res.json({
      ok: true,
      savedEvent
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error in creating event'
    })
  }
}

const updateEvent = (req = request, res = response) => {
  const { id } = req.params

  res.json({
    ok: true,
    msg: `PUT /api/events/${id}`
  })
}

const deleteEvent = (req = request, res = response) => {
  const { id } = req.params

  res.json({
    ok: true,
    msg: `DELETE /api/events/${id}`
  })
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}