const { response } = require('express')

const registerController = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'register'
  })
}

const loginController = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'login'
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