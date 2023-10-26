module.exports = (sequelize, datatypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: datatypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories'
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
      as: 'posts',
    })
  };

  return PostCategory;
};