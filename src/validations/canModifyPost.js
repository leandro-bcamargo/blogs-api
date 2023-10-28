const CustomError = require('../utils/customError');
const { BlogPost } = require('../models');

const canModifyPost = async (postId, reqId) => {
  const post = await BlogPost.findOne({ where: { id: postId } });

  if (!post) throw new CustomError(404, 'Post does not exist');

  if (post.userId !== reqId) throw new CustomError(401, 'Unauthorized user');
};

module.exports = canModifyPost;