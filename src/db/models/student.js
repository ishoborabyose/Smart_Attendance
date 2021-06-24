'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.Card, {foreignKey: 'cardId', onDelete: 'CASCADE' })
      Student.belongsTo(models.Lecture, {foreignKey: 'registrationN', as: 'student', onDelete: 'CASCADE'})
    }
  };
  Student.init({
    cardId: DataTypes.INTEGER,
    registrationN: DataTypes.INTEGER,
    names: DataTypes.STRING,
    gender: DataTypes.STRING,
    faculty: DataTypes.STRING,
    department: DataTypes.STRING,
    school: DataTypes.STRING,
    college: DataTypes.STRING,
    year: DataTypes.INTEGER,
    contact: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};