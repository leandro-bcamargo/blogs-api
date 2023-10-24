const Joi = require('joi');

const createUserSchema = Joi.object({
  displayName: Joi.string().required().min(8)
    .messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
  email: Joi.string().email().required().empty('')
    .messages({
      'string.email': '"email" must be a valid email',
    }),
  password: Joi.string().alphanum().min(6).messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

module.exports = createUserSchema;