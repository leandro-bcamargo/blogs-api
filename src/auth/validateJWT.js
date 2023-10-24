const jwt = require('jsonwebtoken');
const CustomError = require('../utils/customError');
const { userService } = require('../services');

const validateJWT = async (req, res, next) => {
  try {
    const secret = process.env.JWT_SECRET;
    const token = req.header('authorization');
    console.log('validateJWT token', token);
    if (!token) throw new CustomError(401, "Token not found");
    const decoded = jwt.verify(token, secret);
    const { id } = decoded.payload.dataValues;
    // console.log('validateJWT id', id);
    const { data } = await userService.getById(id);
    console.log('validatejwt data', data);
    if (!data) throw new CustomError(401, "Expired or invalid token");

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = validateJWT;