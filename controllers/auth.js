const registerController = (req, res) => {
  res.json({
    ok: true,
    msg: 'register'
  })
}

const loginController = (req, res) => {
  res.json({
    ok: true,
    msg: 'login'
  })
}

const renewController = (req, res) => {
  res.json({
    ok: true,
    msg: 'renew'
  })
}

module.exports = {
  registerController,
  loginController,
  renewController
}