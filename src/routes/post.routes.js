const express = require('express');
const validateJWT = require('../auth/validateJWT');
const postMiddleware = require('../middlewares/post.middleware');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, postMiddleware, postController.create);
router.get('/:id', validateJWT, postController.getById);
router.get('/', validateJWT, postController.getAll);

module.exports = router;