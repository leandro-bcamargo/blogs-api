const { Category } = require('../models');

const create = async (categoryData) => {
  const category = await Category.create(categoryData);

  // console.log('categoriesService create:', category);

  return { status: 201, data: category };
};

module.exports = {
  create,
};