const CustomError = require('../utils/customError');
const { createCategorySchema } = require('./schemas');

const categoryMiddleware = (req, res, next) => {
  try {
    const categoryData = req.body;
    const { error } = createCategorySchema.validate(categoryData);
    if (error) {
      const { message, type } = error.details[0];
      if (type === 'any.required') throw new CustomError(400, message);
    }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = categoryMiddleware;