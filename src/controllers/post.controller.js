const { postService } = require('../services');

const create = async (req, res, next) => {
  try {
    const postData = req.body;
    const userId = req.user.id;
    // console.log('postController create:', userId);
    const { status, data } = await postService.create(postData, next, userId);

    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { status, data } = await postService.getAll();

    console.log('postController getAll', data);

    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
};