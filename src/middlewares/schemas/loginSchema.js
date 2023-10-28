const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().empty(''),
  password: Joi.string().alphanum().required().empty(''),
}).messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = loginSchema;