const User = require('../models/User')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    // throw new UnauthenticatedError('Authentication invalid')
    res.send('Authentication invalid')
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // attach the user to the job routes
    console.log(payload, 'LOAD')
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    res.send('Authentication invalid')
    // throw new UnauthenticatedError('Authentication invalid')
  }
}

module.exports = auth
