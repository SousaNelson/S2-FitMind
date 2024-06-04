const {DataTypes} = require ('sequelize');
const sequelize = require ('../util/database');

  const Meditation = sequelize.define('Meditation', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  
module.exports = Meditation;

