const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App');
});

//Need to change this route to Index??
app.get('/', (req, res) => {
    res.send(pokemon)
});



app.listen(3000, () => {
    console.log('Servers are a go!');
});