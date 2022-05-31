//Dependencies
require('dotenv').config(); // Loads Env vars into process.env
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const pokemonController = require('./controllers/pokemon,')
const path = require('path');

//Express Set-Up
const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

// Middleware
app.use(morgan("tiny")); // logging
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Routes
app.use('/pokemon', pokemonController)
app.get('/', (req, res) => {
    res.send(" Server is a GOOO!");
})

//Server Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`))


//Non-database code
// const express = require('express');
// const app = express();
// const pokemon = require('./models/pokemon')


// app.get('/', (req, res) => {
//     res.send('Welcome to the Pokemon App');
// });

// //Need to change this route to Index??
// app.get('/pokemon', (req, res) => {
//     res.render(pokemon)
// });

// app.listen(3000, () => {
//     console.log('Servers are a go!');
// });