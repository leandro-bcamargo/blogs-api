const CustomError = require("../utils/customError");
const createUserSchema = require("./createUserSchema")

const userMiddleware = (req, res, next) => {
  try {
    const userData = req.body;
    const { error } = createUserSchema.validate(userData);
    if (error) {
      const message = error.details[0].message;
      const type = error.details[0].type;
      if (type === "string.min") throw new CustomError(400, message);
      if (type === "string.email") throw new CustomError(400, message);
    }
    next();
  } catch (e) {
    next(e)
  }
}

module.exports = userMiddleware;