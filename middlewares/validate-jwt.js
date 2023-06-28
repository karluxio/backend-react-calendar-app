const { request, response } = require('express')
const jwt = require('jsonwebtoken');

const validateJWT = (req = request, res = response, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'there is no token in the header'
    })
  }

  try {

    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = payload.uid;
    req.name = payload.name;

    next()

  } catch (error) {
    res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    })
    return false;
  }
}

module.exports = {
  validateJWT
}