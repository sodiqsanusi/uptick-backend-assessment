const CONFIG = require("./config/env");
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

connectDB()
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api/user", require("./routes/userRoutes"));


app.use(errorHandler);

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on port ${CONFIG.PORT}`)
})