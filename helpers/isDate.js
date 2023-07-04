const { isValid, fromUnixTime } = require('date-fns')

// { req, location, path } me los pasa class-validator
const isDate = (value, { req, location, path }) => {
  if (!value) {
    return false
  }

  return isValid(fromUnixTime(value))
}

module.exports = {
  isDate
}