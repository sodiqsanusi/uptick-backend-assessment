const express = require("express");
const { registerUser, logUserIn, getUserDetails } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser)

router.post("/login", logUserIn)

router.get("/me", getUserDetails)


module.exports = router;