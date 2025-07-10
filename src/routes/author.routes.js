const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');

router.post('/', authorController.create);
router.get('/', authorController.findAll);
router.get('/:id', authorController.findOne);
router.put('/:id', authorController.update);
router.delete('/:id', authorController.delete);

module.exports = router;
