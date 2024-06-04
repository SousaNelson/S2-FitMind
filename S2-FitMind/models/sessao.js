const {DataTypes} = require ('sequelize');
const sequelize = require ('../util/database');
  const Session = sequelize.define('Session', {
   
    duração: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TypeTherapy: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  module.exports = Session;
