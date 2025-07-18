const Joi = require("joi");

const createAuthorSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.empty": "Name is required",
    "any.required": "Name is required"
  }),
  bio: Joi.string().max(1000).optional()
});

const updateAuthorSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  bio: Joi.string().max(1000).optional()
});

module.exports = { createAuthorSchema, updateAuthorSchema }; 