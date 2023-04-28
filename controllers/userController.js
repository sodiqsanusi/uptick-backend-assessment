const asyncHandler = require("express-async-handler");

// @desc    Create a new user using the data provided on registration
// @route   POST /api/user/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  let message = "Request to register a user";
  res.status(200).json({ message });
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