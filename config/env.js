require("dotenv").config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
const DBURL = NODE_ENV == "test" ? process.env.TEST_DBURL : process.env.DB_URL;
const JWT_SECRET = process.env.JWT_SECRET;


let CONFIG = {
  PORT,
  NODE_ENV,
  DBURL,
  JWT_SECRET,
}

module.exports = CONFIG;