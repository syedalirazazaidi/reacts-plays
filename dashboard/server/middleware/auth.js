const jwt = require('jsonwebtoken')
const { UnauthenticatedError, CustomAPIError } = require('../errors')

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log(authHeader)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // throw new CustomAPIError('No token provided', 400)
    res.send('No token provided')
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { id, username } = decoded
    req.user = { id, username }
    console.log(username, id)
    next()
  } catch (error) {
    res.send('Not authorized to access this route')
    // throw new UnauthenticatedError('Not authorized to access this route')
  }
}

module.exports = authenticationMiddleware
