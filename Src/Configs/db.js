const mongoose = require("mongoose");

module.exports = () => {
return mongoose.connect("mongodb+srv://sanra:adminpass@cluster0.puvpv.mongodb.net/todoapp?retryWrites=true&w=majority");
};

// mongodb+srv://Alok0818:8308303270@cluster0.pmkry.mongodb.net/To-Do-Application?retryWrites=true&w=majority