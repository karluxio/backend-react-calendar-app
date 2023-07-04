const { request, response } = require('express')
const Event = require('../models/event')

const getEvents = async (req = request, res = response) => {
  const { skip, limit } = req.query

  try {
    const events = await Event
      .find()
      .populate('user', 'name')
      .skip(Number(skip))
      .limit(Number(limit))

    res.json({
      ok: true,
      events
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error in getting events'
    })
  }
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

const updateEvent = async (req = request, res = response) => {
  const { id } = req.params
  const { uid } = req

  try {
    const event = await Event.findById(id)

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found'
      })
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'Not authorized'
      })
    }

    const eventToUpdate = {
      ...req.body,
      user: uid
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, eventToUpdate, { new: true })

    res.json({
      ok: true,
      updatedEvent
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error in updating event'
    })
  }
}

const deleteEvent = async (req = request, res = response) => {
  const { id } = req.params
  const { uid } = req

  try {
    const event = await Event.findById(id)

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found'
      })
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'Not authorized'
      })
    }

    await Event.findByIdAndDelete(id)

    res.json({
      ok: true,
      deletedEvent: event
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error in deleting event'
    })

  }
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}