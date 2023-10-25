const generateJWT = require('../auth/generateJWT');
const { User } = require('../models');
const CustomError = require('../utils/customError');

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (!user) return null;

  return user;
};

const create = async (userData) => {
  const isEmailUsed = await getByEmail(userData.email);
  if (isEmailUsed) throw new CustomError(409, 'User already registered');

  await User.create(userData);

  const token = generateJWT(userData);

  return { status: 201, data: token };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  // console.log('userService users:', users);

  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  // console.log('userService getbyId:', user);

  if (!user) throw new CustomError(404, 'User does not exist');

  return { status: 200, data: user };
};

module.exports = {
  create,
  getById,
  getByEmail,
  getAll,
};