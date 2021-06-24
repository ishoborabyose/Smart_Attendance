'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AttendedStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      AttendedStudent.hasMany(models.Card, {foreignKey: 'cardId', onDelete: 'CASCADE' })
      AttendedStudent.belongsTo(models.Lecture, {foreignKey: 'regNumber', onDelete: 'CASCADE'})
    }
  };
  AttendedStudent.init({
    regNumber: DataTypes.INTEGER,
    studentNames: DataTypes.STRING,
    moduleName: DataTypes.STRING,
    location: DataTypes.STRING,
    lecturer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AttendedStudent',
  });
  return AttendedStudent;
};