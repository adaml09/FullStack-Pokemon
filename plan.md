# FullStack Pokemon

## User stories
USer stories are an informal, general explanation
of a software feature written from the perspective of 
the end user.

1. As a USer, I want to be able to search for a pokemon
    1. EJS View - homepage (search form)
    2. Router - GET /
    3. Router - POST /search
    4. Controller - searchPokemon(req, res)
    5. EJS View - displayPokemon
2. As a  user, I want to be able to save a pokemon to my 
saved collection (database).
    1. Create a configuration file to establish a connection to our database
    2. Define a pokemon model/schema to structure the pokemon data, that will be saved to our DB
    3. Create a button in display pokemon.ejs. That says "add pokemon to my collection"
    4. Router-POST/save pokemon
    5. Controller - savePokemonToCollection(re, res)
3. As a user, I want to be able to read the pokemons from my saved. 
collection.
    1. Button to navigate to MySaveCollection.ejs
    2. Router - GET/savedCollection
    3. Controller - getMyCollection (rew, res)
    4. EJS view - MySavedCollection.ejs
4. As a user, I want to be able to delete a pokemon from my 
saved collection.
    1. Button to delete pokemon
    2. Router - POST (Delete) /deletePokemon/:id
    3. Controller - deletePokemonByid(req, res)
    4. Redirect back to /savedCollection
5. As a user, I want to be able to update a pokemon in my saved collection.
6.  As a user I want to be able to create my own pokemons in
my saved collection.
7. As a user, I want to be able to sign up for a new account.
8. As a user, I want to be able to login to an existing account.

## Requirements
1. Use NODE and express.js as a backend framework.
2. Integrate MongoDB to create the database.
3. Add User authentication
4. Use a view engine EJS templates as front end application


## Simple WireFrames

<img src="./images/Pokemon Wire Frame.png">

## Routes & Controllers

