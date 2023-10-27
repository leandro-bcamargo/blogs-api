const { BlogPost, User, Category } = require('../models');
const doCategoriesExist = require('../validations/doCategoriesExist');

const create = async (postData, next, userId) => {
  const { title, content, categoryIds } = postData;
  await doCategoriesExist(categoryIds, next);
  const post = await BlogPost.create({ title, content, userId });
  // console.log('postService create:', post);
  await post.addCategories(categoryIds);

  return { status: 201, data: post };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
    attributes: { exclude: ['userId'] },
  });

  return { status: 200, data: posts };
};

module.exports = {
  create,
  getAll,
};