const { request } = require("express");
const Pokemon = require("../models/pokemon");
const User = require("../models/user");
const bcrypt = require('bcrypt');

function greetPokemon (req, res){
    // logic
    // response send hello pokemon

    //res.send("Hello Pokemon!");
    const pokemon = {
        name: "Pikachu",
        type: "Electric",
        skills: "Cute cheeks"
    }
    res.render("greetPokemon.ejs", {pokemonDetails: pokemon});
}

function displayHomePage(req, res){
    // display the hompage
    res.render("homePage.ejs");
}

async function searchPokemon(req, res){
    // need the data from the html form. the data is stored within the request body when we send a post request
    const formData = req.body;
    console.log("formData: ");
    console.log(formData);
    const { pokemonName } = formData;
    const pokemonAPIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const pokemonDetails = await pokemonAPIResponse.json();
    console.log(pokemonDetails);
    res.render("displayPokemon.ejs", { pokemon: pokemonDetails});
}

async function savePokemonToCollection(req, res){
    const formData = req.body

    //create our new database pokemon
    try{
        await Pokemon.create({
            pokemonId: formData.pokemonId,
            name: formData.pokemonName,
            height: formData.pokemonHeight,
            photo: formData.pokemonPhoto,
        })
    }catch (err){
        console.log(`ERROR in creating pokemon ${formData.pokemonName}`)
    }
    res.redirect("/");
}

async function getMyCollection(req, res){
    try{
        const allMyCollection = await Pokemon.find({});
        res.render("mySavedCollection.ejs", {allMyCollection});
    }catch (err){
        console.err("Error with getting saved colection");
        res.status(500).send("Error in getting saved collection");
    }
}

async function deletePokemonById(req, res){
    try{
        const pokeId = req.params.id;
        await Pokemon.deleteOne({ _id: pokeId});
        res.redirect("/savedCollection")
    }catch (err) {
        console.err("Error with getting saved colection");
        res.status(500).send("Error in getting saved collection");
    }
}



function displaySignupPage(req, res){
    res.render("signUp.ejs")
}


async function signUpUser(req, res){
    const fromData = req.body;
    try{
        bcrypt.hash(formData.password, 10, function (err,hash){
            let newUser = new User(
                {
                    firstName: formData.firstName,
                    lastName: forData.lastName,
                    userName: forData.userName,
                    email: forData.email,
                    password: hash,
                }
            );
            newUser.save().then(() => console.log("User saved !"));
            res.render("LoginPage.ejs")
        });
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }

}

async function loginUser(req, res){
    const formData = req.body;
    try{
        let user = user.findOne({userName: formData.userName})

        bcrypt.compare(formData.password, user.password,
        function(err, result){
            if(result == true){
                res.locals.user = user;
                req.session.user = user;
            }else{
                res.send(err);
            }
        });
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

function displayEditPokemon(req, res){
    res.render("editPokemon.ejs")
}

async function editPokemon(req, res){
    const formData = req.body;

    try{
        await Pokemon.updateOne({_id: formData.pokemonId},{
            pokemonId: formData.pokemonId,
            name: formData.pokemonName,
            height: formData.pokemonHeight,
        })
    }catch (err){
        console.log(`ERROR in editing pokemon ${formData.pokemonName}`)
    }
    res.redirect("/displayPokemon.ejs");
    
}

module.exports = {
    greetPokemon,
    displayHomePage,
    searchPokemon,
    savePokemonToCollection,
    getMyCollection,
    deletePokemonById,
    displaySignupPage,
    signUpUser,
    loginUser,
    displayEditPokemon,
    editPokemon,
}