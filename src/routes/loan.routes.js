const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan.controller');
const validateRequest = require('../middleware/validate-request.middleware');
const { createLoanSchema, updateLoanSchema } = require('../validators/loan.schema');
 const { authenticate } = require("../middleware/auth.middleware"); 

router.post('/', validateRequest(createLoanSchema), loanController.create);
router.get('/', authenticate, loanController.findAll);
router.get('/:id', authenticate, loanController.findOne);
router.put('/:id', validateRequest(updateLoanSchema), loanController.update);
router.delete('/:id', authenticate, loanController.delete);

module.exports = router;
