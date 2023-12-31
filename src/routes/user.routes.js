const express = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', userMiddleware, userController.create);
router.get('/', validateJWT, userController.getAll);
router.get('/:id', validateJWT, userController.getById);
router.delete('/:me', validateJWT, userController.removeLoggedUser);

module.exports = router;