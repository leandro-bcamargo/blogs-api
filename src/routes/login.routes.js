const express = require('express');
const { loginMiddleware } = require('../middlewares');
const { loginController } = require('../controllers');

const router = express.Router();

router.post('/', loginMiddleware, loginController.login);

module.exports = router;