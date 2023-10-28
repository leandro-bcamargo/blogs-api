const errorMiddleware = require('./error.middleware');
const categoryMiddleware = require('./category.middleware');
const loginMiddleware = require('./login.middleware');
const { createPostMiddleware, updatePostMiddleware } = require('./post.middleware');
const userMiddleware = require('./user.middleware');

module.exports = {
  errorMiddleware,
  categoryMiddleware,
  loginMiddleware,
  createPostMiddleware,
  updatePostMiddleware,
  userMiddleware,
};