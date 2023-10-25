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
    next(e);
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, data } = await userService.getById(Number(id));

    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  create,
  getAll,
  getById,
};