const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add in your full name"],
  },
  email: {
    type: String,
    required: [true, "Please add your email address"],
  },
  password: {
    type: String,
    required: [true, "You have to create a password for your account"],
  },
})

module.exports = mongoose.model("User", userSchema);