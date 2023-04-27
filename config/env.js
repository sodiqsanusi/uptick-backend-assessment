require("dotenv").config();
const colors = require("colors");

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const DBURL = NODE_ENV == "test" ? process.env.TEST_DBURL : process.env.DB_URL;



let CONFIG = {
  PORT,
  NODE_ENV,
  DBURL,
}

module.exports = CONFIG;