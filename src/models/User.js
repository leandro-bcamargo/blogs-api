module.exports = (sequelize, datatypes) => {
  const User = sequelize.define('User', {
    id: {
      type: datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: datatypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: datatypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: datatypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: datatypes.STRING(255),
      allowNull: false,
    }
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'users',
  })

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blogPosts'
    })
  };

  return User;
};