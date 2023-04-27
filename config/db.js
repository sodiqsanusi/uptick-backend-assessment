const mongoose = require("mongoose");
const { DBURL } = require("./env");

let connectDB = async () => {
  try {
    let conn = await mongoose.connect(DBURL);

    console.log(`Database connection to ${conn.connection.host} was successful`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
}

module.exports = connectDB