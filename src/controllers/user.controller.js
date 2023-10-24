const { userService } = require('../services');

const create = async (req, res, next) => {
  try {
    const userData = req.body;
    const { status, data } = await userService.create(userData);

    return res.status(200).json(data);
  } catch (e) {
    next(e);
  }
}