'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Accesses.belongsTo(models.Lecture, {foreignKey: 'classRoom', onDelete: 'CASCADE'})
    }
  };
  Accesses.init({
    moduleName: DataTypes.STRING,
    classRoom: DataTypes.STRING,
    createdby: DataTypes.STRING,
    device: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Accesses',
  });
  return Accesses;
};