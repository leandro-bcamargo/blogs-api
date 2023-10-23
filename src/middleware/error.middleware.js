const CustomError = require("../utils/customError");

const errorMiddleware = (error, req, res, next) => {
  if (error instanceof CustomError) {
    console.log('errorMiddleware status:', error.status);
    const { status, message } = error;
    return res.status(status).json({ message })
  }
  return res.status(500).json({ message: error.message });
}

module.exports = errorMiddleware;