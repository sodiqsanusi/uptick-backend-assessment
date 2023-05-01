const express = require("express");
const { registerUser, logUserIn, getUserDetails } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser)

router.post("/login", logUserIn)

router.get("/me", protect, getUserDetails)


module.exports = router;