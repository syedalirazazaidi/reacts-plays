const User = require('../models/User')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }

  const token = authorization.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request is not authorized' })
  }
}

module.exports = auth
