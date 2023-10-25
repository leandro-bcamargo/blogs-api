const jwt = require('jsonwebtoken');
const CustomError = require('../utils/customError');

const validateJWT = async (req, res, next) => {
  try {
    const secret = process.env.JWT_SECRET;
    const { authorization: token } = req.headers;
    // console.log('validateJWT token', req.headers);
    if (!token) throw new CustomError(401, 'Token not found');
    let decoded;
    try {
      decoded = jwt.verify(token, secret);
    } catch (e) {
      throw new CustomError(401, 'Expired or invalid token');
    }
    req.user = decoded.payload.dataValues;
    // console.log('validateJWT id', id);
    // const { data } = await userService.getById(id);
    // console.log('validatejwt data', data);
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = validateJWT;