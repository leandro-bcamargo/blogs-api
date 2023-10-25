const { categoryService } = require('../services');

const create = async (req, res, next) => {
  try {
    const categoryData = req.body;
    const { status, data } = await categoryService.create(categoryData);

    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { status, data } = await categoryService.getAll();

    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
};