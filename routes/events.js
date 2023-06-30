/**
 * Events routes | Events
 * Host + /api/events
 */

const { Router } = require('express')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const fieldsValidator = require('../middlewares/fieldsValidator')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

// public
router.get(
  '/',
  getEvents
)

// private - only authenticated
router.use(validateJWT)

router.post(
  '/:id',
  createEvent
)

router.put(
  '/:id',
  updateEvent
)

router.delete(
  '/:id',
  deleteEvent
)

module.exports = router