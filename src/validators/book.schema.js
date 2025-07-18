const Joi = require("joi");

const createBookSchema = Joi.object({
  title: Joi.string().min(1).max(255).required().messages({
    "string.empty": "Title is required",
    "any.required": "Title is required"
  }),
  isbn: Joi.string().min(1).max(100).required().messages({
    "string.empty": "ISBN is required",
    "any.required": "ISBN is required"
  }),
  publishedDate: Joi.date().optional(),
  authorId: Joi.number().integer().required().messages({
    "any.required": "Author is required"
  }),
  categoryId: Joi.number().integer().optional()
});

const updateBookSchema = Joi.object({
  title: Joi.string().min(1).max(255),
  isbn: Joi.string().min(1).max(100),
  publishedDate: Joi.date().optional(),
  authorId: Joi.number().integer(),
  categoryId: Joi.number().integer().optional()
});

module.exports = { createBookSchema, updateBookSchema }; 