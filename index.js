const express = require("express");

const app = express();
const bodyParser = require("body-parser");


const pokemonRouter = require("./routes/pokemon");
const Pokemon = require("./models/pokemon.js");

app.set("views", "./views");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// create new session

app.use(session({
    secret: "pokemon",
    cookie:{"myCookie": "123"},
}))

app.use(function (req, res, next){
    if(res.locals.user){
        console.log("User is logged in")
    }else{
        console.log("User is logged out")
    }
    next();
})

app.use("/", pokemonRouter);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
});

require("./Config/database.js");