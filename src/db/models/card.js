'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.belongsTo(models.Student, {foreignKey: 'cardId', onDelete: 'CASCADE'})
      Card.belongsTo(models.AttendedStudent, {foreignKey: 'cardId', onDelete: 'CASCADE'})
    }
  };
  Card.init({
    cardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};