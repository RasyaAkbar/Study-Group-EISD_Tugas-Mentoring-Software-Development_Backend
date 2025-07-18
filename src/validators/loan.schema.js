const Joi = require("joi");

const createLoanSchema = Joi.object({
  userId: Joi.number().integer().required().messages({
    "any.required": "User is required"
  }),
  bookId: Joi.number().integer().required().messages({
    "any.required": "Book is required"
  }),
  loanDate: Joi.date().required().messages({
    "any.required": "Loan date is required"
  }),
  returnDate: Joi.date().optional(),
  status: Joi.string().valid("borrowed", "returned").required().messages({
    "any.required": "Status is required",
    "any.only": "Status must be 'borrowed' or 'returned'"
  })
});

const updateLoanSchema = Joi.object({
  userId: Joi.number().integer(),
  bookId: Joi.number().integer(),
  loanDate: Joi.date(),
  returnDate: Joi.date().optional(),
  status: Joi.string().valid("borrowed", "returned")
});

module.exports = { createLoanSchema, updateLoanSchema }; 