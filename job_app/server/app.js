const express = require('express')

const cors = require('cors')
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/auth')
require('dotenv').config()
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errors-handler')

const app = express()
app.use(express.json())
app.use(cors())

// routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT | 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`),
    )
  } catch (error) {
    console.log(error)
  }
}

start()
