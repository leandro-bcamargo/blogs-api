module.exports = (sequelize, datatypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: datatypes.STRING(256),
      allowNull: false,
    }
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'categories',
  })

  return Category;
};