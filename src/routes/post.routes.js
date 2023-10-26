const express = require('express');
const validateJWT = require('../auth/validateJWT');
const postMiddleware = require('../middlewares/post.middleware');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateJWT, postMiddleware, postController.create);

module.exports = router;