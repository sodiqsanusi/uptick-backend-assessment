const { NODE_ENV } = require("../config/env");

let errorMiddleware = (err, req, res, next) => {

  let errStatus = res.statusCode || 500;
  let errMessage = err.message || "An error occured while making this request";

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: NODE_ENV === "production" ? null : err.stack,
  })
};

module.exports = errorMiddleware