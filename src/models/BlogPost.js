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
      allowNull: false,
    },
    userId: {
      type: datatypes.INTEGER,
      allowNull: false,
    },
    updated: {
      type: datatypes.DATE,
      allowNull: false,
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