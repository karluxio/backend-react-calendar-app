const { response, request } = require('express')

const registerController = (req = request, res = response) => {
  const { name, email, password } = req.body

  res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password
  })
}

const loginController = (req, res = response) => {
  const { email, password } = req.body

  res.json({
    ok: true,
    msg: 'login',
    email,
    password
  })
}

const renewTokenController = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = {
  registerController,
  loginController,
  renewTokenController
}