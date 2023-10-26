const { Category } = require('../models');
const CustomError = require('../utils/customError');

const doCategoriesExist = async (categoryIds, next) => {
  try {
    const promisesArr = categoryIds.map((id) => Category.findOne({ where: { id } }));
    const categories = await Promise.all(promisesArr);
    // console.log('doCategoriesExist:', categories);
    const checkCategories = categories.every((category) => category !== null);

    if (!checkCategories) throw new CustomError(400, 'one or more "categoryIds" not found');
  } catch (error) {
    return next(error);
  }
};

module.exports = doCategoriesExist;