const { response, request } = require('express')
const bcrypt = require('bcryptjs')

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

  const salt = bcrypt.genSaltSync()
  user.password = bcrypt.hashSync(password, salt)

  try {

    await user.save()
    res.status(201).json({
      ok: true,
      uid: user._id,
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

const loginController = async (req, res = response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'user not found'
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password)
    console.log({ validPassword });
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'incorrect credentials'
      })
    }

    return res.json({
      ok: true,
      msg: 'TODO: add a token'
    })

  } catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      msg: 'internal server error'
    })
  }


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