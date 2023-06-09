const express = require('express')

const cors = require('cors')
const connectDB = require('./db/connect')
require('dotenv').config()
const mainRouter = require('./routes/dashboard')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errors-handler')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/', mainRouter)
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
