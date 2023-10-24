const generateJWT = require('../auth/generateJWT');
const { loginService } = require('../services');

const login = async (req, res, next) => {
  try {
    const loginData = req.body;
    const { password, ...data } = await loginService.login(loginData);
    // console.log('loginController data:', data);

    const token = generateJWT(data);
    // console.log('loginController token', token)

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};