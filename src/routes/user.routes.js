const express = require('express');
const { userController } = require('../controllers');
const userMiddleware = require('../middleware/user.middleware');

const router = express.Router();

router.post('/', userMiddleware, userController.create);

module.exports = router;