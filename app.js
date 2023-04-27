const CONFIG = require("./config/env");
const express = require("express");
const connectDB = require("./config/db");

connectDB()
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on port ${CONFIG.PORT}`)
})