const { userService } = require('../services');

const create = async (req, res, next) => {
  try {
    const userData = req.body;
    const { status, data } = await userService.create(userData);

    return res.status(status).json({ token: data });
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { status, data } = await userService.getAll();

    return res.status(status).json(data);
  } catch (e) {

  }
}

module.exports = {
  create,
  getAll,
};