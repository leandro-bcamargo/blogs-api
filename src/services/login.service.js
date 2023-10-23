const { User } = require("../models");
const CustomError = require("../utils/customError");

const login = async (loginData) => {
  // console.log('loginService loginData:', loginData)
  const { email, password } = loginData;
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new CustomError(400, "Invalid fields");
  console.log('loginService user:', user)

  return user;
}

module.exports = {
  login,
}