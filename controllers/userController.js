const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc    Create a new user using the data provided on registration
// @route   POST /api/user/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  //* Confirm all required data for registration of user is in the request
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("You didn't add in all necessary data required to create a user account");
  }
  //* Confirm if user already exists in the database
  const doesUserExistAlready = await User.findOne({ email });
  if (doesUserExistAlready) {
    res.status(400);
    throw new Error("A user already exists with the inputted email");
  }

  let hash = await bcrypt.hash(password, 10);
  let newUser = await User.create({
    name,
    email,
    password: hash,
  })
  res.status(200).json(newUser);
})

// @desc    Login into an existing user's account
// @route   POST /api/user/login
// @access  Public
const logUserIn = asyncHandler(async (req, res) => {
  let message = "Request to log a user in";
  res.status(200).json({ message });
})

// @desc    Get the details of a user
// @route   GET /api/user/me
// @access  Private
const getUserDetails = asyncHandler(async (req, res) => {
  let message = "Request to get a user's details";
  res.status(200).json({ message });
})

module.exports = {
  registerUser,
  logUserIn,
  getUserDetails,
}