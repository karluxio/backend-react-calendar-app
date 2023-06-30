/**
 * User routes | Auth
 * Host + /api/auth
 */

const { Router } = require('express')
const { check } = require('express-validator')

const { loginController, renewTokenController, registerController } = require('../controllers/auth')
const fieldsValidator = require('../middlewares/fieldsValidator')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()

router.post(
  '/new',
  [ // Middlewares
    check('name', 'name is required').not().isEmpty(),
    check('email', 'valid email is required').isEmail(),
    check('password', 'password length must be at least 6 characters long').isLength({ min: 6 }),
    fieldsValidator
  ],
  registerController
)

router.post(
  '/',
  [
    check('email', 'valid email is required').isEmail(),
    check('password', 'password length must be at least 6 characters long').isLength({ min: 6 }),
    fieldsValidator
  ],
  loginController
)

router.get('/renew', validateJWT, renewTokenController)

module.exports = router