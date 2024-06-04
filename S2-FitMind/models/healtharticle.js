const {DataTypes} = require ('sequelize');
const sequelize = require ('../util/database');

const HealthArticle = sequelize.define('HealthArticle', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
});
  
  module.exports = HealthArticle;

