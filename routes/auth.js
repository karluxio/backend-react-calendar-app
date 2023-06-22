/**
 * User routes | Auth
 * Host + /api/auth
 */

const { Router } = require('express')
const { loginController, renewTokenController, registerController } = require('../controllers/auth')

const router = Router()

router.post('/new', registerController)

router.post('/', loginController)

router.get('/renew', renewTokenController)

module.exports = router