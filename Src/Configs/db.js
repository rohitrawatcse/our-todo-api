const mongoose = require("mongoose");

module.exports = () => {
return mongoose.connect(process.env.PORT);
};

// mongodb+srv://Alok0818:8308303270@cluster0.pmkry.mongodb.net/To-Do-Application?retryWrites=true&w=majority
