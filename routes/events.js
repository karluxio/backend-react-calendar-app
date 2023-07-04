/**
 * Events routes | Events
 * Host + /api/events
 */

const { Router } = require('express')

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const fieldsValidator = require('../middlewares/fieldsValidator')
const { validateJWT } = require('../middlewares/validate-jwt')
const { check } = require('express-validator')
const { isDate } = require('../helpers/isDate')

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
  [
    check('title', 'title is required').not().isEmpty(),
    check('start', 'start date is required').custom(isDate),
    check('end', 'end date is required').custom(isDate),
    fieldsValidator
  ],
  createEvent
)

router.put(
  '/:id',
  [
    check('title', 'title is required').not().isEmpty(),
    check('start', 'start date is required').custom(isDate),
    check('end', 'end date is required').custom(isDate),
    check('id', 'event id is required').not().isEmpty().isMongoId(),
    fieldsValidator
  ],
  updateEvent
)

router.delete(
  '/:id',
  [
    fieldsValidator
  ],
  deleteEvent
)

module.exports = router