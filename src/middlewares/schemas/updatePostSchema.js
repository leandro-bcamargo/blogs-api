const Joi = require('joi');

const updatePostSchema = Joi.object({
  title: Joi.string().empty('').required(),
  content: Joi.string().empty('').required(),
}).messages({
  'any.required': 'Some required fields are missing',
  'str.empty': ',Some required fields are missing', 
});

module.exports = updatePostSchema;