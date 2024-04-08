const express = require("express");

const app = express();
const bodyParser = require("body-parser");


const pokemonRouter = require("./routes/pokemon");

app.set("views", "./views");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", pokemonRouter);

app.listen(3500, () => {
    console.log("Express server listening on port 3500...");
});

require("./Config/database.js");