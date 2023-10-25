const CustomError = require('../utils/customError');

const errorMiddleware = (error, req, res, _next) => {
  if (error instanceof CustomError) {
    const { status, message } = error;
    // console.log('errorMiddleware status, message:', error.status, error.message);
    return res.status(status).json({ message });
  }
  // console.log('errorMiddleware status, message:', error.status, error.message);
  return res.status(500).json({ message: error.message });
};

module.exports = errorMiddleware;