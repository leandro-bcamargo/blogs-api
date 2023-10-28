const CustomError = require('../utils/customError');
const { createUserSchema } = require('./schemas');

const checkType = (type, message, next) => {
  try {
    if (type === 'string.min') throw new CustomError(400, message);
    if (type === 'string.email') throw new CustomError(400, message);
  } catch (e) {
    next(e);
  }
};

const userMiddleware = (req, res, next) => {
  const userData = req.body;
  const { error } = createUserSchema.validate(userData);
  if (error) {
    const { message, type } = error.details[0];
    checkType(type, message, next);
    next();
  }
};

module.exports = userMiddleware;