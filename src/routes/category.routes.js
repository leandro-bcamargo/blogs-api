const express = require('express');
const { categoryController } = require('../controllers');
const {categoryMiddleware} = require('../middlewares')
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', validateJWT, categoryMiddleware, categoryController.create);
router.get('/', validateJWT, categoryController.getAll);

module.exports = router;