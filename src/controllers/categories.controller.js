const { categoriesService } = require('../services');

const create = async (req, res, next) => {
  try {
    const categoryData = req.body;
    const { status, data } = await categoriesService.create(categoryData);

    return res.status(status).json(data);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};