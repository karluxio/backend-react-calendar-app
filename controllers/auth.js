const { response, request } = require('express')
const User = require('../models/user')

const registerController = async (req = request, res = response) => {
  const { name, email, password } = req.body

  let user = await User.findOne({ email })



  if (user) {
    return res.status(400).json({
      ok: false,
      msg: 'email in use'
    })
  }

  user = new User({ name, email, password })

  try {

    await user.save()
    res.status(201).json({
      ok: true,
      uid: user.uid,
      name: user.name
    })

  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'internal server error'
    })
  }

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