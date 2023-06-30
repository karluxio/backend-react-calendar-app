const { request, response } = require('express')

const getEvents = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'GET /api/events'
  })
}

const createEvent = (req = request, res = response) => {
  const { id } = req.params

  res.json({
    ok: true,
    msg: `POST /api/events/${id}`
  })
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