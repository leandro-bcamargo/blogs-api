const jwt = require('jsonwebtoken');
const CustomError = require('../utils/customError');
const { userService } = require('../services');

const validateJWT = async (req, res, next) => {
  try {
    const secret = process.env.JWT_SECRET;
    const token = req.header('authorization');
    if (!token) throw new CustomError(401, "Token not found");
    const decoded = jwt.verify(token, secret);
    const { data } = await userService.getById(decoded.payload.id);
    console.log('validatejwt data', data);
    if (!data) throw new CustomError(401, "Expired or invalid token");

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = validateJWT;