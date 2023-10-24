const { User } = require('../models');
const CustomError = require('../utils/customError');

const create = async (userData) => {
  const user = await User.create({ ...userData });
  console.log('userService create', user);

  return { status: 201, data: user };
}

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });
  console.log('userService getById', user);

  if (!user) throw new CustomError(404, "User not found");

  return { status: 200, data: user };
}

module.exports = {
  create,
  getById,
}