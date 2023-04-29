const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { JWT_SECRET } = require("../config/env");

//* Generate a JWT (Json Web Token)
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  })
}

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

  if (newUser) {
    let responseData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(newUser.id),
    }

    res.status(201).json(responseData)
  } else {
    res.status(400);
    throw new Error("Creation of a new user with the inputted details was unsuccessful");
  }
})

// @desc    Login into an existing user's account
// @route   POST /api/user/login
// @access  Public
const logUserIn = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  //* Confirm all required data for logging in was provided
  if (!email || !password) {
    res.status(400);
    throw new Error("You didn't add in all necessary data required to log into your account")
  }

  //* Check if the user exists in the database
  const doesUserExist = await User.findOne({ email });
  if (doesUserExist && (await bcrypt.compare(password, doesUserExist.password))) {
    let responseData = {
      id: doesUserExist.id,
      name: doesUserExist.name,
      email: doesUserExist.email,
      token: generateToken(doesUserExist.id),
    }

    res.status(200).json(responseData)
  } else {
    res.status(400);
    throw new Error("The login details provided doesn't match any existing user");
  }
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