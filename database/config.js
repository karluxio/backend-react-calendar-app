const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN)

    console.log('mongoDB connected');

  } catch (error) {
    console.log(error);
    throw new Error('error at connecting to db')
  }
}

module.exports = {
  dbConnection
}