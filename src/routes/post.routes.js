const express = require('express');
const validateJWT = require('../auth/validateJWT');
const { createPostMiddleware, updatePostMiddleware } = require('../middlewares');
const { postController } = require('../controllers');

const router = express.Router();

router.get('/search', validateJWT, postController.getBySearch);
router.get('/:id', validateJWT, postController.getById);
router.get('/', validateJWT, postController.getAll);
router.post('/', validateJWT, createPostMiddleware, postController.create);
router.put('/:id', validateJWT, updatePostMiddleware, postController.update);
router.delete('/:id', validateJWT, postController.remove);

module.exports = router;