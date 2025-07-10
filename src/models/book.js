'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, { foreignKey: 'authorId' });
      Book.hasMany(models.Loan, { foreignKey: 'bookId' });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    publishedDate: DataTypes.DATE,
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Authors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};