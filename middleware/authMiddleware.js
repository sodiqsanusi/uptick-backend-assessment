const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/env");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      //* Get the token from the request headers
      token = req.headers.authorization.split(" ")[1];

      //* Verify the token and decode the information it contains by using the secret that was used in signing it
      const decodedToken = jwt.verify(token, JWT_SECRET);

      //* Use the decoded id to get the user, then add the user details to the request information so it can be used later
      req.user = await User.findById(decodedToken.id).select("-password");

      //* Run the next middleware
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Request sent is not authorized for the client");
    }
  }


  if (!token) {
    res.status(401);
    throw new Error("Request is not authenticated! No Bearer token provided with request");
  }
})

module.exports = protect;