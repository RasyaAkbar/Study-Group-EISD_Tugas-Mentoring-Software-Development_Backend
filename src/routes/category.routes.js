const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const validateRequest = require('../middleware/validate-request.middleware');
const { createCategorySchema, updateCategorySchema } = require('../validators/category.schema');
 const { authenticate } = require("../middleware/auth.middleware");

router.post('/', validateRequest(createCategorySchema), categoryController.create);
router.get('/', authenticate, categoryController.findAll);
router.get('/:id', authenticate, categoryController.findOne);
router.put('/:id', validateRequest(updateCategorySchema), categoryController.update);
router.delete('/:id', authenticate, categoryController.delete);

module.exports = router; 