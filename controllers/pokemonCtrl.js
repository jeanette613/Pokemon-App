const express = require('express');
const Pokemon = require("../models.pokemon");

//create router to pass to routes
const router = express.Router();


router.get('/seed', (req, res) => {
    const startPokemon = [

        { name: "bulbasaur", image: "http://img.pokemondb.net/artwork/bulbasaur" },
        { name: "ivysaur", image: "http://img.pokemondb.net/artwork/ivysaur" },
        { name: "venusaur", image: "http://img.pokemondb.net/artwork/venusaur" },
        { name: "charmander", image: "http://img.pokemondb.net/artwork/charmander" },
        { name: "charizard", image: "http://img.pokemondb.net/artwork/charizard" },
        { name: "squirtle", image: "http://img.pokemondb.net/artwork/squirtle" },
        { name: "wartortle", image: "http://img.pokemondb.net/artwork/wartortle" }
    ]

    //Start seed
    Pokemon.deleteMany({}).then((data) => {
        // Seed Starter Fruits
        Pokemon.create(startPokemon).then((data) => {
            // send created fruits as response to confirm creation
            res.json(data);
        });
    }).catch((err) => {
        res.status(400).send(err)
    })
});


// Index

router.get('/', (req, res) => {
    Pokemon.find({})
        .then((pokemon) => {
            res.render("pokemon/Index", { pokemon })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// delete
router.delete('/pokemon/:id', (req, res) => {
    const { id } = req.params;
    Pokemon.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/pokemon')
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

// Create
router.post('/', (req, res) => {
    Pokemon.create(req.body)
        .then((createdPokemon) => {
            res.redirect(`/fruits/${createdPokemon._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Show

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Pokemon.findById(id)
        .then((pokemon) => {
            res.render('pokemon/Show', { pokemon })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

module.exports = router;