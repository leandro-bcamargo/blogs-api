const CustomError = require("../utils/customError");
const loginSchema = require("./loginSchema");

const loginMiddleware = (req, res, next) => {
  try {
    const loginData = req.body;
    const { error } = loginSchema.validate(loginData);
    // console.log('loginMiddleware error', error);
    if (error) {
      const message = error.details[0].message;
      const type = error.details[0].type;
      if (type === 'any.required') throw new CustomError(400, message);
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = loginMiddleware;