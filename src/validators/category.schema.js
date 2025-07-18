const Joi = require("joi");

const createCategorySchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.empty": "Name is required",
    "any.required": "Name is required"
  }),
  description: Joi.string().max(1000).optional()
});

const updateCategorySchema = Joi.object({
  name: Joi.string().min(2).max(100),
  description: Joi.string().max(1000).optional()
});

module.exports = { createCategorySchema, updateCategorySchema }; 