/**
 * User routes | Auth
 * Host + /api/auth
 */

const { Router } = require('express')
const { loginController, renewController, registerController } = require('../controllers/auth')

const router = Router()

router.post('/new', registerController)

router.post('/', loginController)

router.get('/renew', renewController)

module.exports = router