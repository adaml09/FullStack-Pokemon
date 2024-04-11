const express = require("express");
const pokemonController = require("../controllers/pokemon")

const router = express.Router();

// app.get("/hello", (req, res) => res.send("hello there"));
router.get("/hello-pokemon", pokemonController.greetPokemon);
router.get("/", pokemonController.displayHomePage);
router.post("/search", pokemonController.searchPokemon);

router.post("/savePokemon", pokemonController.
savePokemonToCollection);

router.get("/savedCollection", pokemonController.getMyCollection);

router.post("/deletePokemon/:id", pokemonController.deletePokemonById);

router.get("/signUp", pokemonController.displaySignupPage);

router.post("/signUp", pokemonController.signUpUser);

router.get("/login", pokemonController.loginUser)

module.exports = router;


