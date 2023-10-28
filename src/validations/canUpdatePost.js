const CustomError = require('../utils/customError');
const { BlogPost } = require('../models');

const canUpdatePost = async (postId, reqId) => {
  const {userId} = await BlogPost.findOne({ where: { id: postId }});

  if (userId !== reqId) throw new CustomError(401, 'Unauthorized user');
}

module.exports = canUpdatePost;