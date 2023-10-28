const CustomError = require('../utils/customError');
const {createPostSchema} = require('./schemas');
const {updatePostSchema} = require('./schemas');

const createPostMiddleware = (req, res, next) => {
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

const updatePostMiddleware = async (req, res, next) => {
  try {
    const postData = req.body;
    const {error} = updatePostSchema.validate(postData);
    if (error) {
      const {message} = error.details[0];
      throw new CustomError(400, 'Some required fields are missing');
    }

    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createPostMiddleware,
  updatePostMiddleware,
};