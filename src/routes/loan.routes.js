const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan.controller');

router.post('/', loanController.create);
router.get('/', loanController.findAll);
router.get('/:id', loanController.findOne);
router.put('/:id', loanController.update);
router.delete('/:id', loanController.delete);

module.exports = router;
