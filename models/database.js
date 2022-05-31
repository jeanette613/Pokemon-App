require("dotenv").config();
const mongoose = require('mongoose');

//Connection

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish 
mongoose.connect(DATABASE_URL, CONFIG);

//Console status logs
mongoose.connection
    .on('open', () => console.log('Database is a go!'))
    .on('close', () => console.log('Mongoose Disconnected'))
    .on('error', (error) => console.log(error))

module.exports = mongoose;