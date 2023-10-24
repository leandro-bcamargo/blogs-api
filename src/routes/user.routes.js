const express = require('express');
const { userController } = require('../controllers');
const userMiddleware = require('../middleware/user.middleware');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('', validateJWT, userMiddleware, userController.create);

module.exports = router;