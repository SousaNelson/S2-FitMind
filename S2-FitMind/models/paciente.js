
const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');

const Patient = sequelize.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  physicalActivities: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dailyDiet: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  medications: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports =  Patient ;
