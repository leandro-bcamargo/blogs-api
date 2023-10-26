const CustomError = require('../utils/customError');
const createPostSchema = require('./createPostSchema');

const postMiddleware = (req, res, next) => {
  try {
    const postData = req.body;
    const { error } = createPostSchema.validate(postData);
    if (error) {
      const { message } = error.details[0];
      throw new CustomError(400, message);
    }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = postMiddleware;