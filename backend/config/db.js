const keys = require('./keys');
const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(keys.databaseURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }); 

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;
