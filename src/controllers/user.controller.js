const { userService } = require('../services');

const create = async (req, res, next) => {
  try {
    const token = req.header('authorization');
    const userData = req.body;
    const { status } = await userService.create(userData);

    return res.status(status).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};