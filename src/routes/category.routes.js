const express = require('express');
const { categoryController } = require('../controllers');
const categoryMiddleware = require('../middleware/category.middleware');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateJWT, categoryMiddleware, categoryController.create);

module.exports = router;