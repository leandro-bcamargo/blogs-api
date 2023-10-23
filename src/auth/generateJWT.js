const jwt = require('jsonwebtoken');

const generateJWT = (data) => {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  }

  const secret = process.env.JWT_SECRET;

  const payload = { payload: data };

  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
}

module.exports = generateJWT;