const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');
const validateRequest = require('../middleware/validate-request.middleware');
const { createAuthorSchema, updateAuthorSchema } = require('../validators/author.schema');
 const { authenticate } = require("../middleware/auth.middleware");

router.post('/', validateRequest(createAuthorSchema), authorController.create);
router.get('/', authenticate, authorController.findAll);
router.get('/:id', authenticate, authorController.findOne);
router.put('/:id', validateRequest(updateAuthorSchema), authorController.update);
router.delete('/:id', authenticate, authorController.delete);

module.exports = router;
