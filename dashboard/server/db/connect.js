const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
}

module.exports = connectDB
