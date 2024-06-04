const {DataTypes} = require ('sequelize');
const sequelize = require ('../util/database');

const Video = sequelize.define('Video', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: false
    }
});
  
  module.exports = Video;

