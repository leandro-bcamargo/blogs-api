const { BlogPost, User, Category } = require('../models');
const CustomError = require('../utils/customError');
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

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User,
      as: 'user', 
      attributes: { exclude: ['password'] } },
      { model: Category, 
      as: 'categories', 
      through: { attributes: [] } }
    ]
  });

  if (!post) throw new CustomError(404, 'Post does not exist');

  return { status: 200, data: post };
};

module.exports = {
  create,
  getAll,
  getById
};