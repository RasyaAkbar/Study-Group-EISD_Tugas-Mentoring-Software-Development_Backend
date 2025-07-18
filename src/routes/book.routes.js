const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');
const validateRequest = require('../middleware/validate-request.middleware');
const { createBookSchema, updateBookSchema } = require('../validators/book.schema');
 const { authenticate } = require("../middleware/auth.middleware");

router.post('/', validateRequest(createBookSchema), bookController.create);
router.get('/', bookController.findAll);
router.get('/:id', bookController.findOne);
router.put('/:id', validateRequest(updateBookSchema), bookController.update);
router.delete('/:id', bookController.delete);

module.exports = router;
