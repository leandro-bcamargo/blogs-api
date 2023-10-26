const { BlogPost } = require('../models');
const doCategoriesExist = require('../validations/doCategoriesExist');

const create = async (postData, next, userId) => {
  const { title, content, categoryIds } = postData;
  await doCategoriesExist(postData.categoryIds, next);
  const post = await BlogPost.create({ title, content, userId });
  // console.log('postService create:', post);
  await post.addCategories(categoryIds);

  return { status: 201, data: post };
};

module.exports = {
  create,
};