const express = require('express');
const { userController } = require('../controllers');
const userMiddleware = require('../middleware/user.middleware');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', userMiddleware, userController.create);
router.get('/', validateJWT, userController.getAll);

module.exports = router;