const {DataTypes} = require ('sequelize');
const sequelize = require ('../util/database');
const Activity = sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
});
  
module.exports = Activity;

