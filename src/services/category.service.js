const { Category } = require('../models');

const create = async (categoryData) => {
  const category = await Category.create(categoryData);

  // console.log('categoryService create:', category);

  return { status: 201, data: category };
};

const getAll = async () => {
  const categories = await Category.findAll();

  return { status: 200, data: categories };
};

module.exports = {
  create,
  getAll,
};