const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // mongoDB adds its own uniquie id to each record
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    password: String,
});

const User = mongoose.model("/Pokemon",
userSchema);

module.exports = User;