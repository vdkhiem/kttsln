// Handle database connection
const mongoose = require('mongoose');
const config = require('config');

// Retrieve config item in default.json
const dbURI = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.log('Failed to connect database', error);
    process.exit(1); //escape the process with failure
  }
};

module.exports = connectDB;
