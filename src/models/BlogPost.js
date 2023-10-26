module.exports = (sequelize, datatypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: datatypes.STRING(256),
      allowNull: false,
    },
    content: {
      type: datatypes.STRING(256),
      allowNull: false,
    },
    published: {
      type: datatypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    userId: {
      type: datatypes.INTEGER,
    },
    updated: {
      type: datatypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    underscored: true,
    tableName: 'blog_posts',
    timestamps: false,
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
  };

  return BlogPost;
};